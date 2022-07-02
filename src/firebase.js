
//import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBx6y4YNTJituetsyU7o-FFf4p9vYVbuSA",
    authDomain: "waclone-cbf5b.firebaseapp.com",
    databaseURL: "https://waclone-cbf5b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "waclone-cbf5b",
    storageBucket: "waclone-cbf5b.appspot.com",
    messagingSenderId: "983921563486",
    appId: "1:983921563486:web:b55c3d02f84bca4022a1cf",
    measurementId: "G-41GKT3YJRP"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
