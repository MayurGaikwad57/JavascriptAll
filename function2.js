// Function with objects , arrays and values 
// Suppose in case where you want to add all the numbers that users enter 
// In that case you can rest operator 
// ... is known as restor spread operator 
// All values that user will enter in that cart now will be stored into an array so that when we can loop through that array and add the numbers

function myCart(...num) {
  return num;
}
console.log(myCart(200,300,400))

// Using objects inside a function 
// const User = {
//     name:"Mayur",
//     Id : 200
// }

function userDetails(anyObject) {
    console.log(`The name is ${anyObject.name} and the Id is ${anyObject.Id}`)
}

userDetails({
    name:"Mayur",
    Id: 324
});

// const myArray = [100,200,300,400]

function arrayValue(newArray) {
   return newArray[2];
}
// console.log(arrayValue(myArray))
console.log(arrayValue([100,200,300]))