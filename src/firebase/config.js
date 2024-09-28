import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDJdmaDON1uckO4BL4vGFvS-Q0mBZcdMFY",
  authDomain: "radix-9544c.firebaseapp.com",
  projectId: "radix-9544c",
  storageBucket: "radix-9544c.appspot.com",
  messagingSenderId: "680596060676",
  appId: "1:680596060676:web:9a9883cfb91f587d749351",
  measurementId: "G-SSKCXZYFMZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const analytics = firebase.analytics();

export {app , db};

