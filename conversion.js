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

// new space added 
let a = 3
const y = a++
// postfix returns original value of a beafore incrementing 
// hence y = 3 and a = 4 
//Postfix increment is often used in loops or cases where you need to keep the original value for some operation but still want to increment the variable for subsequent operations.
console.log(`a is ${a} and b is ${y}`);

let b = 3
const x = ++b;
console.log(`b is ${b} and x is ${x}`);
// execution flow 
// b = 3 
// for x b is incrementing so x = 4
// b = 4 as its incremeting 

//The prefix increment is used when you need the incremented value immediately in the expression or operation you are performing.Understanding the prefix increment helps in scenarios where you want to ensure that the variable's value is updated before it is used in subsequent operations.
// let age = 35
// // console.log(typeof(age));

// let ImprovedAge = String(age)
// console.log(typeof(ImprovedAge));
// console.log(ImprovedAge);


let score = "Mayur"
console.log(score)
console.log(typeof(score))

let NewScore = Number(score)
console.log(typeof(NewScore));
console.log(NewScore);

