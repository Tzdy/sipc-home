import { createTransport } from "nodemailer";
import getGlobal from "./global";

const { email } = getGlobal();
const { transport, from } = email;
export default function (title: string, html: string, to: string) {
  var trans = createTransport(transport);
  let info = trans.sendMail({
    from, // sender address
    to, // list of receivers
    subject: title, // Subject line
    html
  });
  return info
}
