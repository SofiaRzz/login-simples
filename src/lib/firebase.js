// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbTMAIZdVMzeSIUNB8Qk6Ozd6aVoIs_9M",
  authDomain: "glass-setting-395722.firebaseapp.com",
  projectId: "glass-setting-395722",
  storageBucket: "glass-setting-395722.appspot.com",
  messagingSenderId: "916626461149",
  appId: "1:916626461149:web:fa6c784d2a987c4e37a634"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);