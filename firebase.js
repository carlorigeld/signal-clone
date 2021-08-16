import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDH3-rY_VMGE0bUV7T4h8lp51kwrnA0EKg",
  authDomain: "signal-clone-f96cc.firebaseapp.com",
  projectId: "signal-clone-f96cc",
  storageBucket: "signal-clone-f96cc.appspot.com",
  messagingSenderId: "750096023108",
  appId: "1:750096023108:web:cac819513b3746fc888611",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
