// // Filter , Map and Reduce Array Methods in Javascript 
// // filter method
// // used when we want to return something from an array  

// const myNums = [1,2,3,4,5,6,7]
//   let arrayFilterValue= myNums.filter((num) => {
//     return num>4 // you have opened the curly braces so need to write a return statement compulsory
// })

// console.log(arrayFilterValue)

// // To return any values using for each loop we have to do some work 
// // in both filter and forEach behind the scene we are checking conditions
// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums)

// let myObjectValues = [
//     {
//         book :"Karma",
//         published : "2001",
//         genre : "Spiritual"
//     },
//     {
//         book : "Rich Dad poor Dad",
//         published : "1990",
//         genre : "finance"
//     },
//     {
//         book : "The Art of war",
//         publised : "2008",
//         genre : "politics"
//     }
// ]


// let filteredValues = myObjectValues.filter((num) => num.genre === "Spiritual" && num.published === "2001" )
// console.log(filteredValues)

// // Map method in arrays 
// // everything is returned in maps so be careful how you use them
// // original array remains unmodified , new array is returned here
// let num1 = [1,2,3,4,5,67,8]
// let returnValue = num1.map((num) => {
//     return num+10
// }) 
// console.log(returnValue) // new array will be returned 
// console.log("The original array",num1) // stays as it is 

// let newArray = []
//   let applyForEach =  num1.forEach((num)=>{
//     if(num>0) {
//       newArray.push(num)
//     }
// })
// console.log(newArray)
const arrayMthod = [1,2,3,4,5,6,7];
const spliceMthd = arrayMthod.splice(0,5);
console.log("Spliced Array is",spliceMthd);
console.log("Original Array",arrayMthod);


const arraysMthd = [1,2,3,4,5,6,7];
const sliceMthd = arraysMthd.slice(0,5);
console.log("Sliced Array is ",sliceMthd);
console.log("Original Array is",arraysMthd)

let myarr = [1,2,3,45,6,77,878,88]
console.log("B",myarr.slice(1,5)) // last value is also not included in slice 
console.log("A",myarr) // Original array size is not reduced using slice

let arn1 = [10,20,30,40,50,60]
console.log("B",arn1.splice(1,5))  // last value is included in splice 
console.log("A->Original Value",arn1) // original array size is reduced