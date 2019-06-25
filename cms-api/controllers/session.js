const User = require("../models/user");

exports.get = (req, res, next) => {
  const { user } = req.session;
  if (!req.session.user) {
    res.status(401).json({
      error: "Unauthorized"
    });
  }
  res.status(200).json(user);
};

exports.create = (req, res, next) => {
  const body = req.body;
  User.findOne(
    {
      email: body.email,
      password: body.password
    },
    (err, user) => {
      if (err) {
        // return res.status(500).json({
        //   err_code: 500,
        //   message: err.message
        // })
        return next(err);
      }

      if (!user) {
        return res.status(200).json({
          err_code: 1,
          message: "Email or password is invalid",
          user
        });
      }
      req.session.user = user;

      res.status(200).json(user);
    }
  );
};

exports.delete = (req, res, next) => {
  delete req.session.user;
  res.status(201).json({});
};
