import { getDownloadURL, ref as sRef, uploadBytes } from "firebase/storage";
import { storage } from "./client";

export const uploadImageToStorage = async (image: File, uid: string) => {
  const storageReference = sRef(storage, `avatars/${uid}/${image.name}`)

  await uploadBytes(storageReference, image)
    .then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    })
    .catch((error) => {
      console.log(error)
    });
}

export const getAvatarByUid = async (uid: string, avatar: string) => {
  const avatarReference = sRef(storage, `/avatars/${uid}/${avatar}`)

  return await getDownloadURL(avatarReference)
}