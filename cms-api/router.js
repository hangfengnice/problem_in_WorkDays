const express = require("express");
const router = express.Router();
const userController = require("./controllers/user");
const topicController = require("./controllers/topic");
const commentController = require("./controllers/comment");
const sessionController = require("./controllers/session");
const mongoose = require("mongoose");
const Topic = require('./models/topic')

mongoose.connect("mongodb://localhost:27017/cms", { useNewUrlParser: true });

function checkLogin(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({
      error: "Unauthorized"
    });
  }
  next();
}

function checkTopic(req, res, next){
  const {user} = req.session
  Topic.findOne({
    _id: req.params.id
  }).then((data )=> {
    if(!data){
      return res.status(404).json({
        error: "Topic not found"
      })
    }
    if(data.user_id !== user._id){
      return res.status(400).json({
        error: "delete Invalid"
      })
    }
   next()
  })
}
// 用户资源
router
  .get("/users", userController.query)
  .post("/users", userController.new)
  .patch("/users/:id", userController.update)
  .delete("/users/:id", userController.delete);

// 话题资源
router
  .get("/topics", topicController.list)
  .post("/topics", checkLogin, topicController.create)
  .patch("/topics/:id", checkLogin, checkTopic, topicController.update)
  .delete("/topics/:id", checkLogin, checkTopic, topicController.delete);

// // 评论资源
router
  .get("/comment", commentController.query)
  .post("/comment", checkLogin, commentController.new)
  .patch("/comment/:id", checkLogin, commentController.update)
  .delete("/comment/:id", checkLogin, commentController.delete);

// // 会话资源

router
  .get("/session", sessionController.get)
  .post("/session", sessionController.create)
  .delete("/session", sessionController.delete);

module.exports = router;
