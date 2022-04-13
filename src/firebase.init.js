// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyC2FWajF43Lb6FSxgnkrMDX4u9Z1S8mu6k",
    authDomain: "genius-car-services-858cb.firebaseapp.com",
    projectId: "genius-car-services-858cb",
    storageBucket: "genius-car-services-858cb.appspot.com",
    messagingSenderId: "436832647311",
    appId: "1:436832647311:web:63c42c677ce7257dcd98fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;