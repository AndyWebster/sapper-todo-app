import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1u9K2YSwRhTsWYbCB9AX7gWrlQjP3u3k",
    authDomain: "andy-svelte-demo.firebaseapp.com",
    databaseURL: "https://andy-svelte-demo.firebaseio.com",
    projectId: "andy-svelte-demo",
    storageBucket: "",
    messagingSenderId: "349269275382",
    appId: "1:349269275382:web:90fb1ed3c9a7586c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };

// Initialize db
export const db = firebase.firestore();

// Initialize
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
