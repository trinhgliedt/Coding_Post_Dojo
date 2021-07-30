import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/analytics";
import "firebase/auth";
import "firebase/functions";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCV1OpgNRt9GyyguPL_6t0jF2cM4XwS4u4",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://ubercard-13dec-default-rtdb.firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSASING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

// Initialize Firebase
// firebase.analytics();

const firestore = app.firestore();
const realtimeDb = app.database();
const auth = app.auth();
const FBFunction = app.functions();
const FBStorage = app.storage();

// const timestamp = app.firestore.FieldValue.serverTimestamp;

export { firestore, realtimeDb, auth, FBFunction, FBStorage };
