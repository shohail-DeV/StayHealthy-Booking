import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTLhFFWLLkU9ZnAwLUCIE2IFskiYtH8Gs",
  authDomain: "stayhealthy-40910.firebaseapp.com",
  projectId: "stayhealthy-40910",
  storageBucket: "stayhealthy-40910.appspot.com",
  messagingSenderId: "1033622713432",
  appId: "1:1033622713432:web:3ef7c4ba51b67a5074862d",
  measurementId: "G-3M1T1D5ES4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDatabase = getFirestore(app);


export default firestoreDatabase;

