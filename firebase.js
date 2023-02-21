import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJJWVuJjFsJFOqSukRknvISKx4vW_Le_w",
    authDomain: "cypress-88.firebaseapp.com",
    projectId: "cypress-88",
    storageBucket: "cypress-88.appspot.com",
    messagingSenderId: "558894438561",
    appId: "1:558894438561:web:55abcc33b7c80387d5b8e0",
    measurementId: "G-37JNP4NRJ2",
    emulator: {
      host: 'localhost',
      port: 3000
    }
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();

  export default db