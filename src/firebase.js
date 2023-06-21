import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiNIHaYubmA79GRZARzULXh4m_SmkClt0",
  authDomain: "whatsappclone-9d6eb.firebaseapp.com",
  projectId: "whatsappclone-9d6eb",
  storageBucket: "whatsappclone-9d6eb.appspot.com",
  messagingSenderId: "766336588270",
  appId: "1:766336588270:web:9685a60000fc2b5cc716ff"
};

//to use firebase services in application
const app = initializeApp(firebaseConfig);

//to provide authentication
const auth = getAuth();

//let your users authenticate with Firebase using their Google Accounts
const provider = new GoogleAuthProvider();

export { auth, provider, app };