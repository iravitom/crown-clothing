import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth(app);
