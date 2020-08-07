import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyB0yI-mUENycqbQ5yoowFO4eu7xTEIQUd0",
  authDomain: "firegram-159d5.firebaseapp.com",
  databaseURL: "https://firegram-159d5.firebaseio.com",
  projectId: "firegram-159d5",
  storageBucket: "firegram-159d5.appspot.com",
  messagingSenderId: "778810744111",
  appId: "1:778810744111:web:a5b41e51b1c0676e3c55da",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
