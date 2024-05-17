const http = require('http')
const fs = require('fs')
http.createServer((req,res)=>{
  const myReadStream = fs.createReadStream(__dirname +'/index.text','utf-8')
   console.log(res)
  myReadStream.pipe(res)
}).listen(3000)
console.log('listening on port 3000')
