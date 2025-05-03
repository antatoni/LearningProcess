
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCh-38VvFyhJAoK-RvZBPxdxpHXnHp4Egg",
    authDomain: "fir-intro-e6719.firebaseapp.com",
    projectId: "fir-intro-e6719",
    storageBucket: "fir-intro-e6719.firebasestorage.app",
    messagingSenderId: "928028572845",
    appId: "1:928028572845:web:5bf8faa0ae6b0e40da9a24",
    measurementId: "G-V7J84MQZ3X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);