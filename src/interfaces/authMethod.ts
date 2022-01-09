interface IAuthMethod {
  method: AuthMethod;
}

export enum AuthMethod {
  email =  "EMAIL",
  google = "GOOGLE",
  facebook = "FACEBOOK",
}

export default IAuthMethod;
