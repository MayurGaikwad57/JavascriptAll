// Interview Question from objects
// 1) Include symbol in your object and print it as symbol

let mySymbol = Symbol("Key1")

let myObj1 = {
    name : "Mayur Gaiwad",
    // name key is basically a string 
    email : "Mayur@cgoogle.com",
    [mySymbol] : "key1",  // if not included in [] it will simply be printed as values of object type
    age : 18,
    isLoggedIn : true,
    lastLoggedIn : ["Monday","Wednesday"],
    location:"Jaipur"
}

// console.log(myObj1) // Accesibility of Object
// console.log(myObj1.age)  //most used method to access values of objects
// console.log(myObj1["lastLoggedIn"]) // more better method than using .(dot operator)
// console.log(myObj1)

// making changes to objects value
myObj1.name = "Legend Gaikwad"
// console.log(myObj1)

// Freezing values so that no one can change them 

console.log(myObj1["age"])
// Object.freeze(myObj1) // property to be applied on objects and not objects elements

myObj1.age = 22 

console.log(myObj1["age"]) // age will not change to 22 as object is freezed


myObj1.greeting = function(){
    console.log("Hello User");
}
console.log(myObj1.greeting());
//  If it shows that greeting is not a function then first check wheather you have freezed the object 
// If freezed then unfreeze that object

myObj1.greeting2 = function() {
    console.log(`Hello, ${this.name}`)  // used string interpolation here, dont use " " inside curly braces{}
}
console.log(myObj1.greeting2());
// Investigative study about objects 
// Method of using Symbols and Printing it 

let mySym = Symbol("Key1")
const myobj1 = {
    name: "Mayur",
    // Name is treated as string 
    // so its actually "name"
    email: "mayur@google.com",
    location: "Solapur",
    age: 18,
    [mySym]:"key1",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Thursday"],
}
// Accesing Objects
console.log(myobj1.name)
console.log(myobj1["name"]) // 2nd method of accessing object 

console.log(myobj1[mySym])
