// // it's class object 
const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')
// // we buy a class from EventEmitter
const emitter = new EventEmitter()
// after envent 
emitter.on('On',(a,b)=>{
    let time = 0;
      setTimeout(()=>{
         if(a.length >b.length){
            time =5000
            console.log(a.length)
         }
         time = 3000
      },5000)
    fs.readFile('./file.js',(err,data)=>{
        if(!err){
            
            // console.log(data.toString())
        }
    })
})
//  it's event 
emitter.emit('On','saa','bs')
emitter.on('clint',()=>{
const pathbase =  path.basename("/home/towsif/Desktop/nodejsLearing/index.js");
console.log(pathbase)
})


emitter.emit('clint')

emitter.on('clock',(i)=>{
    console.log('clock2',i)
    setTimeout(()=>{
        console.log(i)
    },4000)
})

for(let i =0;i<=100;i++){
    console.log("i",i)
    
    emitter.emit('clock',i)
    console.log('clock',i)
}
emitter.on('Call',({perioud,text})=>{
    console.log('hello',perioud,text)
})

setTimeout(()=>{
      
        emitter.emit("Call",{
            perioud :1,
            text:'college choti'
        });
  
   
},2000)
