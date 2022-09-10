// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc3NtVWkEeA_MFl5oIjxmEUA4MGGY5BsM",
  authDomain: "wilson-897fb.firebaseapp.com",
  projectId: "wilson-897fb",
  storageBucket: "wilson-897fb.appspot.com",
  messagingSenderId: "524036637473",
  appId: "1:524036637473:web:57297027e3533b6183b460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

export { db, storage }