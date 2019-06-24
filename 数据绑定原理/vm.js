var vueEvent = new EventEmiter()

function Vue(options){
const {el, data} = options
var rootEl = document.querySelector(el)

// 手动遍历 DOM 树
var childNodes = rootEl.childNodes

subscribeEvents(childNodes)
// 遍历 DOM 树, 订阅事件

function subscribeEvents(childNodes){
  childNodes.forEach(function(node){
    var nodeType = node.nodeType
    if(nodeType === 1){
      // 标签节点
      if(node.nodeName === 'INPUT'){
        if(node.type === 'text'){
          var dataKey = node.attributes['v-model'].value
          // console.log(node.attributes['v-model'].value)
          node.oninput = function (){
            data[dataKey] = node.value
            vueEvent.emit(dataKey)
          }
          vueEvent.on(dataKey, function (){
            node.value = data[dataKey]
          })
        }else if(node.type === 'checkbox'){
          var dataKey = node.attributes['v-model'].value
        // console.log(node.attributes['v-model'].value)
        // onchange
        node.onchange = function (){
          data[dataKey] = node.checked ? true : false
          vueEvent.emit(dataKey)
        }
        vueEvent.on(dataKey, function (){
          node.checked = data[dataKey]
        })
        }      
      }
  subscribeEvents(node.childNodes)
    }else if(nodeType === 3){
      // 文本节点
      var matches = /{{(.+)}}/.exec(node.textContent)
      if(matches){
        // datakey 是 data 中的具体成员名称
      // 同时也是自定义事件名称
      var dataKey = matches[1].trim()
      vueEvent.on(dataKey, function( ){
        node.textContent = data[dataKey]
      })
      }
      
  
    }
  

  })
 
}

  // vueEvent.on('message', function(){
  //   document.querySelector('h1').innerHTML = data['message']
  // })

  // vueEvent.on('message', function(){
  //   document.querySelector('h2').innerHTML = data['message']
  // })

  // vueEvent.on('message', function(){
  //   document.querySelector('p').innerHTML = data['message']
  // })

// 请使用 let 作用域问题

for(let key in data){
  Object.defineProperty(this, key, {
    get(){
      return data[key]
    },
    set(value){
      data[key] = value
      vueEvent.emit(key)
    }
  })
}
}

