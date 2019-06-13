

function EventEmiter(){
  this.callback=[]
}
// var callback = {

// }
EventEmiter.prototype.on = function(eventName, eventHandle) {
  if(!this.callback[eventName]){
    this.callback[eventName] = []
  }
  this.callback[eventName].push(eventHandle)
}

EventEmiter.prototype.emit = function (eventName){
  if(!this.callback[eventName]){
    return
  }
  var args = [].slice.call(arguments,1)
  this.callback[eventName].forEach(function(handle){
        handle.apply(null,args)
  })
}

// function Cat(){
//   EventEmiter.call(this)
// }
// Cat.prototype = new EventEmiter()
// var c1 = new Cat()
// c1.on('meow',function(){

// })
// function Dog(){

// }

// on('meow',function (a,b) {
//   console.log(1)
// })
// on('meow',function(a,b){
//   console.log(2)
// })
// on('meow',function (a,b) {

//   console.log(a,b)
// })
// console.log(callback)
// emit("meow",1,2)