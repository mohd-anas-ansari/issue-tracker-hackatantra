// import { Schema, Mongoose } from "mongoose";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  issuesCreated: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue"
  }]
});

var User = mongoose.model("User", userSchema);
module.exports = User;