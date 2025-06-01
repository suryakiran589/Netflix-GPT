// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-MC3WGOnADFBQv_zT0wPaQRq4U4lFQso",
  authDomain: "netflixgpt-14589.firebaseapp.com",
  projectId: "netflixgpt-14589",
  storageBucket: "netflixgpt-14589.firebasestorage.app",
  messagingSenderId: "502216529948",
  appId: "1:502216529948:web:9005fca77015a1e84027d9",
  measurementId: "G-9KEHB6EKJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();