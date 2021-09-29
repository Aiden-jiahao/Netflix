import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBFYPg7QUPD7w5ldmbvKDAUgjQoFE-FQcQ",
  authDomain: "netflix-3847d.firebaseapp.com",
  projectId: "netflix-3847d",
  storageBucket: "netflix-3847d.appspot.com",
  messagingSenderId: "113690536099",
  appId: "1:113690536099:web:fef3bb184d8170540b3716",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
