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

console.log(newCartProducts)// Reduce Property in Javascript 
// Mostly used method 
// One application is in shopping cart where you want to add price for all the items
let array = [1,2,3,4,5,6,7,8,9]
let useReduce = array.reduce((acc,currVal)=>{
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

// Finding max value from array
let numArray = [1,5,9,4,11,6];
function maxValue(arr){
  return arr.reduce((acc,curr)=>{
     return acc>curr ? acc : curr 
  })
}

console.log(maxValue(numArray));


// flatten nested array using reduce without support of flat
const nestedArray = [[1, 2], [3, 4], [5, 6]];
function flatArray(arr){
const flattenArray = arr.reduce((acc,val)=>{
  return acc.concat(val);
},[]);
return flattenArray
}

console.log(flatArray(nestedArray));


const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
  ];

function pushKey(peopleArray){
   const keyVal = peopleArray.reduce((acc,val)=>{
     acc[val.age] = acc[val.age] || [];
     acc[val.age].push(val);
     return acc
   },{})
   return keyVal;
}

console.log(pushKey(people));

const numbers = [1, 2, 3, 4];
// create a custom map using reduce 
function customMap(numArray){
  return numArray.reduce((acc,val)=>{
     acc.push(val*val) // pushing elements into the array 
     return acc;
  },[])
}
console.log(customMap(numbers));


const numbersEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// finding sum of all even numbers from array
function sumEven(sum){
 const evenSum = sum.reduce((acc,val)=>{
    if(val%2===0) {
       acc = acc + val;
    } 
    return acc;
 },0)
 return evenSum;
}

console.log(sumEven(numbersEven));

const words = ["apple", "banana", "watermelon", "cherry", "strawberry"];
// find longest word in array of strings
function longestWord(word){
    // let longestWord = '';
  const longest = word.reduce((acc,val)=>{
    if(val.length>acc.length) {
        acc = val;
    }
    return acc
  },word[0])
  return longest
}

console.log(longestWord(words));

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  // Expected output: { 1: "Alice", 2: "Bob", 3: "Charlie" }
function keyVal(user){
  return user.reduce((acc,curr)=>{
    for (const val in acc) {
        acc[curr.id] = acc[curr.id] || "";
    }
    return acc;
  },{})
}

console.log(keyVal(users))

const number = [3, 7, 2, 9, 5];
//  find max number using reduce 
function maxNum(number){
 return number.reduce((acc,val)=>{
    return acc>val ? acc : val
 })
}

console.log(maxNum(number))