// how to create file and writing text in here


const fs = require('fs')
var http = require('http')
//  write file  
fs.writeFileSync('myfile.js',"//hellow progreammer")
// write file with new or old text 
fs.appendFileSync("myfile.js", "console.log(3333333)");
// how to read file 
const data = fs.readFile('myfile.js',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log("hell",data.toString())
})
// data is buffer data 
console.log("data",data)

http.createServer(function(req,res){
    fs.readFile('./clinent/index.html',function(err,data){
        fs.appendFileSync("./cli./clinent/index.html",'<div>amar sunanar bangalad</div>');
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
    })
}).listen(8080)
const fs = require('fs')
fs.unlink('./myfile.js',function(err){
    if(err) throw err;
    console.log('fille dlelete')
})
// file rename
const fs = require('fs')
fs.rename("./clinent/index.html", "./clinent/towsif.html",function(err){
    if(err) {
        console.log(err)
    }
    console.log('file rename')
});