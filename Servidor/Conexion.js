// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV7A2W51dOTu7_klShyCItz_ki7v8zrvk",
  authDomain: "el-mundo-de-cheems.firebaseapp.com",
  databaseURL: "https://el-mundo-de-cheems-default-rtdb.firebaseio.com",
  projectId: "el-mundo-de-cheems",
  storageBucket: "el-mundo-de-cheems.appspot.com",
  messagingSenderId: "691357820580",
  appId: "1:691357820580:web:187887454398a9557d6831"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
