 const http = require('http')
const url = require('url')
const {StringDecoder} = require('string_decoder')
 const app = {

 }
 app.config = {
    port:5000
 }
 
 app.createServer = ()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port,()=>{
        console.log('Server is running')
    })
 }
 app.handleReqRes =(req,res)=>{
     const parsedUrl = url.parse(req.url,true)
    const path = parsedUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase()
    const queryStringObject = parsedUrl.query;
    const headers = req.headers;
    const decoder = new StringDecoder('utf-8')
    let realData = ''
    req.on('data',(buffer)=>{
        realData +=decoder.write(buffer)
    }) 
    req.on('end',()=>{
        realData +=decoder.end()
        console.log(realData)
     
           res.end("Hellow");
    })
 
 }
 app.createServer()