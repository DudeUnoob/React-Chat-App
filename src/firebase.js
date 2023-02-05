// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1YUAcWcdZ8NW9fOEyfvbTmwC0FWCeGE",
  authDomain: "chatapp-c592b.firebaseapp.com",
  projectId: "chatapp-c592b",
  storageBucket: "chatapp-c592b.appspot.com",
  messagingSenderId: "131952871900",
  appId: "1:131952871900:web:b1982abd545be2c83de719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
