// All discusion on filter
// filter returns values and has conditionals
// whenever you open the scope you have to write a return statement in it 
// Example-: 1)   () => {  return }  known as explicit return
// Examle-: 2) () => () or without () no need to write return statement here 
// Example-: 3) ()=>({})  use paranthesis when you want to return an object from a function
let myValues = [1,2,3,4,5,6,7,8,9,10]
let myFilter = myValues.filter((num)=> {
     if(num>4){
       return num
     }
})
console.log(myFilter)

let copyValues = []
let copiedValues = myValues.filter((val) => {
        if(val>4) {
          copyValues.push(val)
        }
})
console.log(copyValues)

// Real world Example of filter in shopping or ecommerce website or any real world project 
const bookValues = [
  {
    book:"Karma",
    published : 2004,
    genre : "Spiritual",
  },
  {
    book:"Rich Dad Poor Dad",
    published : 2000,
    genre : "Finance",
  },
  {
    book : "The Art of War",
    published : 2000,
    genre : "Politics"
  },
  {
    book : "48 Laws of power",
    published : 2004,
    genre : "Politics"
  },

]

/*  Scenario -->(1) We are getting values from the api for books data now we 
have to display these values in our view based on certain conditions
(2) we want to display books to the user based on published year and genre
  //-----------Whenever we have certain cases then we can use filter method of the Array...........//
*/

const getBookObject = bookValues.filter( (call) =>{
      if(call.published === 2004 || call.genre === "Politics") {
        return call.book
      }
})
console.log(getBookObject)
















let myArray = ["apple","banana","chickoo","avacado","avla"] 
let findFruits = myArray.filter((val) =>{
   if(val.charAt(0)==='a') {
    return val
   }
})
console.log(findFruits)

// let fruits = myArray.forEach((value) => {
//       if(value.charAt(0)==='a') {
//         console.log(value)
//       }
// })
// console.log(fruits) 
// with these we get undefined value because forEach doesn't return anything 
// this is a potential problem wit forEach so we prefer filter or maps or reduce 
// based on the tasks that we have to exectute 
