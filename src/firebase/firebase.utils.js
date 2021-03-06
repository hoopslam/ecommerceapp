import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlITXHc57sqVBuJCkQrQgoU7_cwOJh0_k",
    authDomain: "e-commerce-app-b6ffa.firebaseapp.com",
    projectId: "e-commerce-app-b6ffa",
    storageBucket: "e-commerce-app-b6ffa.appspot.com",
    messagingSenderId: "906776364996",
    appId: "1:906776364996:web:bc76ec40273af84722c691",
    measurementId: "G-PXC2E4VZGP"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;