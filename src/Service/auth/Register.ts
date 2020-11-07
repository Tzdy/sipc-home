import { hasAccountByUsername, createAccount, Info } from '../../Domain/User'
import Super from './Super'

class Register extends Super {
    constructor(info: Info) {
        super(info)
    }
    public async hasAccount(): Promise<boolean> {
        const { username } = this.info;
        let hasAccount: boolean = false;
        if (username) {
            hasAccount = await hasAccountByUsername(username)
        }
        return hasAccount
    }
    public async createAccount() {
        return await createAccount(this.info);
    }
}
export default Register