import { Model } from 'sequelize/types'
import { UserModel } from '../Model/Model'
export type Info = {
    username?: string
    password?: string
    name?: string
    gender?: string
    student_number?: string
    grade?: string
    phone?: string
    college?: string
    email?: string
} & Record<string, string>


async function hasAccountByUsername(username: string) {
    let params = await UserModel.findOne({
        where: {
            username
        }
    })
    if (params) {
        return true
    } else {
        return false
    }
}
async function createAccount(info: Info) {
    let data = info;
    await UserModel.create(data)
}
async function findUserByUsername(username: string): Promise<Model<any, any> | null> {
    return await UserModel.findOne({
        where: {
            username
        }
    })
}

async function updatePassword(id: number, password: string) {
    return await UserModel.update({
        password
    }, {
        where: {
            id
        }
    })
}


export { 
createAccount, 
hasAccountByUsername,
findUserByUsername,
updatePassword
}