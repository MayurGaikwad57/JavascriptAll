// reduce Method in javascript and mostly used method 
// The accumulator should be provided with the initial value 
// if not provided in that case accumulator may take the current value as the initial value and the current 
// value and the current value might shift to the next value of array
// Note-> 1) If initial value of accumulator is provided 
//      ----> then CurrentValue will be array[0]  
//        2) If initial Value for accumulator is not provided
//        ---> then accumulator Value will be array[0] and currentValue will be array[1]
// Above cases are very important 
const arr = [1, 2, 3]
let accumulator = 0;
const addElement = arr.reduce((acc, currVal) => {
    console.log(`The Accumlator value is :${acc} and currVal is :${currVal}`)
    const addSum = acc + currVal;
    return addSum
}, accumulator)
console.log(addElement)

// let addElement = arr.reduce((acc,currVal)=> acc+currVal,0 )
// console.log(addElement)

// Using Reduce method implicitly
// 0 here is initial value of accumulator
let addNum = [1, 2, 3, 4, 5]
let addNewSum = addNum.reduce((acc, val) => acc + val, 0)
console.log(addNewSum)


// Real world scenario of use of Reduce 
/* case -->1) You have a user on your website who is making some purchases and you 
           and you want to display total price of items which are added in the cart
*/

let addItemPrice = [
    {
        itemName: "Tshirt",
        itemPrice: 500,
    },
    {
        itemName: "shirt",
        itemPrice: 1000,
    },
    {
        itemName: "Trousers",
        itemPrice: 900,
    },
    {
        itemName: "Formals",
        itemPrice: 2000,
    },

]

// applying reduce method here 
let newCartProducts = addItemPrice.reduce((acc,item)=>{
      return acc + item.itemPrice
},0)

console.log(newCartProducts)