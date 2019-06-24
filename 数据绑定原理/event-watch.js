// var callback = {};

function EventEmiter(){
  this.callback = {}
}

EventEmiter.prototype.on = function(eventName, eventHandler){
  if (!this.callback[eventName]) {
    this.callback[eventName] = [];
  }
  this.callback[eventName].push(eventHandler);
};

EventEmiter.prototype.emit = function(eventName){
  if (!this.callback[eventName]) {
    return;
  }
  var args = [].slice.call(arguments, 1);

  this.callback[eventName].forEach(handler => {
    handler.apply(null, args);
  });
};


// function Cat(){
//   EventEmiter.call(this)
// }

// Cat.prototype = new EventEmiter()

// var cat = new Cat()

// cat.on('meow',function(){
//   console.log('hello')
// })
// // on("meow", (a, b) => {
// //   console.log(a, b);
// // });

// cat.emit("meow", 1, 2);

