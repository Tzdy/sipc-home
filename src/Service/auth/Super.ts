import { Info } from "../../Domain/User";
import { ValidData } from "../../Utils/valid";
import InfoValid from './rules/info'
class Super {
  protected info: Info

  constructor(info: Info) {
    this.info = info
  }
  public validInput(): ValidData {
    let infoKeyArr = Object.keys(this.info);
    for (let i = 0; i < infoKeyArr.length; i ++) {
        const key = infoKeyArr[i];
        const result = InfoValid[key](this.info[key]);
        if (!result.success) {
            return result;
        }
    }
    return {
        success: true
    }
  }
}
export default Super;
