import { Info, findUserByUsername } from "../../Domain/User";
import sendEmail from "../../Utils/email";
import getGlobal from "../../Utils/global";
import { sign } from "../../Utils/jwt";
import Super from "./Super";

const { email } = getGlobal();
const { link: linkUrl } = email;
class FindBackByEmail extends Super {
  constructor(info: Info) {
    super(info);
  }
  public async sendEmail() {
    const { username, email } = this.info;
    if (username && email) {
      const key = sign({
        username,
        date: Date.now(),
      });
      const link = `${linkUrl}?key=${key}`;
      const html = `<h2>你好 ${username}</h2>
            请点击以下链接重新设置密码
            <a href=${link}>重置密码</a>
            <br>
            <p>请在24小时内完成重置，24小时后此邮件失效，您将需要重新提交密码找回请求。如果您没有进行相关操作，错误的收到了此邮件，您无需执行任何操作，您的密码将不会被修改！</p>
            `;
      await sendEmail("找回密码测试", html, email);
    }
  }
  /**
   * 检查账号是否匹配邮箱
   */
  public async checkInfoValid(): Promise<Boolean> {
    const { username, email } = this.info;
    let user;
    if (username && email) {
      user = await findUserByUsername(username);
      if (!user) {
        return false;
      }
      if (user.getDataValue('email') === email) {
        return true;
      }
    } 
    return false;
  }
}

export default FindBackByEmail;