// conversion in javascript

let num = "33abc"
// console.log(num);
// console.log(typeof(num))
let isNumber = Number(num)
console.log(typeof(isNumber))
console.log(isNumber)
// output is Nan which shows that the string is converted to number but output is still NaN

let val = null
console.log(typeof(val))  // type of null is object 
let isval = Number(null) // here type is converted to number 
console.log(typeof(isval)) // here it shows number
console.log(isval)
// Null when converted shows number but the output is zero 

console.log("Type conversion for Def")
let def = undefined
console.log(typeof(def))   // type is undefined here 
let isdef = Number(def) // typecasted into number
console.log(typeof(isdef)) // here after typecasting converted to number
console.log(isdef)  // but output here is NaN


console.log("conversion value BOOLEAN");

let boolValue = ""    // Empty String value 
let isboolean = Boolean(boolValue) // Boolean conversion is based on the truthiness and falsyness of the value empty string is a falsy value 
console.log(typeof(isboolean)) //typecasted to boolean
console.log(isboolean);  // output here is falsy 



console.log("number to string conversion");
let getVal = 33
let getValString = String(getVal)
console.log(typeof(getValString));
console.log(getValString);


