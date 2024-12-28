// // let arr1 = [1, 2, 3, 4, 5]
// // let arr2 = ["Mayur", "Hitesh", "Gaurav"]

// // console.log(arr1)
// // console.log(arr2)

// // console.log(arr1[3])
// // // console.log(arr["One"]) // This is not valid accesibility in JS string cannot be used to access array elements

// // Javacsript Array Operations Create shallow copies i.e copies that share the same reference point

// const arr3 = new Array(4,5,6,7)
// // console.log(arr3)
// // arr3.push(10)
// // console.log(arr3)
// // // console.log(arr3)
// // // arr3.pop()
// // // console.log(arr3)

// let arr4 = [1,2,3,4,5,6]
// console.log("print")
// console.log(arr4)
// arr4.unshift(10); // 10 is added at the start and remaining values are moved to the end 
// // for large values this opeartion should be avoided cause involves shifting of numbers 
// console.log(arr4)   // 10 is shifted at the starting
// arr4.shift()  
// console.log("shift Opeartion performed")
// console.log(arr4)
// let myArr = new Array(10,11,12,13,14,15,16,17,18,19)
// console.log(myArr)
// //.............................Push Operation .............................//
// myArr.push(25,30) // elements added at the end of the array
// console.log(myArr)
// myArr.pop() 
// console.log("Last Element from the array Popped")
// console.log(myArr)
// // arr3.unshift(25)  // Adds element always to first position 
// // console.log(arr3) 
 
// // arr3.shift()   // Removes the element from the first place
// // console.log(arr3)

// // // questionarre or inquiry about array 
// // console.log(arr3.includes(4))
// // // Its answer is always boolean type 

// // console.log(arr3.indexOf(5))
// // console.log(arr3.indexOf(90))
// // // Gives index of inquired element


// // Slice and splice operation in array 
// // Gives elements form range mentioned in slice operation excluding the last element
// const myarrn1 = arr3.slice(1,3)
// console.log("Original Array",arr3)
// console.log("A",myarrn1) 
// console.log("Original Array after Slicing",arr3)
 

// // Gives the last element as mentioned inrange but reduces the size of array 
// // as a result splice operation results in reduced length of array 
// const myarrn2 = arr3.splice(1,3)
// console.log("B",myarrn2)
// console.log("Original Array after Slicing",arr3)


let myarr = [1,2,3,45,6,77,878,88]
console.log("B",myarr.slice(1,5)) // last value is also not included in slice 
console.log("A",myarr) // Original array size is not reduced using slice

let arn1 = [10,20,30,40,50,60]
console.log("B",arn1.splice(1,5))  // last value is included in splice 
console.log("A->Original Value",arn1) // original array size is reduced

// find , some methods in array 
/* .................................Find Method................................
The find method is a built-in JavaScript array method that allows you to search for an element in an array based on a condition. It returns the first element in the array that satisfies the provided condition (callback function). If no elements satisfy the condition, it returns undefined.
*/
const numbers = [1,2,5,10,12,24,23];
const foundMatch = numbers.find((value)=>{
   return value>10;
   // find method returns the first matching element
}) 

console.log(foundMatch);

const objectUsers =[
    {id:1,name:"Mayur"},
    {id:1,name:"king"}, // this will not be returned as find returns first matching element
    {id:2,name:"Amit"},
    {id:3,name:"Elvish"}
]

const getName = objectUsers.find((value)=>{
    return value.id === 1;
})

// find which user is a admin 
// we will use the find method if we just want to know that admin exists , but if you want total number of admins then use filter method
const users = [
    { id: 1, name: 'Alice', isAdmin: false },
    { id: 2, name: 'Bob', isAdmin: true },
    { id: 3, name: 'Charlie', isAdmin: false },
  ];

  const findAdmin = users.find((value)=>{
    if(value.isAdmin === true){
        return value.name
    }
    return null;
})
  console.log("The Admin Is",findAdmin)

console.log(getName);

// chaining of arrays 
const num1 = [10,20,30,40,50,60];
const chaining = num1.map(value=> value + 1).find(value=> value> 20);
console.log(chaining);


// some method in array 
// The some method in JavaScript is a built-in array method that checks if at least one element in the array satisfies a given condition (test) implemented by the provided callback function. It returns a boolean value: true if any element passes the test, and false otherwise.
const numMultiple = [1,2,3,4,5];
const existElement = numMultiple.some(value=>value>4)
// here as sooon as the num > 4 is found the function returns true
// further processing of array is stopped 
console.log(existElement) // output as true 