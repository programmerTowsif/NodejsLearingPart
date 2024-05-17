// const fs = require('fs')

// //  const data2 = fs.readFile(`${__dirname}/index.text`,(err,data)=>{
// //     if(!err){
// //         console.log(data)
// //     }
// //     console.log(err)
// //  })
// const ourReadStream = fs.createReadStream(`${__dirname}/index.text`,'utf-8')

// ourReadStream.on('data',(data)=>{
//     console.log(data)
// })
const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("<html><head><titile>Form</titile></head></html>");
      res.write(
        '<body><form method="post" action="/process"><input name="message"/></form></body>'
      );
      break;
    case "/process":
      if (req.url === "/process" && req.method === "POST") var arr = [];
      req.on("data", (chunck) => {
        arr.push(chunck);
      });
      req.on("end", () => {
        console.log("string finished");
        const parrsBody = Buffer.concat(arr).toString();
        console.log(parrsBody);
      });

      res.write("mrood");
      break;
    default:
      res.write(" I am not router");
  }

  res.end();
});

server.listen(8000);
