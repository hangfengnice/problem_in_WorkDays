const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String
  },
  user_id: {
    type: String
  },
  article_id:{
    type: String
  },
  created_time: {
    type: Date,
    default: Date.now()
  },
  modified_time: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Comment", commentSchema);
