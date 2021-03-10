import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJdHmTFyi1naCidYtJ8Bkcm8Ec0CI7vwU",
  authDomain: "clothing-db-6e5d5.firebaseapp.com",
  projectId: "clothing-db-6e5d5",
  storageBucket: "clothing-db-6e5d5.appspot.com",
  messagingSenderId: "852410286469",
  appId: "1:852410286469:web:fa0c4b1c189668c6b584ec",
  measurementId: "G-23KE2BW9EJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
