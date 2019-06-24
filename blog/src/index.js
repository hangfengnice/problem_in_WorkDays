
import './main.css'
import './main.less'

var fruits = ['hi']

fruits.forEach(item => {
  console.log(item)
})

var index = fruits.findIndex(function(item){
  return item === 'hi'
})



