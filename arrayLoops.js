// Array Loops in javascript specalised loops for javascript
// forof loop -> there is no need of initialization , , giving terminating condition or incrementing this all are automatically done inside forof loop

// for (const element of object) {
// element here is an iterator like index or i 
//     // object this object actually refers to on what do you want to run forof loop like object or array etc
// }

// ["","",""]  [{},{},{}] we may have string inside array or objects inside array we can access this using forof loop
// let numbers = [1,2,3,4,5]
// for (const num of numbers) {
//     console.log(`numbers are ${num}`)
// }

// maps in js 
// 1)Maps hold key value pair
// 2)they remeber the order of insertion of key, value pair
// 3)They have unique key,value pairs (i.e) duplicate entries are not allowed 
// 4) Maps in itself are not iterable ie you cannot iterate them in loops there are methods with which you can do iteration but not through loops 

// const map = new Map();
// map.set("Fr","France")
// map.set("IN","India")
// map.set("USA","United states of America")
// map.set("IN","India")
// console.log(map)

// Iterating over map using forof loop

// for (const key of map) {
//     console.log(key) // here in this way you will get output for each individual element in array 
// }

// for(const [key,value] of map) {
//     console.log(key,value)  // here you will get normal output 
// }



// for (const [key,value] of user) {
//     console.log(key,value)  // in this way the object is not iterable 
// }

// --------------------------Note------------------------------------------//
// 1)Objects are not iterable in javascript using forof loop there are other ways through which the object can be accessed

// ----------------------ForIn loop ----------------------------------------------- //
const user = {
    "name":"Mayur",
    "Id":"256"
}
for (const key in user) {
   console.log(`${key} is ${user[key]}`)  // In this way you can get key and value of object 
   // This method you can access the values inside object
}







// There is difference between collection and arrays and node collection all of these are different things 
// Collections can be converted into arrays 

