// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-54d3c.firebaseapp.com",
  projectId: "mern-blog-54d3c",
  storageBucket: "mern-blog-54d3c.appspot.com",
  messagingSenderId: "867204602616",
  appId: "1:867204602616:web:0f8d17fc143d7c50c1f90d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
