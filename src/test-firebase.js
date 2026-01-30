import { db } from './firebase.js';
import { collection, addDoc, getDocs } from "firebase/firestore";

async function testConnection() {
  try {
    console.log("🔄 Testing Firebase connection...");
    
    // Try to add a test document
    const docRef = await addDoc(collection(db, "test"), {
      message: "Hello from LiPHt!",
      timestamp: new Date().toString()
    });
    
    console.log("✅ SUCCESS! Document added with ID:", docRef.id);
    
    // Try to read it back
    const snapshot = await getDocs(collection(db, "test"));
    console.log("✅ Reading data from Firestore:");
    snapshot.forEach((doc) => {
      console.log("  -", doc.id, "=>", doc.data());
    });
    
    console.log("🎉 Firebase is connected and working!");
    
  } catch (error) {
    console.error("❌ ERROR:", error.message);
    console.error("Full error:", error);
  }
}

testConnection();