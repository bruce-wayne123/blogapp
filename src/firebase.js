// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiA4dIvrpuH1qP3A4CUV41AHRYz5DVNJ4",
    authDomain: "blogapp-89f18.firebaseapp.com",
    projectId: "blogapp-89f18",
    storageBucket: "blogapp-89f18.appspot.com",
    messagingSenderId: "238342146559",
    appId: "1:238342146559:web:80cdb6171fa28ae05f3fca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export default firestore;