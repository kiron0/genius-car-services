// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUiRhXJ1HYLCFD13KATdDjhdEcsbddmoQ",
  authDomain: "genius-car-services-556d8.firebaseapp.com",
  projectId: "genius-car-services-556d8",
  storageBucket: "genius-car-services-556d8.appspot.com",
  messagingSenderId: "296500859464",
  appId: "1:296500859464:web:02bb485ef69e37764e3e7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
