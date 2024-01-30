import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZy1SbTwJ5NxGI6ci6qG_47BkOWPGoSCI",
  authDomain: "netflic-gpt.firebaseapp.com",
  projectId: "netflic-gpt",
  storageBucket: "netflic-gpt.appspot.com",
  messagingSenderId: "139384050112",
  appId: "1:139384050112:web:dc953646e5e2199442b825"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
