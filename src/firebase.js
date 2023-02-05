// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMZX-ryjhWFeD1iKVFF9NK4ukKw6BMdaA",
  authDomain: "chatty-4d5c0.firebaseapp.com",
  projectId: "chatty-4d5c0",
  storageBucket: "chatty-4d5c0.appspot.com",
  messagingSenderId: "1068220305302",
  appId: "1:1068220305302:web:608cdc6252a741030a97b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
