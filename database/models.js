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
    strength: { type: String, default: ()=>("") },
    direction: { type: String, default: ()=>("") },
    note: { type: String, default: ()=>("") },
    sideEffect: { type: String, default: ()=>("") },

    username: { type: String, default: ()=>("") }, //name of the user
  }, { collection: "Drug" }
);

const User = mongoose.model("User", UserSchema);
const Drug = mongoose.model("Drug", DrugSchema);

module.exports = { user: User, drug: Drug };
