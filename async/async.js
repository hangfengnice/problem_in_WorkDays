const fs = require("fs")
var util = require('util')
var readFile = util.promisify(fs.readFile)
// 语法:

async function read(){
  // 在 async 函数内部可以使用 await 的方式来操作异步 API
   const dataA = await readFile('./data/hello.txt', 'utf8')
   const datab = await readFile('./data/hello1.txt', 'utf8')
   const datac = await readFile('./data/hello2.txt', 'utf8')
   console.log(dataA, datab, datac)
}


read()