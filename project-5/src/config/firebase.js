// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo9QadXyJ8baSUh0ojADiklEk78BB2mDQ",
  authDomain: "vite-contact-aaaae.firebaseapp.com",
  projectId: "vite-contact-aaaae",
  storageBucket: "vite-contact-aaaae.appspot.com",
  messagingSenderId: "444520328220",
  appId: "1:444520328220:web:d7868cea10b0c2069583d9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
