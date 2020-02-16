// import { Schema, Mongoose } from "mongoose";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var issueSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: [String],

    userId: {
      type: mongoose.Schema.Types.username,
      ref: 'User',
    },

    status: {
      raised: { type: Boolean, default: true },
      inProgress: { type: Boolean, default: false },
      done: { type: Boolean, default: false },
    },
    plusOnes: [{
      username: {
        type: String,
        required: true
      }
    }],
    dueBy: Date,
  },
  { timestamps: true },
);

var Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
