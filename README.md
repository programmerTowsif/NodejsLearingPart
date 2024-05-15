 ### we all get document in window object , but does't work on nodejs code 
console.log(window)
when i am use
var a = 5
console.log(window.a) output 5 
## but golobal work 
console.log(global)
we doesn't atach a to global object
var a = 5
console.log(global.a) output undifiend

module Wrapper in nodemoule 

ep function . alwayse in node module

(function(exports,require,modle,__filename,__dirname){
    /// don't wrinte this function in module but when i am used js code always be create function other wise doesn't work
})