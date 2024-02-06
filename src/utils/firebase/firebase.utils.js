import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXoOfYBN3cB7zmqmzE0yEIPqeOlRGnIHY",
  authDomain: "crwn-clothing-db-21951.firebaseapp.com",
  projectId: "crwn-clothing-db-21951",
  storageBucket: "crwn-clothing-db-21951.appspot.com",
  messagingSenderId: "6199566651",
  appId: "1:6199566651:web:d4721df5e9019f4a63971e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // get document reference in db, in collections 'users', w this user auth id 
  const userDocRef = doc(db, 'users', userAuth.uid); 

  console.log(userDocRef);
  // different ways to check if document exists. 
  // true or false if docuemnt exists
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // set the doc with this obj if it does not exists
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();    // when users are signing in

    // pass it the data we want ot set it with
    // if user snapshot does not exists
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  // else return if it does exists
  return userDocRef;

};