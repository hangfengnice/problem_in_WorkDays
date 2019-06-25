const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const session = require("express-session");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  session({
    secret: "keyboard cat", // 原来基础上加上字符串加密 防止恶意修改
    resave: false,
    saveUninitialized: true // 无论是否使用 session 默认给一个 session
  })
);

app.use(router);

app.listen(3000, err => {
  console.log("run");
});
