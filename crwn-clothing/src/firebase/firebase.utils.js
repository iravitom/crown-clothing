import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "@firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8mA-vj94ACXttatyfZVKY-4x4c3ZM0Ug",
  authDomain: "crown-db-c36ca.firebaseapp.com",
  projectId: "crown-db-c36ca",
  storageBucket: "crown-db-c36ca.appspot.com",
  messagingSenderId: "1033107382506",
  appId: "1:1033107382506:web:abc3361aec693d3229f793",
  measurementId: "G-ZB653D17ER",
};

const app = initializeApp(firebaseConfig);
export const getusers = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
  //const docRef = await getDocs(collection(db, "users", `${userAuth.uid}`));
  //data.docs.map((doc) => console.log(doc.data()));
  // const docRef = doc(db, "users"), where("capital", "==", true));;

  const q = query(
    collection(db, "users"),
    where("emailId", "==", "iravitom@googlemail.com")
  );
  const docSnap = await getDoc(q);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const db = getFirestore(app);

export const auth = getAuth(app);
