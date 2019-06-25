const Topic = require("../models/topic");
const moment = require("moment");



exports.list = (req, res, next) => {
  let _page = parseInt(req.query._page);
  let _limit = parseInt(req.query._limit);
  if (_page < 1) {
    _page = 1;
  }
  if (_limit < 1) {
    _limit = 1;
  }
  if (_limit > 20) {
    _limit = 20;
  }
  const start = (_page - 1) * _limit;
  Topic.find()
    .skip(start)
    .limit(_limit)
    .then(data => {
      // console.log(data)
      res.status(200).json(data);
    });
};

exports.create = (req, res, next) => {
  const { user } = req.session;
  const body = req.body;

  Topic.findOne({
    title: body.content
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
    body.modified_time = moment().format("YYYY-MM-DD hh:mm:ss");
    body.user_id = user._id;

    new Topic(body).save((err, topic) => {
      if (err) {
        return next(err);
      }
      body.id = topic.id;
      res.status(200).json(body);
    });
  });
};

exports.update = (req, res, next) => {

  const body = req.body
  Topic.findByIdAndUpdate(req.params.id, body).then((data) => {
    // 返回原来的值
    res.status(200).json(data)
  })
};

exports.delete = (req, res, next) => {
  const {id} = req.params
    Topic.deleteOne({
      _id: id
    }).then((err) => {
      // if(err){
      //   return next(err)
      // }
      res.status(200).json({})
    })
  
 
};
