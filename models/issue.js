// import { Schema, Mongoose } from "mongoose";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true,
  },

  tags: [String],

  username: {
    // type: mongoose.Schema.Types.username,
    // ref: "User",
    type: String
  },

  status: {
      type: String,
      enum: ["red", "amber", "green"]
  },
  cratedOn: Date,
  dueBy: Date
});

var Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;