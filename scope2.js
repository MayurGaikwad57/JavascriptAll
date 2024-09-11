// function one() {
//     const username = " Mayur "
//     function two() {
//         const website = "Youtube"
//         console.log(username);
//     }
//     console.log(website)
//     two()
// }
// one()

// if(true){
//     const  username= "Mayur"
//     if(username==="Mayur") {
//         const website = " Gaikwad "
//         console.log(username + website);
//     }
//     // console.log(website);
// }
// console.log(username);

// +++++++++++++++++++++++ INTERESTING +++++++++++++++++++++
console.log(one(5))
function one(num) {
  return num+1
}

/* Hoisting - how variables are declared , where they are kept , what is their execution context , how javascript reads varaibles , How a final tree is created where variables are displayed, functions are displayed etc  */
addNum(5)   // In this way you cannot access the function the execution will give you error 
//  ReferenceError: Cannot access 'addNum' before initialization

const addNum = function two(num) {
  return num+2;
}

