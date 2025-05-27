import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEssOjx27E395vOWgugj_qfZSP8ohMHMQ",
    authDomain: "taskmanagementkatomaran.firebaseapp.com",
    projectId: "taskmanagementkatomaran",
    storageBucket: "taskmanagementkatomaran.firebasestorage.app",
    messagingSenderId: "674199214189",
    appId: "1:674199214189:web:0a92338dd6a81e582b8764",
    measurementId: "G-1P2XPQKM1T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Persist login between page refreshes
setPersistence(auth, browserLocalPersistence);

export { auth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider };
