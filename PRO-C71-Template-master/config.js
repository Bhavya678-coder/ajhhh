import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCupueCdfhcQIY4dk7raforaMfgeLneCPg",
    authDomain: "eride-8b4d5.firebaseapp.com",
    projectId: "eride-8b4d5",
    storageBucket: "eride-8b4d5.appspot.com",
    messagingSenderId: "372799400636",
    appId: "1:372799400636:web:c28f5199d750c727e03eb9"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
