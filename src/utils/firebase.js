// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfberInA6CzSU1UNU_J4BeZSBT8jC0DZo",
  authDomain: "netflix-be204.firebaseapp.com",
  projectId: "netflix-be204",
  storageBucket: "netflix-be204.appspot.com",
  messagingSenderId: "386389244568",
  appId: "1:386389244568:web:b9e973ad2945821e43eeed",
  measurementId: "G-RTSV8SVEW6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
