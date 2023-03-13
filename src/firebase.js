import firebase from "firebase";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj02qb1eueG8HhhoBFribGs5TAYyUFBh8",
  authDomain: "react-test-d4fe8.firebaseapp.com",
  databaseURL: "https://react-test-d4fe8-default-rtdb.firebaseio.com",
  projectId: "react-test-d4fe8",
  storageBucket: "react-test-d4fe8.appspot.com",
  messagingSenderId: "313048457695",
  appId: "1:313048457695:web:112b7bd6e8bc4f0376246a",
};

provider.setCustomParameters({
  'login_hint': 'negarrz1378@gmail.com'
});

const provider = new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(firebaseConfig);
firebase.auth().signInWithPopup(provider)

export { auth, provider };
