// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth,signInWithEmailAndPassword ,createUserWithEmailAndPassword } from 'firebase/auth';

//import AsyncStorage from '@react-native-async-storage/async-storage';
//import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYOyYCuvgTHtsmeoGEYBWwYDgtMcav9AM",
  authDomain: "cv-authentication.firebaseapp.com",
  projectId: "cv-authentication",
  storageBucket: "cv-authentication.appspot.com",
  messagingSenderId: "605809593426",
  appId: "1:605809593426:web:a8a642c963d397bb2a638b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword ,createUserWithEmailAndPassword };
