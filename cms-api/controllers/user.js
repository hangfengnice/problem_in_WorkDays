const User = require("../models/user");
const moment = require("moment");

exports.query = (req, res, next) => {};

exports.new = (req, res, next) => {
  // console.log(req.body)
  const body = req.body;
  User.findOne({
    $or: [
      {
        email: body.email
      },
      {
        name: body.name
      }
    ]
  }).then((err, data) => {
    if (err) {
      return next(err);
    }
    if (data) {
      return res.status(200).json({
        error_code: 1,
        message: "email or nickname already exist"
      });
    }
    body.created_time = moment().format("YYYY-MM-DD hh:mm:ss");
    body.last_modified_time = moment().format("YYYY-MM-DD hh:mm:ss");

    new User(body).save((err, user) => {
      if (err) {
        return next(err);
      }
      // req.session.user = user;
      res.status(200).json(body);
    });
  });
};

exports.update = (req, res, next) => {};

exports.delete = (req, res, next) => {};
