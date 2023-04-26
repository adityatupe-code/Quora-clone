import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiGfPAwqF-ppZWdSLHUyMFXsck2sc4HnE",
  authDomain: "quora-d50d2.firebaseapp.com",
  projectId: "quora-d50d2",
  storageBucket: "quora-d50d2.appspot.com",
  messagingSenderId: "925670052840",
  appId: "1:925670052840:web:302770d2b268b76955ca5d",
  measurementId: "G-6ZN8R7V4N5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
