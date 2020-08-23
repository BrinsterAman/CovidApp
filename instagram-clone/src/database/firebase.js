import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDmExKu5GQrQFc6s5XstGIsGL0Cfiui52s",
    authDomain: "instagram-clone-react-6da91.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-6da91.firebaseio.com",
    projectId: "instagram-clone-react-6da91",
    storageBucket: "instagram-clone-react-6da91.appspot.com",
    messagingSenderId: "948414646628",
    appId: "1:948414646628:web:43bb3403efa4b38ffd9271",
    measurementId: "G-7EXJPDYR5J"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }