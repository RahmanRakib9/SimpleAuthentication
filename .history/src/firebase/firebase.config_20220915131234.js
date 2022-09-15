import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.,
  authDomain: "simpleauthentication-c52c5.firebaseapp.com",
  projectId: "simpleauthentication-c52c5",
  storageBucket: "simpleauthentication-c52c5.appspot.com",
  messagingSenderId: "370853078783",
  appId: "1:370853078783:web:b96a2a3d0519ea2fc00eca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
