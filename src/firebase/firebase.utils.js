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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {  //check to make sure user doesn't already exist in database
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      
      try {  //attempts to create new document in database
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (err) {
        console.log(err)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ promt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;