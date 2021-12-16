import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtFLd62V_zZovwMCZLHX7P_pCN6HzXJjk",
  authDomain: "musicpartyapp-1b42c.firebaseapp.com",
  projectId: "musicpartyapp-1b42c",
  storageBucket: "musicpartyapp-1b42c.appspot.com",
  messagingSenderId: "525572188685",
  appId: "1:525572188685:web:295d6c4b985ead70eb4344",
  measurementId: "G-GG7563W1KN"
};

export const fbApp = initializeApp(firebaseConfig);
export const fbAuth = getAuth(fbApp);
export const db = getFirestore(fbApp);
connectFirestoreEmulator(db, 'localhost', 8080);

