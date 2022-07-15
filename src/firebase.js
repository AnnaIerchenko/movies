// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "movies-c934b.firebaseapp.com",
  projectId: "movies-c934b",
  storageBucket: "movies-c934b.appspot.com",
  messagingSenderId: "773947493159",
  appId: "1:773947493159:web:1047789d192154c24b7702"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)