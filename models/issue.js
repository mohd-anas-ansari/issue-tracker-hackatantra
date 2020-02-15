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

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  status: {
      type: String,
      enum: ["red", "amber", "green"]
  }
});

var Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;