import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDT-oG2N_k0HnQclk71EaM9varYwUabroE",
    authDomain: "visionboard-f77c0.firebaseapp.com",
    projectId: "visionboard-f77c0",
    storageBucket: "visionboard-f77c0.appspot.com",
    messagingSenderId: "862656713448",
    appId: "1:862656713448:web:5fbd2b6c67c3bf76f6ef5d"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}