// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_0DMCO9FchcIHvN5oqiSEnz_x_dxg7MQ",
  authDomain: "socialmediafirebase-dfb8b.firebaseapp.com",
  projectId: "socialmediafirebase-dfb8b",
  storageBucket: "socialmediafirebase-dfb8b.appspot.com",
  messagingSenderId: "518867649266",
  appId: "1:518867649266:web:db09be9caeca0dd2eb866b",
  measurementId: "G-Q3C0FGGSZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);