// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkyPdS0zn9c-Lt5qNkF3IMMW2cay28QEw",
    authDomain: "genius-car-services-d5f6d.firebaseapp.com",
    projectId: "genius-car-services-d5f6d",
    storageBucket: "genius-car-services-d5f6d.appspot.com",
    messagingSenderId: "1096837338014",
    appId: "1:1096837338014:web:1f0e14e9fae3166e69fc8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;