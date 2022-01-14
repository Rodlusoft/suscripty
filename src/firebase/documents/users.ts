import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import IUser from "../../interfaces/user";
import { db } from "../client";

export const createNewUser: (user: IUser) => void =
  async (user) => {
    try {
      const docRef = await addDoc(collection(db, "users"), user);
      console.log(`docRef: ${docRef}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  export const getUserById: (id: string) => void = async (id) => {
  const q = query(collection(db, "users"), where("id", "==", id));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(`doc ${doc}`)
  });
}
