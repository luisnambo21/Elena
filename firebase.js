import firebase from "firebase";
import  "firebase/firestore";   

var firebaseConfig = {
  apiKey: "AIzaSyALIGYvgAb95ugBlwRn6WGFPwbdjhc-mqI",
  authDomain: "react-native-firebase-86b26.firebaseapp.com",
  projectId: "react-native-firebase-86b26",
  storageBucket: "react-native-firebase-86b26.appspot.com",
  messagingSenderId: "1096112996854",
  appId: "1:1096112996854:web:65635b0f85f03601d207d7",
  measurementId: "G-31VPJPVXB1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();

export default {
    firebase,
    db
};