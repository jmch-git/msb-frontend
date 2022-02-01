import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAfUsW_mRMt1WaJGzl_1EE25OvWaZwVu-c",
    authDomain: "learning-firebase-462e7.firebaseapp.com",
    projectId: "learning-firebase-462e7",
    storageBucket: "learning-firebase-462e7.appspot.com",
    messagingSenderId: "1096531017416",
    appId: "1:1096531017416:web:5f30780fe2fd5f22722ffd"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}


export { login, logout, auth };