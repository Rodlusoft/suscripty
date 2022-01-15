import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import IGroup, { IGroupResponse } from "../../interfaces/groups";
import Group from "../../models/group";
import { db } from "../client";

export const createNewGroup: (group: Object) => Promise<IGroupResponse> = async (
  group
) => {
  const response: IGroupResponse = { status: false };

  try {
    const docRef = await addDoc(collection(db, "groups"), group);
    response.uid = docRef.id;

    return response;
  } catch (e) {
    console.log(`${e}`);
    return response;
  }
};

export const getUserById: (id: string) => Promise<IGroupResponse> = async (
  id
) => {
  const response: IGroupResponse = { status: false };
  const q = query(collection(db, "groups"), where("id", "==", id));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    response.uid = doc.id;
  });

  return response;
};

export const addCoSuscriptors: (
  id: string,
  coSuscriptorsId: [string]
) => void = async (id, coSuscriptorsId) => {
  const group = doc(db, "groups", id);
  console.log(group);
  await updateDoc(group, {
    coSuscriptorsId: coSuscriptorsId,
  });
};
