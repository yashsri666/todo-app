import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAVehxsJCb4CK-EAxj4aBrZX3d2FlrgWoI",
    authDomain: "todo-app-ca612.firebaseapp.com",
    projectId: "todo-app-ca612",
    storageBucket: "todo-app-ca612.appspot.com",
    messagingSenderId: "931435028453",
    appId: "1:931435028453:web:06613297c22c535fcc990c",
    measurementId: "G-5FKSST1RXH"
});

const db = firebaseApp.firestore();

export default db;