const mongoose = require('mongoose');
// mongoose.connect('mongodb://forest:password@52.53.169.209/SDChub', {useNewUrlParser: true});
//
mongoose.connect('mongodb://ec2-52-53-163-210.us-west-1.compute.amazonaws.com/MVP', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("Mongo running"));

module.exports = db;
