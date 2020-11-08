import { findUserByUsername, Info, updatePassword } from "../../Domain/User";
import { verify } from "../../Utils/jwt";
import Super from "./Super";

class Reset extends Super {
    private key: string;
    private data: { username: string, date: number} | null = null;
    private id: number | undefined = undefined;
    constructor(info: Info, key: string) {
        super(info);
        this.key = key;
    }
    public getId() {
        return this.id;
    }
    public async resetPassword() {
        const { password } = this.info;
        if (this.id && password) {
            await updatePassword(this.id, password);
            return true;
        }   
        return false;
    }

    public async validUser() {
        if (this.data) {
            const { username } = this.data;
            const user = await findUserByUsername(username);
            if (user) {
                this.id = user.getDataValue('id');
                return true;
            } else {
                return false;
            }
        }
    }

    public validKey() {
        const data = verify(this.key);
        if (data) {
            if (typeof data === 'object') {
               const username = Reflect.get(data, 'username');
               const date = Reflect.get(data, 'date');
               if (username && Number.isInteger(date)) {
                   this.data = {
                       username,
                       date
                   }
                   return true;
               }
            }
        }
        this.data = null;
        return false;
    }
    /**
     * 
     * 不超过1天
     */
    public validDate() {
        if (this.data) {
            const { date } = this.data;
            if(Date.now() - date <= 1000 * 60 * 60 * 24) {
                return true;
            }
            return false;
        }
        return false;
    }


}

export default Reset;