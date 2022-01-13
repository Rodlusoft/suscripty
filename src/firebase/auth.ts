import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import TAuthOperation from "../interfaces/authOperation";
import IUser from "../interfaces/user";
import { createNewUser, getUserById } from "./documents/users";
import { getAvatarByUid, uploadImageToStorage } from "./storage";

export const signUpWithEmail: (
  email: string,
  password: string,
  username: string,
  image: File
) => Promise<TAuthOperation> = async (email, password, username, image) => {
  const auth = getAuth();
  let authResponse: TAuthOperation = { status: false };

  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential: UserCredential) => {
      const user = userCredential.user;
      authResponse.uid = user.uid;
      authResponse.status = true;

      await uploadImageToStorage(image, user.uid);

      const userModel: IUser = {
        email: email,
        username: username,
        id: user.uid,
        avatar: await getAvatarByUid(user.uid, image.name),
      };

      createNewUser(userModel);

      return authResponse;
    })
    .catch((error) => {
      const errorMessage = error.message;
      authResponse.error = errorMessage;

      return authResponse;
    });

  return authResponse;
};

export const signInWithEmail: (email: string, password: string) => Promise<TAuthOperation> =
async (email, password) => {
  const auth = getAuth()
  let authResponse: TAuthOperation = { status: false }

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: UserCredential) => {
      const user = userCredential.user
      authResponse.uid = user.uid
      authResponse.status = true
      getUserById(user.uid)

      return authResponse
    })
    .catch((error) => {
      const errorMessage = error.message
      authResponse.error = errorMessage

      return authResponse
    })

  return authResponse
}

