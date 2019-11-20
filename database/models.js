const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // id: Number,
    name: String
    //Todo?:other user profiles
  }, { collection: "User" }
);
const DrugSchema = new mongoose.Schema({
    // id: Number,
    name: { type: String, default: ()=>("") }, //name of the drug
    generic: { type: String, default: ()=>("") },
    imgUrl: { type: String, default: ()=>("") },
    strength: { type: String, default: ()=>("") },
    direction: { type: String, default: ()=>("") }, //how to use drug
    note: { type: String, default: ()=>("") },
    sideEffect: { type: String, default: ()=>("") },

    username: { type: String, default: ()=>("") }, //name of the user
    period: { type: String, default: ()=>("") }, //recording the period of user taking this drug
    dose: { type: String, default: ()=>("") }, //recording the dose of user taking this drug
  }, { collection: "Drug" }
);

const User = mongoose.model("User", UserSchema);
const Drug = mongoose.model("Drug", DrugSchema);

module.exports = { user: User, drug: Drug };
