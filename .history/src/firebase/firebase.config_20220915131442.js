import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: ,
  appId: "1:370853078783:web:b96a2a3d0519ea2fc00eca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
