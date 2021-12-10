import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBk4jHWqZuza97tipWXlp1IBviRWofE1L8",
  authDomain: "vide-server.firebaseapp.com",
  projectId: "vide-server",
  storageBucket: "vide-server.appspot.com",
  messagingSenderId: "56731503187",
  appId: "1:56731503187:web:c3b45d7f44ff06bba694a6",
  measurementId: "${config.measurementId}",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore();
