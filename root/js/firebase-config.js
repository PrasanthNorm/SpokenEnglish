// Import Firebase SDK
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getFirestore, collection, doc, getDoc, setDoc, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMpcrNn3lUwjENLbD58TZktXKYyHiee5o",
    authDomain: "vikas-ca5da.firebaseapp.com",
    projectId: "vikas-ca5da",
    storageBucket: "vikas-ca5da.firebasestorage.app",
    messagingSenderId: "206559562204",
    appId: "1:206559562204:web:d6e5e3a18229057a6f2719",
    measurementId: "G-LW55PDQKQK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper function to get user data from Firestore
const getUserData = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    return userDoc.exists() ? userDoc.data() : null;
  } catch (error) {
    console.error('Error getting user data:', error);
    return null;
  }
};

// Export the functions and Firebase instances
export { db, getUserData };