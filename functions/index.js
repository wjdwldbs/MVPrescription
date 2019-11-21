const functions = require('firebase-functions');
const express = require('express');

// const admin = require('firebase-admin');
const db = require('./fb-index');
// var serviceAccount = require('../mvprescription-firebase-adminsdk-i7z95-28b4a0396e.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://mvprescription.firebaseio.com"
// });


const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.post('/users', (req, res) => {
  const { username, password, firstName, lastName, email } = req.body
  db.collection('users').doc(username).set({
    username,
    password,
    firstName,
    lastName,
    email
  })
    .then((response) => {
      console.log(response)
      res.status(201).send('Successfully created user.')
    })
    .catch((err) => {
      console.error(err)
    })
})

exports.api = functions.https.onRequest(app)