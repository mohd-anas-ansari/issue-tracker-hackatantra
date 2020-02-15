// import { Schema, Mongoose } from "mongoose";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var adminSchema = new Schema({
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
    type: Number,
    required: true
  }
});

var Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;