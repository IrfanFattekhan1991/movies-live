// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-qZ6jKPzE_bhZ2piG8dA0Yfa0_HKBGoY",
  authDomain: "movies-website-21454.firebaseapp.com",
  projectId: "movies-website-21454",
  storageBucket: "movies-website-21454.appspot.com",
  messagingSenderId: "233564738346",
  appId: "1:233564738346:web:20354aeed1399a6966c453",
  measurementId: "G-K6H1R8ZQE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
