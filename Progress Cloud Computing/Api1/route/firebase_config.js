const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyBD4T5eshH6UN77JBJ-fVV2xfOwA84l9bo",
    authDomain: "capstone-f101b.firebaseapp.com",
    projectId: "capstone-f101b",
    storageBucket: "capstone-f101b.appspot.com",
    messagingSenderId: "883384866835",
    appId: "1:883384866835:web:d0e47441cd5f62f42207e6"
};
// Initialize Firebase
let firebase_config = firebase.initializeApp(firebaseConfig);


module.exports = firebase_config