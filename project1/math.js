/*
*Title: Math Library
*Description: utility library for math-related functions
*Author: Towsif
*Date: 17/may/2024
*/
//math object - module scaffolding

const math = {}
 
math.getandomNumber = function getandomNumber(min,max){
    let minimum = min;
    let maximum = max;
    minimum = typeof minimum ==='number' ?minimum :0;
    maximum = typeof maximum ==='number'?maximum:0;
    return Math.floor(Math.random()*(maximum - minimum +1) )
}
// export the library

module.exports = math