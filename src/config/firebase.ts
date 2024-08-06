// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkQGvEgZO0tT8-wt520BKD3o5LiKNASMs",
    authDomain: "monitorme-fee8c.firebaseapp.com",
    projectId: "monitorme-fee8c",
    storageBucket: "monitorme-fee8c.appspot.com",
    messagingSenderId: "851990130952",
    appId: "1:851990130952:web:649fdd6dfc5385c3dd3cbd",
    measurementId: "G-SNKBT9NYCG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
