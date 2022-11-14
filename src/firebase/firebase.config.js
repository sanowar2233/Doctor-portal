// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey ,
//   authDomain:process.env.REACT_APP_authDomain ,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucke ,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId ,
//   appId:process.env.REACT_APP_appId 
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBihM6xfgLgQqf5XlOdoFQgyignu4MuA0U",
  authDomain: "doctor-portal-f6dad.firebaseapp.com",
  projectId: "doctor-portal-f6dad",
  storageBucket: "doctor-portal-f6dad.appspot.com",
  messagingSenderId: "223611684298",
  appId: "1:223611684298:web:cb99264f6b5cbc4d793b33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;