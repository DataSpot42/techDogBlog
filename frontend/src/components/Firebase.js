// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


console.log(process.env)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdTUF3MfEKneceB1_uDULuvLIFdNocjlA",
  authDomain: "auth-3070e.firebaseapp.com",
  projectId: "auth-3070e",
  storageBucket: "auth-3070e.appspot.com",
  messagingSenderId: "673185263236",
  appId: "1:673185263236:web:a3ad0f861bccea6a519cd1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);