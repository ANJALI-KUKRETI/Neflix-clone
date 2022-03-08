import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcjQwDUkrbQiqD6Pmn51eRMqVRfDv-ayQ",
  authDomain: "netflix-clone-5bf0b.firebaseapp.com",
  projectId: "netflix-clone-5bf0b",
  storageBucket: "netflix-clone-5bf0b.appspot.com",
  messagingSenderId: "776140709667",
  appId: "1:776140709667:web:413eecf3dd412eafbe3696",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
