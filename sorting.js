// ALl related to sorting in javascript 
let personNames = [
    {name:"Mayur",age:80},
    {name:"Amit",age:35},
    {name:"Amit",age:2},
    {name:"Elvish",age:20},
    {name:"Swapnil",age:35}
];
// Sorting based on the names 
// personNames.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(personNames)

// Anothere type of sorting 
// Based on age sorting if names are same 
// personNames.sort((a,b) =>{
//     if(a.name===b.name) {
//         return a.age-b.age;
//     }
//     return a.name.localeCompare(b.name)
// })
// console.log(personNames)

//             <---NOTE--->
//sort() function sort values basically in lexiographical
// way therefore we need to pass a comparision function
let numbers = [20,10,3,5,25,11]
// numbers.sort() // sorting fails here 
// console.log(numbers)

numbers.sort((a,b)=>a-b);
console.log(numbers)


