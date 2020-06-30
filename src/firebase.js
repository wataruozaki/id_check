import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBZKwxA66QZZJDoV6SSXJoNwvEUJqpZ2s",
  authDomain: "idcheck-4f9fb.firebaseapp.com",
  databaseURL: "https://idcheck-4f9fb.firebaseio.com",
  projectId: "idcheck-4f9fb",
  storageBucket: "idcheck-4f9fb.appspot.com",
  messagingSenderId: "669907371872",
  appId: "1:669907371872:web:7827234eb8e3d420278005",
  measurementId: "G-KCJ092CYTT",
};

firebase.initializeApp(firebaseConfig);
export default firebase;

export const db = firebase.firestore();
