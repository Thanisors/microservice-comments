//หน้าตั้งค่าเพื่อเชื่อมต่อกลุ่ม Firebase 

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHVxXfGaT732NGiAbznTzqdxVS_IMP1V4",
  authDomain: "microservice-firebase-comment.firebaseapp.com",
  projectId: "microservice-firebase-comment",
  storageBucket: "microservice-firebase-comment.appspot.com",
  messagingSenderId: "611192377085",
  appId: "1:611192377085:web:2d7d2af4c8785462c27894"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = { firebase}