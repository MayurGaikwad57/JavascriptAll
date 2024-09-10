
const mySym = Symbol("key1")
const obj1 ={
    name: "Mayur Gaikwad",
    "Name full" : "Legend of all time",
    age:18,
// This way is wrong is a standrad interview question
    [mySym] : "key1",
    location:"Jaipur",
    isLoggedIn : true,
    lastLogin : ['Monday','Tuesady']
}

// console.log(obj1.name)
// console.log(obj1["name"])
// console.log(obj1["Name full"]) //Type string cannot be accessed usin string operator
// // Accessing symbol and prinitng its type to symbol
// console.log(obj1[mySym]) // Method to access symbol inside a object


// Freezing a object in javascript 

obj1.location = " Solapur";
// Object.freeze(obj1);
obj1.location = "Delhi";
console.log(obj1);

// Creating function inside a object 
// In javascript functions are treated as variables

// obj1.greeting = function() {
//     console.log("Hello How ar you");
// }
// console.log(obj1.greeting); // Type of function is retrned and the function is not executed
// console.log(obj1.greeting());

obj1.greeting2 = function() {
    console.log(`The last login  is ${this.lastLogin}`)
}

console.log(obj1.greeting2());