import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyD4zd8ZWPmugMiSe-5OtBj81_eImLyPO3Y",
  authDomain: "newlib-98af0.firebaseapp.com",
  projectId: "newlib-98af0",
  storageBucket: "newlib-98af0.appspot.com",
  messagingSenderId: "629471355071",
  appId: "1:629471355071:web:018cd722e455646562e60a"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
