// const score = 400
// console.log(score)
// // Simple way to declare a number 
// // By deafult javascript considers it as number
// const mark = new Number(900)
// console.log(mark)
// // Here specifically metioned as number

// console.log(mark.toString().length)
// // String Operations can be performed
// console.log(mark.toFixed(2))


// const decimalNumber = 123.65
// console.log(decimalNumber.toPrecision(3));

// const currency = 10000000
// console.log(currency.toLocaleString('en-IN'));
// // BY default this is in US format currency mention 
// //(en-IN) is indian currency format similarly we can also use other types based on our project 
console.log(Math.random())

console.log(Math.random())
// This step is done to get rid off decimal value random numbers
console.log((Math.random())*10)
// This step to get rid of zero so we can start generating random numbers from 1 and after 1 
console.log((Math.random()*10)+1)
console.log(Math.ceil(4.2)) // ceil will by default consider higher value
// output here will be 5 
console.log(Math.floor(4.9)) // floor will be the lowest value 
// output here will be 4
// This step is to get floor value of a number ie random number
// To generate number without decimals and also excluding zero
// console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min))



console.log(Math.round(4.32)) // mostly used 