// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcPynnwkijIooet91tt9bRYaUHGuvIG0U",
  authDomain: "ecommerce-project-848e8.firebaseapp.com",
  projectId: "ecommerce-project-848e8",
  storageBucket: "ecommerce-project-848e8.appspot.com",
  messagingSenderId: "894443995368",
  appId: "1:894443995368:web:6ea51871d5d1d7c8cd895d",
};

//Setting up our firestore app
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
