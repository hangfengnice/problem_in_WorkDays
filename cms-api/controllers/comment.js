const Comment = require("../models/comment");

exports.query = (req, res, next) => {};

exports.new = (req, res, next) => {

  const body = req.body;
  console.log(body)
  Comment.findOne({
    content: body.content
  }).then((err, data) => {
    if (err) {
      return next(err);
    }
    if (data) {
      return res.status(200).json({
        error_code: 1,
        message: " content already exist"
      });
    }
    body.user_id = req.session.user._id;
    body.created_time = Date.now();
    body.modified_time = Date.now();
    new Comment(body).save((err, comment) => {
      if (err) {
        return next(err);
      }
      body.id = comment._id;
      res.status(200).json(body);
    });
  });
};

exports.update = (req, res, next) => {};

exports.delete = (req, res, next) => {};
