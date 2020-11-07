import Super from "./Super";
import { sign } from "../../Utils/jwt";
import { findUserByUsername, Info } from "../../Domain/User";
import { compare } from "bcrypt";

class Login extends Super {
  private user_password?: string;
  constructor(info: Info) {
    super(info);
  }
  public async findUser() {
    const { username } = this.info;
    let user;
    if (username) {
      user = await findUserByUsername(username);
    }
    if (user) {
      this.user_password = user.getDataValue("password");
    }
    return user;
  }
  public async comparePassword() {
    if (this.user_password) {
      return await compare(this.info.password, this.user_password);
    } else {
      return false;
    }
  }
  public signToken() {
    const { username } = this.info;
    return sign({
      username,
      date: Date.now(),
    });
  }
}
export default Login;
