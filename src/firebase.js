// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxMjaHgZkuJ0k1e1sMBWfnxYWAvMn3MrQ",
  authDomain: "track-myjob.firebaseapp.com",
  projectId: "track-myjob",
  storageBucket: "track-myjob.appspot.com",
  messagingSenderId: "980770280674",
  appId: "1:980770280674:web:1e3bddc7aa04b91c433abb",
  measurementId: "G-YV062JFBRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);