// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = ["Mayur", "Hitesh", "Gaurav"]

// console.log(arr1)
// console.log(arr2)

// console.log(arr1[3])
// // console.log(arr["One"]) // This is not valid accesibility in JS string cannot be used to access array elements

const arr3 = new Array(4,5,6,7)
// console.log(arr3)
// arr3.push(10)
// console.log(arr3)
// // console.log(arr3)
// // arr3.pop()
// // console.log(arr3)

// arr3.unshift(25)  // Adds element always to first position 
// console.log(arr3) 
 
// arr3.shift()   // Removes the element from the first place
// console.log(arr3)

// // questionarre or inquiry about array 
// console.log(arr3.includes(4))
// // Its answer is always boolean type 

// console.log(arr3.indexOf(5))
// console.log(arr3.indexOf(90))
// // Gives index of inquired element


// Slice and aplice operation in array 
// Gives elements form range mentioned in slice operation excluding the last element
const myarrn1 = arr3.slice(1,3)
console.log("Original Array",arr3)
console.log("A",myarrn1) 
console.log("Original Array after Slicing",arr3)
 

// Gives the last element as mentioned inrange but reduces the size of array 
// as a result splice operation results in reduced length of array 
const myarrn2 = arr3.splice(1,3)
console.log("B",myarrn2)
console.log("Original Array after Slicing",arr3)



