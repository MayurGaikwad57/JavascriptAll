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


