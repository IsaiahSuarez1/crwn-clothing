import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCZQ_2Pzf4b75EwB7Ngsi6X_pb5c_Ahk68",
    authDomain: "crwn-clothing-db-94e31.firebaseapp.com",
    projectId: "crwn-clothing-db-94e31",
    storageBucket: "crwn-clothing-db-94e31.appspot.com",
    messagingSenderId: "176350701614",
    appId: "1:176350701614:web:f5f4caba3122ff1f0b97bf"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account",
  });

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userDocRef;
  }