import { sign as _sign, verify as _verify } from 'jsonwebtoken'
// 这不应该写在这里
let SECRET = 'asdsjhfjkhafdsff';

export function sign(data: any) {
    return _sign(data, SECRET)
}
export function verify(token: string) {
    return _verify(token, SECRET)
}
