// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIIg00IlTFk8U7yQn9DayHuVZICEi131I",
  authDomain: "coffee-store-2c97c.firebaseapp.com",
  projectId: "coffee-store-2c97c",
  storageBucket: "coffee-store-2c97c.firebasestorage.app",
  messagingSenderId: "413323700555",
  appId: "1:413323700555:web:0536b219d20e6118dca0ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);