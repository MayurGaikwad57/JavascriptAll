// Functions in Javascript 
//  function addTwoNumber(num1 , num2) {
//     console.log(num1+num2);
//  }
// addTwoNumber -> this a reference to a function 
// addTwoNumber() -> this is execution of function
// addTwoNumber(3,5)
function addTwoNumber(num1 , num2) {
    // addTwoNumber(num1,num2) - > num1 and num2 are parameters of the function
    // let add = num1+ num2;
    // return add;
    console.log("Mayur Gaikwad Is the best in the world ")
   return num1+num2;
   console.log("Mayur Gaikwad Is the best in the world ")
//    any statement after return is not cosnidered inside function its unreacheable
// Javascript rule 
 }
const result = addTwoNumber(10,10);  // (10,10) values passed are arguments 
// Only if you are returning the function you can store it in variable otherwise not possible
console.log("Tge result is :", result);
// let add = addTwoNumber(4,9)
// console.log(add)
//  The output here will be Undefined 
//  Return is itself a concept console and return are two different things 
// so printing console doesnt mean that you are returning something

function loginUser(userName="Mayur") {
    if(!userName) {
    console.log("please enter a username")
    }
    return `${userName} just logged in `
}
const name = loginUser("Daya");  // Daya will overwrite the userName Mayur 
// if nothing is passsed then Mayur just logged in will print 

console.log(name);


let storeValue = function(a,b) {
      return a+b;  // Anothere Way of declaring a function
}
let result1 = storeValue(10,5)
console.log(result1)

function funcAdd(a,b) {
    return a+b;
}
console.log(funcAdd(10,20))