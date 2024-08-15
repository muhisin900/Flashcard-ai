// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8YYlZNVzffp3TAg7sp_kywBRqfKbimgo",
  authDomain: "flashcards-ai-c68ae.firebaseapp.com",
  projectId: "flashcards-ai-c68ae",
  storageBucket: "flashcards-ai-c68ae.appspot.com",
  messagingSenderId: "464804327205",
  appId: "1:464804327205:web:ebac990e374d9b561a74cc",
  measurementId: "G-ZBX8E310KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);