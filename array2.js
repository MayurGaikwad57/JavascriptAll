const politicians = ["Sharad", "Devandra", "Ajit"]
const reports = ["Bhau", "kaka", "Anna"]
const result_Politicians = reports.concat(politicians);
console.log("The Array after concatination is",result_Politicians)
// // let combine = politicians.concat(reports)
// // console.log(combine)


// // Second Array is added as element in 1st array 
// politicians.push(reports)
// console.log(politicians) 

// Second Array is added as element in 1st array instead of merging two arrays 
// politicians.concat(reports)
// console.log(politicians)

// Spread Operator  

// const best = [...politicians,...reports]
// console.log(best)

// const anothere_array=[1,3,[5,6,8],34,[3,8,9,[2,4,5,[2,6,2,1]]]]
// console.log(anothere_array.flat(Infinity))
// flat method return all the subarray elements present inside main array as seperate 
// It takes paramater as depth -> we have to mention depth 

// console.log(Array.from("Mayur"))
// console.log(Array.isArray("politicians"))
// console.log(Array.isArray("reports"))

// console.log(Array.from({ name: "Virat" }))
// Interesting result
// It actually gives this result
// because it gets confused as to for what it should make array for key or string


// let obj1 = 200
// let obj2 = 400
// let obj3 = 600
// // of is used to create new array from a set of elements 
// console.log(Array.of(obj1,obj2,obj3))

let arrayElements = "10,20,30";
let newArrayList = arrayElements.split(',')
console.log(newArrayList)