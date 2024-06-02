// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdrEIX2efLmBJiYiss0tpAbO6_4hXiZ9U",
  authDomain: "react-dragon-news-auth-3b8db.firebaseapp.com",
  projectId: "react-dragon-news-auth-3b8db",
  storageBucket: "react-dragon-news-auth-3b8db.appspot.com",
  messagingSenderId: "940220519285",
  appId: "1:940220519285:web:4ec406fad90a304626393c"
  // apiKey: import.meta.evn.VITE_APIKEY,
  // authDomain: import.meta.evn.VITE_AUTHDOMAIN,
  // projectId: import.meta.evn.VITE_PROJECTID,
  // storageBucket: import.meta.evn.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.evn.VITE_MESSAGINGSENDERID,
  // appId: import.meta.evn.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;