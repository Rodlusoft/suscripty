import { signInWithEmail, signUpWithEmail } from "../firebase/auth";
import { AuthMethod } from "../interfaces/authMethod";
import IAuthOperation from "../interfaces/authOperation";

class User {
  username: string;
  password: string;
  email: string;
  avatar: File;

  constructor(
    email: string,
    password: string,
    username?: string,
    avatar?: File
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatar = avatar;
  }
}

export const checkIfUserValid: (email: string, password: string) => boolean = (
  email,
  password
) => {
  return password.trim().length > 5 && email.trim() !== "";
};

export const checkIfRegistryUserValid: (
  email: string,
  password: string,
  username: string
) => boolean = (email, password, username) => {
  return username.trim() !== "" && checkIfUserValid(email, password);
};

export const selectSignUpAuthMethod: (
  method: AuthMethod,
  user: User
) => Promise<IAuthOperation> = async (method, user) => {
  switch (method) {
    default:
      return await signUpWithEmail(
        user.email,
        user.password,
        user.username,
        user.avatar
      );
  }
};

export const selectSignInAuthMethod: (
  method: AuthMethod,
  user: User
) => Promise<IAuthOperation> = async (method, user) => {
  switch (method) {
    default:
      return await signInWithEmail(user.email, user.password);
  }
};

export default User;
