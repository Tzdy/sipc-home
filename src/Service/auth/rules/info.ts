import { isValid } from "../../../Utils/valid";
const InfoValid: Record<string, Function> = {
  username(str: string) {
    return isValid(str, [
      { min: 10, max: 16, errMessage: "用户名应该大于10位，小于等于16位" },
      { test: /^(?![^a-zA-Z]+$)(?!\D+$)/, errMessage: "同时有英文与数字" },
    ]);
  },
  password(str: string) {
    return isValid(str, [
      { min: 10, max: 16, errMessage: "密码应该大于10位，小于等于16位" },
      { test: /^(?![^a-zA-Z]+$)(?!\D+$)/, errMessage: "同时有英文与数字" },
    ]);
  },
  name(str: string) {
    return isValid(str, [
      { min: 1, max: 16, errMessage: "姓名应大于等于1位，小于等于16位" },
      {
        test: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
        errMessage: "姓名仅为中文",
      },
    ]);
  },
  gender(str: string) {
    return isValid(str, [
      { min: 1, max: 1, errMessage: "性别为一位数字" },
      { test: /[0-1]/, errMessage: "性别应该为0-1" },
    ]);
  },
  student_number(str: string) {
    return isValid(str, [
      { min: 8, max: 10, errMessage: "8位或10位数字" },
      { test: /^\d{1,}$/g, errMessage: "学号仅为数字" },
    ]);
  },
  grade(str: string) {
    return isValid(str, [
      { min: 6, max: 6, errMessage: "6位字符" },
      {
        test: /\d{2,2}级(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+生/,
        errMessage: "格式为XX级XX生",
      },
    ]);
  },
  phone(str: string) {
    return isValid(str, [
      {
        test: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
        errMessage: "请使用正确手机号格式",
      },
    ]);
  },
  college(str: string) {
    return isValid(str, [
      { min: 1, max: 32, errMessage: "不能为空" },
      {
        test: /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
        errMessage: "学院仅为中文",
      },
    ]);
  },
  email(str: string) {
    return isValid(str, [
      {
        test: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errMessage: "请使用正确邮箱",
      },
    ]);
  },
};

export default InfoValid;
