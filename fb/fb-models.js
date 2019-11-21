var db = require('./fb-index.js');
const firebase = require('firebase');

var addUser = (username, password, firstName, lastName, email) => {
  db.collection('users').doc(username).set({
    username,
    password,
    firstName,
    lastName,
    email
  })
}

var getUser = (username) => {
  db.collection('users').doc(username).get()
    .then((doc) => {
      if (!doc.exists) {
        console.error('Could not find info for that user.');
      } else {
        return doc.data();
      }
    })
    .catch((err) => {
      console.error(err);
    })
}

module.exports = addUser, getUser;