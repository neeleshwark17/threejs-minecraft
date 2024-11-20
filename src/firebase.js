import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDpYwsDq6bNn2QrpEYHeSAjJOWA8SpnXi4",
  authDomain: "minecraft-js.firebaseapp.com",
  projectId: "minecraft-js",
  storageBucket: "minecraft-js.appspot.com",
  messagingSenderId: "502456370559",
  appId: "1:502456370559:web:28069a3d769e22d36b064a",
});

export const firestore = app.firestore();

export const auth = app.auth();
