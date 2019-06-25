const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  user_id: {
    type: String
  },
  created_time: {
    type: Date
  },
  modified_time: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss")
  }
});

module.exports = mongoose.model("Topic", topicSchema);
