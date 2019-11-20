var db = require('./fb-index.js');
const firebase = require('firebase');

var addUser = (userid, username, password, firstName, middleName, lastName) => {
  db.collection('users').doc(userid).set({
    userid,
    username,
    password,
    firstName,
    middleName,
    lastName
  })
}

var getUser = (userid) => {
  db.collection('users').doc(userid).get()
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