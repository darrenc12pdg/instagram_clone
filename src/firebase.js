// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase" ;

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBA2N7Lws_9GuX7hdSP5WTW3ArkkRR1kuY",
    authDomain: "instagram-clone-e2dd3.firebaseapp.com",
    databaseURL: "https://instagram-clone-e2dd3.firebaseio.com",
    projectId: "instagram-clone-e2dd3",
    storageBucket: "instagram-clone-e2dd3.appspot.com",
    messagingSenderId: "688816633846",
    appId: "1:688816633846:web:a0c452d40d715f7da939d7",
    measurementId: "G-Q5YVKWSY9W"
  });



  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };

  // export default db;





