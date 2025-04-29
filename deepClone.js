// const obj = {
//     name : "Mayur",
//     skills : {
//         skillMain : "Java",
//         skillSub : "C++"
//     },
//     age : 17,
//     hobbies : {
//         hobbyMain : "Cricket",
//         hobbySub : "Football"
//     },
//     gender : "Male"
// }

// // console.log("Object is",obj)

// // const deepClone = structuredClone(obj);
// // console.log("DeepClone is ",deepClone)

// let newState = {
//     users: [{ name: "Mayur" }]
//   };

// let updatedState = newState.users.map(val=>val.name === "Mayur" ? val.name = "King" : val);
// console.log("Updated State is",updatedState)


// let user = {
//     city : ["Mumbai","Chennai"],
//     userFamily : {
//         type : ["Marathi","Kannada"],
//     },
//     country : ["USA","Nepal"]
// }

// // write down a function to flatten the object into array 

// function flattenArray(user) {
// let result = {};
// console.log("Object to array is",Object.entries(user));
// Object.entries(user).forEach(([key,value])=>{
//   if(typeof value === 'object' && value != null && !Array.isArray(value)) {
//      Object.assign(result,value)
//   }
//   else{
//     result[key] = value
//   }
// })
// return result;
// }

// console.log(flattenObject(user))

// // write a function to flatten an object to make it single object 
// changeObj = {
//     name : "Elvish Bhai",
//     skills : {
//         lang : "Java",
//         langSub : ""
//     }
// }
// function flattenObject(changeObj){

// }

// const names = ["Mayur","Gaikwad"];
// const [nameOne,surName] = names;
// console.log("NMae is ",nameOne);

const greatName = {
    a: 12,
    b: 25,
};

const { demo, ...rest } = greatName;
delete demo; // does nothing, `demo` is `undefined`
console.log(demo); // undefined
console.log(greatName)

// const addVar = {...greatName , c: 30};
// console.log(addVar)
// console.log(greatName)

