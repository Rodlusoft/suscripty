import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRfm65YIGLRPGW5Ld1fdAwN2uc6Hu5n3k",
  authDomain: "suscripty.firebaseapp.com",
  projectId: "suscripty",
  storageBucket: "suscripty.appspot.com",
  messagingSenderId: "945518148331",
  appId: "1:945518148331:web:19c357d76952efa6281cae",
  measurementId: "G-D21VK7C7FS"
};

const firebase: FirebaseApp = initializeApp(firebaseConfig);

const storage: FirebaseStorage =  getStorage(firebase)

const auth: Auth = getAuth(firebase)

const db: Firestore = getFirestore(firebase)

export { storage, auth, db }
