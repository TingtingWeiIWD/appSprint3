// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDz0_sBV8qegeHMvRNYb_s4PNSJNOxS7jE",
  authDomain: "todo-d2cd1.firebaseapp.com",
  projectId: "todo-d2cd1",
  storageBucket: "todo-d2cd1.appspot.com",
  messagingSenderId: "668365714036",
  appId: "1:668365714036:web:b18da590ffa20df86a1721",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
