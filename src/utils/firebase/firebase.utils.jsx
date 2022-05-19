import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword } from 'firebase/auth';
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
      prompt: "select_account",
  });

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt, 
          ...additionalInformation,
        });
      } catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return; 
    return await createAuthUserWithEmailAndPassword(auth, email, password)
   }

   export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return; 
    return await signInWithEmailAndPassword(auth, email, password)
   }