import { initializeApp } from "firebase/app";
import {getAuth, connectAuthEmulator} from "firebase/auth";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";
import {getFunctions, connectFunctionsEmulator} from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBtFLd62V_zZovwMCZLHX7P_pCN6HzXJjk",
  authDomain: "musicpartyapp-1b42c.firebaseapp.com",
  projectId: "musicpartyapp-1b42c",
  storageBucket: "musicpartyapp-1b42c.appspot.com",
  messagingSenderId: "525572188685",
  appId: "1:525572188685:web:295d6c4b985ead70eb4344",
  measurementId: "G-GG7563W1KN"
};

const fbApp = initializeApp(firebaseConfig);

export const fbAuth = getAuth(fbApp);
connectAuthEmulator(fbAuth, "http://localhost:9099");
export const fbFunctions = getFunctions(fbApp);
connectFunctionsEmulator(fbFunctions, 'localhost', 5001);
export const db = getFirestore(fbApp);
connectFirestoreEmulator(db, 'localhost', 8080);

