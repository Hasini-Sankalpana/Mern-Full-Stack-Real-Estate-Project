// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-735a1.firebaseapp.com",
  projectId: "mern-estate-735a1",
  storageBucket: "mern-estate-735a1.appspot.com",
  messagingSenderId: "1017965154299",
  appId: "1:1017965154299:web:16fd0c1c91b1f1aff4455e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);