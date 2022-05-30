// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdvEPdYoC4kY0DaCs9k1V-llXxI7dZEbw",
    authDomain: "bike-frenzy-warehouse-practice.firebaseapp.com",
    projectId: "bike-frenzy-warehouse-practice",
    storageBucket: "bike-frenzy-warehouse-practice.appspot.com",
    messagingSenderId: "1086714311975",
    appId: "1:1086714311975:web:db4639e723dbd36a082502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;



/* apiKey:process.env.REACT_APP_apiKey,
authDomain:process.env.REACT_APP_authDomain,
projectId:process.env.REACT_APP_projectId,
storageBucket:process.env.REACT_APP_storageBucket,
messagingSenderId:process.env.REACT_APP_messagingSenderId,
appId:process.env.REACT_APP_appId, */



