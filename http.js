const http = require('http')

const server = http.createServer((req,res)=>{
     switch(req.url){
        case '/':
            res.write('I am home router')
            break;
            case '/aboute':
                res.write('I am about router')
                break;
                default:
                    res.write(' I am not router')
     }
    
    res.end()
})

 

server.listen(8000)
