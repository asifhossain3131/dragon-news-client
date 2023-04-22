// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsokgZCAVrCtBeUKno4FpNlR8-wFd-KRo",
  authDomain: "dragon-news-1890f.firebaseapp.com",
  projectId: "dragon-news-1890f",
  storageBucket: "dragon-news-1890f.appspot.com",
  messagingSenderId: "445194614736",
  appId: "1:445194614736:web:7d441684f9197766cd6bd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app