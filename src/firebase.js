import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC04jWoz_GC3v7u0luJhmqT7OI8GkhImzY",
  authDomain: "chat-app-71fae.firebaseapp.com",
  projectId: "chat-app-71fae",
  storageBucket: "chat-app-71fae.appspot.com",
  messagingSenderId: "696524924070",
  appId: "1:696524924070:web:10b0f017333eb977b5c067"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
const analytics = getAnalytics(app);
