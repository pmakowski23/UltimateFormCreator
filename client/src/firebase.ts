import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDh-tn3qsk2wUkyOvaSRkydxgPhUfxo-Uk',
  authDomain: 'ufc-dev-8b532.firebaseapp.com',
  projectId: 'ufc-dev-8b532',
  storageBucket: 'ufc-dev-8b532.appspot.com',
  messagingSenderId: '415355310031',
  appId: '1:415355310031:web:fb1b9cd53060f5f0320cba',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, firebaseApp };
