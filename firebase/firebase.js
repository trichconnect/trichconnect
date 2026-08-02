// Import modern Firebase SDK functions directly via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your exact Firebase configuration copied from the screenshot
const firebaseConfig = {
  apiKey: "AIzaSyAZb0b6rFaOTw6stLCCpYzXT43Di9dJ21s",
  authDomain: "trichconnect.firebaseapp.com",
  projectId: "trichconnect",
  storageBucket: "trichconnect.firebasestorage.app",
  messagingSenderId: "544259822509",
  appId: "1:544259822509:web:a35a7e11d3da6f900e8724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Authentication and Database for the rest of your app
export const auth = getAuth(app);
export const db = getFirestore(app);