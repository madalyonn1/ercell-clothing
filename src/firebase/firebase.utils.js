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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
