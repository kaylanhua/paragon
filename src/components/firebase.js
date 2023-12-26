// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTI5Ox_c9nn2O9fg33MpSWX6xFBf2f7XM",
  authDomain: "emails-5d292.firebaseapp.com",
  projectId: "emails-5d292",
  storageBucket: "emails-5d292.appspot.com",
  messagingSenderId: "685354508459",
  appId: "1:685354508459:web:78d3394ae2f87a251397ee",
  measurementId: "G-BQEDFDF9KF",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
