
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDmF8k3PWmv6g1vcse3DTr9Ocd7I4jpyqs",
  authDomain: "vegetable-project-1e4f3.firebaseapp.com",
  projectId: "vegetable-project-1e4f3",
  storageBucket: "vegetable-project-1e4f3.appspot.com",
  messagingSenderId: "716772605336",
  appId: "1:716772605336:web:e8fbd12a166657058f3fed"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth
