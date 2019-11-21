const admin = require('firebase-admin');
var serviceAccount = require("./mvprescription-firebase-adminsdk-i7z95-28b4a0396e");
// const firebase = require('firebase');

// var firebaseConfig = {
//   apiKey: 'AIzaSyDoCB0cuMJ0OfyB_Ad9o4qqM_CpAUxwzK8',
//   authDomain: 'mvprescription.firebaseapp.com',
//   databaseURL: 'https://mvprescription.firebaseio.com',
//   projectId: 'mvprescription'
// }

// var app = firebase.initializeApp(firebaseConfig);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mvprescription.firebaseio.com"
});

module.exports = admin.firestore();