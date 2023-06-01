import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "leetclone-8a6ac.firebaseapp.com",
  projectId: "leetclone-8a6ac",
  storageBucket: "leetclone-8a6ac.appspot.com",
  messagingSenderId: "792273062900",
  appId: "1:792273062900:web:b27bca34aa7487a2cb47a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
