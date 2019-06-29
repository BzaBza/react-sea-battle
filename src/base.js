import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD0CpvFEzFjOiM8-u2I7omvD6DdgkEgE6Y",
  authDomain: "sea-battle-2dee7.firebaseapp.com",
  databaseURL: "https://sea-battle-2dee7.firebaseio.com",
  projectId: "sea-battle-2dee7",
  storageBucket: "sea-battle-2dee7.appspot.com",
  messagingSenderId: "864375609790",
  appId: "1:864375609790:web:f2a5d468b0154828"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db }