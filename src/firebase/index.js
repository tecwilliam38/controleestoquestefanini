import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCm4z7xM71-hvTwIAkzHhr3wL_wBfcMPdo",
  authDomain: "crudprojeto-5d618.firebaseapp.com",
  databaseURL: "https://crudprojeto-5d618-default-rtdb.firebaseio.com",
  projectId: "crudprojeto-5d618",
  storageBucket: "crudprojeto-5d618.appspot.com",
  messagingSenderId: "1018591454174",
  appId: "1:1018591454174:web:cb238e3081fb83a86cf34f",
  measurementId: "G-C215X6MJ59"
};

// Initialize Firebase
//export default firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db = getFirestore(app);
const db = getFirestore(app);
// export {db, storage};
export default db;
