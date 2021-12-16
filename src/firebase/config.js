import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAwq89IFxW6j2L4cNcH8GVpNwWin5_ov0E",
    authDomain: "sample-7b24e.firebaseapp.com",
    projectId: "sample-7b24e",
    storageBucket: "sample-7b24e.appspot.com",
    messagingSenderId: "1081149375093",
    appId: "1:1081149375093:web:a3cd3452b7ce926ab2ae3c",
    measurementId: "G-FYL5XWBNMH"
  };
  export default firebase.initializeApp(firebaseConfig)