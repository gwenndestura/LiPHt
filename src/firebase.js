// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJAQ-DZYGAERl1FJp2NAmdLPpoM41c1Bo",
  authDomain: "lipht-b4c97.firebaseapp.com",
  projectId: "lipht-b4c97",
  storageBucket: "lipht-b4c97.firebasestorage.app",
  messagingSenderId: "629910670726",
  appId: "1:629910670726:web:62bc6d1cc3dabe525d3007",
  measurementId: "G-GPVDMFE1EK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db so you can use it in other files
export { db };