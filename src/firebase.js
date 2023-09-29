import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpU-ag1dLj2ATxQt57BQ4Nr4wis2_ahO0",
  authDomain: "vaxchain-fe052.firebaseapp.com",
  projectId: "vaxchain-fe052",
  storageBucket: "vaxchain-fe052.appspot.com",
  messagingSenderId: "734692121956",
  appId: "1:734692121956:web:4e6ffe855ef6f6da72ae71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}