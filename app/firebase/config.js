// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUjl_08JaxyFxbyIiliEskKHbUc26EtAg",
  authDomain: "garretgames-adm.firebaseapp.com",
  projectId: "garretgames-adm",
  storageBucket: "garretgames-adm.appspot.com",
  messagingSenderId: "828905286482",
  appId: "1:828905286482:web:63c0770968c3a6b674a88b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
