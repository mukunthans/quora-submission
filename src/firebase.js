import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCfWPv4yZraWWPTF0HyRvLAiQYoRMP_H5c",
  authDomain: "quora-clone-6671c.firebaseapp.com",
  projectId: "quora-clone-6671c",
  storageBucket: "quora-clone-6671c.appspot.com",
  messagingSenderId: "843756550138",
  appId: "1:843756550138:web:48ebd960250d8b1f5a5643",
  measurementId: "G-66NW7TQHPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();