const fs = require('fs')
const outReadString = fs.createReadStream(`${__dirname}/index.text`)
const ourWriteStream = fs.createWriteStream(`${__dirname}/area.text`)
outReadString.on('data',(chunck)=>{
    console.log(chunck)
     ourWriteStream.write(chunck)
})
outReadString.pipe(ourWriteStream)
console.log('dd')