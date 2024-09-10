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
