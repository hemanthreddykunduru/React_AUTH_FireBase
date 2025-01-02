// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC41zxQ3MK7tOnuA7Qu3sfbMhj7ZmcB9jc",
  authDomain: "reactbaseauth-1f0ba.firebaseapp.com",
  projectId: "reactbaseauth-1f0ba",
  storageBucket: "reactbaseauth-1f0ba.firebasestorage.app",
  messagingSenderId: "51195559389",
  appId: "1:51195559389:web:e19fe718a4560fedbb0a34",
  measurementId: "G-KT6NBYG4NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app,auth};