var vueEvent = new EventEmiter()
function Vue(options){
var {el,data} = options
var  rootE1 = document.querySelector(el)
var childNodes = rootE1.childNodes
subscribeEvents(childNodes)
function subscribeEvents(childNodes){
  for(let i=0; i< childNodes.length; i++){
    // console.dir(rootE1.childNodes[i])
    const node = childNodes[i]

    var nodeType = node.nodeType
    // console.log(1)

    if(nodeType === 1){
      if(node.nodeName ==='INPUT'){
        var dataKey = node.attributes['v-model'].value
        node.oninput = function(){
          data[dataKey] = node.value
          vueEvent.emit(dataKey)
        }
        vueEvent.on(dataKey,function(){
          node.value = data[dataKey]
        })
      }
      subscribeEvents(node.childNodes)
    }else if(nodeType === 3){
      // console.log()
      var matches = /{{(.+)}}/.exec(node.textContent)
      if(matches){
        var eventName = matches[1].trim()
        vueEvent.on(eventName,function(){
          node.textContent = data[eventName]
        })
      }
    }
  
  }
}
// vueEvent.on('message',function(){
//   document.querySelector('h1').innerHTML = data['message']
// })
// vueEvent.on('message',function(){
//   document.querySelector('h2').innerHTML = data['message']
// })
// vueEvent.on('message',function(){
//   document.querySelector('p').innerHTML = data['message']
// })

for(let key in data){
  Object.defineProperty(this, key ,{
    get(){
      return data[key]
    },
    set(value){
      data[key]= value
      vueEvent.emit(key)
    }
  })
}
}

// var app = new Vue({
//   el: "#app",
//   data: {
//     message: 'hello vue'
//   }
// })