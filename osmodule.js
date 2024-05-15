/// we work righ now os module , os means operating system
var os = require('os')
// which operating system are you used 
console.log(os.platform()) //linux , windows
// it's showing me how many bytes are you using on your system 
console.log(os.arch())
// is's showing me core,cpus intencity , or speed clock 
console.log(os.cpus())
// Returns the endianness of the CPU
console.log(os.endianness())
// Returns the number of free memory of the system

console.log(os.freemem())
// Returns the hostname of the operating system

console.log(os.hostname())
	// Returns the network interfaces that has a network address

console.log(os.networkInterfaces())
// Returns information about the operating system's release

 console.log(os.release())
//  Returns the number of total memory of the system

 console.log(os.totalmem())
//  Returns information about the current user

 console.log(os.userInfo())
