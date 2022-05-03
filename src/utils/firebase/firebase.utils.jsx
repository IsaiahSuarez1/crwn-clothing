import { InitializeApp } from 'Firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCZQ_2Pzf4b75EwB7Ngsi6X_pb5c_Ahk68",
    authDomain: "crwn-clothing-db-94e31.firebaseapp.com",
    projectId: "crwn-clothing-db-94e31",
    storageBucket: "crwn-clothing-db-94e31.appspot.com",
    messagingSenderId: "176350701614",
    appId: "1:176350701614:web:f5f4caba3122ff1f0b97bf"
  };
  
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth(); 
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)