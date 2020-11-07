export type ValidItem = {
    min?: number
    max?: number
    test?: RegExp
    errMessage?: string
}
export type ValidData = {
    success: boolean
    message?: string
}
export function isValid(data: string, validConfig: Array<ValidItem>) {
    for(let item of validConfig) {
        const { min, max, test, errMessage} = item
        if (typeof min == 'number') {
            if (data.length < min) {
                return {
                    success: false,
                    message: errMessage
                }
            }
        }
        if (typeof max == 'number') {
            if (data.length > max) {
                return {
                    success: false,
                    message: errMessage
                }
            }
        }
        if (test instanceof RegExp) {
            if (!test.test(data)) {
                return {
                    success: false,
                    message: errMessage
                }
            }
        }
    }
    return {
        success: true
    }
}

export function formValid(form: Record<string, any>, rules: Record<string, Function>) {
    let result;
    const keyArr = Object.keys(form);
    for (let i = 0; i < keyArr.length; i += 1) {
      const key = keyArr[i];
      result = rules[key](form[key]);
      if (!result.success) {
        return {
          name: key,
          ...result,
        };
      }
    }
    return result;
  }