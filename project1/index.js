const mathLibrary = require('./math')
const quotesLibrary = require('./quotes/index')
const app = {}
app.config = {
    timeBetweenQuotes :1000
}
 
app.pritAQuote = function pritAQuote(){
    const allQuotes = quotesLibrary.allQuotes()
    const numberofQuetes = allQuotes.length;
    const randomNumber = mathLibrary.getandomNumber(1,numberofQuetes)
    const selectedQuote = allQuotes[randomNumber]
     
    console.log("Amir ---- ",selectedQuote)
}
app.infinityLoop = function infinityLoop(){
    setInterval(app.pritAQuote,app.config.timeBetweenQuotes)
}
 
app.infinityLoop()