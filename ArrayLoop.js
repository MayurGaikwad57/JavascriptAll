// Different Loops that are available for arrays 
// forof loop 
/*   Benefits served by forof loop   
1) dont need to write normal for loop statements like 
   initialize, condition ,increment 
   The for off loop will naturally know all these 
   syntax -> for (const element of object) {}
   here object doesn't refer to JS object but we are talking with refrence to everthing as whole in js which will be using our arrays
*/
let arr = [1,2,3,4,5]
for (const element of arr) {
     console.log(element)
}
// Note in JS String,Object and Array are iterable 
let Name = "Mayur Gaikwad"
for (const element of Name) {
    if(element == " ") {
        continue;
    }
    console.log(element)
}

// Maps --> Important Topic in JS
/* Properties of Maps:
1) Maps remember their insertion order
2) Maps hold unique key, value pairs
3) keys are unique in maps they can occur only once 
4) Iteration in maps happen through the key value pairs that is the order in which the key value pairs were inserted 
*/
const map = new Map() 
map.set('IN',"INDIA")
map.set('USA',"America")
map.set('FR',"FRANCE")

// for (const itr of map) {
//     console.log(itr) // return an array with both key and value pairs
// } 
// to Avoid getting array with both key value pairs 
// in for loop we can apply [key,value] which will help us destructure the map values that we are getting as array currently 
for (const [key,value] of map) { 
    console.log(key,":-",value)
}

// iterating over objects using forIn loop 
// with forof loop you cannot itearte in object 
// you can use forin loop for iterating in object 
const myObj = {
    name:"Mayur",
    age: 19,
    location:"Delhi",
}
for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`)
}


// forin loop in array 
let array1 = [1,2,3,4,5]
// Concept to remember 
// Array also has its keys they are index 
// so when we are printing array values we see index getting printed
// so we have to modify its syntax val1[keys]
for (const keys in array1) {
    console.log(array1[keys])
}

// Note -> ForIn loop cannot used in Maps 

// New section forEach Loop in an array 
let programming = ["Mayur","Amit","Elvish","Ananya"];
programming.forEach( function(item) {
    console.log(item);
}) 
// forEach loop has a callback function as its first parameter 
// callback function when declared in above mentioned traditional way has no function name

// let coding = [1,2,3,4,5,5,6]
// coding.forEach((item,index,coding) => {
//    console.log(item,index,coding)
// }) 
// Arrow functions can also be used inside forEach loop

const objectValues = [
    {
        languageName : "Javascript",
        languageShortHand : "JS",
    },
    {
        languageName : "Python",
        languageShortHand : "py",
    },
    {
        languageName : "Ruby",
        languageShortHand :"Ry",
    }
]

// LEARNING TO APPLY FOR EACH LOOP IN ARRAY WHEN THE DATA COMES THE DATABASE AND WE HAVE TO PRINT OR PERFORM ACTIONS ON THE DATA 
// forEach is mostly used when this type of complex situation arises
objectValues.forEach((item)=>{
    console.log(item.languageName)
})

// Important Point -> foreach loop doesn't return any value 
// when you try to return some value the output will be undefined 

