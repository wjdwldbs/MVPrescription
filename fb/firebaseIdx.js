// const admin = require('firebase-admin');
const firebase = require('firebase');

var firebaseConfig = {
  apiKey: 'AIzaSyDoCB0cuMJ0OfyB_Ad9o4qqM_CpAUxwzK8',
  authDomain: 'mvprescription.firebaseapp.com',
  databaseURL: 'https://mvprescription.firebaseio.com',
  projectId: 'mvprescription'
}

var app = firebase.initializeApp(firebaseConfig);

module.exports = firebase.database();