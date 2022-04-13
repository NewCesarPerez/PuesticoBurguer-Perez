// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjFhjS7uEkTpdZXD6Au1vR50mX9L3LNgw",
    authDomain: "rj-puesticoburgerperez.firebaseapp.com",
    projectId: "rj-puesticoburgerperez",
    storageBucket: "rj-puesticoburgerperez.appspot.com",
    messagingSenderId: "1050542535426",
    appId: "1:1050542535426:web:e46c928451425c45ad481b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)