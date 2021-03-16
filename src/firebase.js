import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoJgtM8UimLpI1SWZkxD1S9qAk1QBaIEA",
  authDomain: "facebook-clone-asad-3d674.firebaseapp.com",
  projectId: "facebook-clone-asad-3d674",
  storageBucket: "facebook-clone-asad-3d674.appspot.com",
  messagingSenderId: "585798658060",
  appId: "1:585798658060:web:37073a03a0b664cdbd6629"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;