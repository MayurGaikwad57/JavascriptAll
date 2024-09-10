// Stack and Heap Memory 
// Primitive data types are stored in stack memory
// Copy of that variabe is made availabe 
// let channelName = "Best Code"
// let anothereChannelName = channelName
// anothereChannelName = "Code With Mayur"
// console.log(channelName)
// console.log(anothereChannelName)

let myObj ={
    name:"Mayur Gaikwad",
    age:22,
    City: "solapur",
}

let anothereObj = myObj
anothereObj.age = 55
console.log(anothereObj)

// Non-primitive data types are stored in heap 
// reference to the variable is made available 
// hence, values changed by anothere object are also reflected in the original object