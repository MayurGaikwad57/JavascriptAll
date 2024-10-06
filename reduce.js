// Reduce Property in Javascript 
// Mostly used method 
// One application is in shopping cart where you want to add price for all the items
let arr = [1,2,3,4,5,6,7,8,9]
let useReduce = arr.reduce((acc,currVal)=>{
      console.log(`Acc is :${acc} and currVal is :${currVal}`)
      let addValue = acc + currVal
      return addValue;
},0)
console.log(useReduce)

let shoppingCart = [
    {
        course:"Javascript",
        price : 2000,
    },
    {
        course:"Java",
        price : 2000,
    },
    {
        course:"Angular",
        price : 2000,
    },
    {
        course:"React",
        price : 2000,
    },
    {
        course:"MongoDB",
        price : 2000,
    },
]
// You can even declare the initial value for the accumulator in global scope
// Value initilization is very essential otherwise accumulator will take the 
// first Array value as initial value which is shoppingCart[0]
// and the current value will move ahead to shoppingCart[1]
let hold = 0;
let addingCartPrice = shoppingCart.reduce((hold,cart)=>{
        return hold+cart.price
},hold)
console.log(addingCartPrice); 