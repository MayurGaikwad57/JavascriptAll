const accountId = 25
let email = "gmayur96k@gmail.com"
var accPassword = 12345
// var should be avoided when reserving space for varaibles or storing data in object
// with var there is issue of block level and scope level
// let and const are mostly used    
// accountId = 96 // value written in const cannot be changed

accPassword = 98756
email= "jha@avaali.com" // email value updated
userState = "Maharashtra" // worst way of defining a varaible in javascript should be avoided
userPinCode =        // undefined will be output here we have reserved value without specifying what value that varaiable holds 
// worst way should be avoided
console.log(accountId)
console.log(email)
console.log(accPassword)
console.table([accountId,accPassword,email,userState,userPinCode])

// hoisting with respect to the varaibles var, let and const 

console.log(a)
var a = 20;
// the output here is undefined meaning we are trying to access the variable before it is 
// initialized 

console.log(b)
let b = 20;
// reference erpr as we cannot access b before initilaization
