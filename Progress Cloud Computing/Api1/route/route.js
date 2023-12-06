var router = require('express').Router()
var fire = require('./firebase_config')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.json())

app.post('/register', async(req, res) => {
    try {
    const {email, username, password} = req.body;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error);
    });
    res.redirect('/');
    } catch(e) {
    res.redirect('register');
    }
    })