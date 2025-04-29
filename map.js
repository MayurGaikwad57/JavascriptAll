// map questiosn to solve 

const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 95 },
    { name: "David", marks: 75 },
    { name: "Eve", marks: 90 }
  ];

  
// function getStudents(students) {
//  return students.filter(num => num.marks > 80 );
// }

// console.log(getStudents(students));


// Combine filter() and map() to return the names of students who passed (marks >= 40), in uppercase.

function getStudents(students) {
  return students.filter(val=>val.marks>80).map(val=>val.name)
}

console.log(getStudents(students))

const users = [
    { name: "Alice", posts: [{ likes: 30 }, { likes: 150 }] },
    { name: "Bob", posts: [{ likes: 20 }, { likes: 50 }] },
    { name: "Charlie", posts: [{ likes: 200 }] }
  ];

//   You have an array of user objects. Each user has a list of posts.
//   Return the names of users who have at least one post with more than 100 likes.

function getUsers(users){
 let userName = users.filter((value)=>value.posts.some((val)=>val.likes>100)).map(val=>val.name)
 return userName
}

console.log(getUsers(users));


const data = [
    { email: "  alice@example.com ", isActive: true },
    { email: "bob@example.com", isActive: false },
    { email: "   charlie@example.com", isActive: true }
  ];

// Given an array of objects with email and isActive properties,
// return a new array of only active users' emails, all in uppercase and trimmed (remove whitespace).

function activeUser(data) {
let activeEmail = data.map((value)=>{
  if(value.isActive){
    return value.email.trim().toUpperCase();
  }
}).filter(Boolean)
return activeEmail
}

console.log(activeUser(data))


const products = [
    { name: "Phone", price: 200, discount: 0.3 },
    { name: "Headphones", price: 80, discount: 0.1 },
    { name: "Mouse", price: 50, discount: 0.2 }
  ];

//   You have an array of products, each with price and discount.
//   Return an array of product names where the final price after discount is less than $100.

function productName(products) {
 return products.map((value)=>{
    let finalPrice = value.price - value.price * value.discount;
   if(finalPrice<100) {
     return value.name
   }
 }).filter(Boolean);
}

console.log(productName(products));

const user = [
    {
      name: "Alice",
      orders: [
        { items: [{ name: "Book", price: 30 }, { name: "Laptop", price: 1200 }] }
      ]
    },
    {
      name: "Bob",
      orders: [
        { items: [{ name: "Pen", price: 5 }, { name: "Monitor", price: 300 }] }
      ]
    }
  ];

//   You’re given an array of users. Each user has a list of orders, and each order has an array of items.
//   Return an array of item names from all users that cost more than $100.  

function getUserName(user) {
      return user.flatMap((value)=>value.orders).
         flatMap((value)=>value.items).
         filter((value)=>value.price>100).
         map((value)=>value.name)
}

console.log(getUserName(user));

const arr = ["42", "hello", 30, true, "3.14", null, "NaN", undefined, "100"];

// Given an array of mixed values (strings, numbers, booleans, null, undefined),
// return a new array with only valid number strings (like "42", "3.14"),
// and convert them to actual numbers using map().


function stringToNum(arr){
return arr.filter((value)=>
  typeof value === 'string' && !isNaN(Number(value)) && value.trim() !== "" || typeof value === 'number').map(value => Number(value))
}

console.log(stringToNum(arr));

const student = [
    { name: "Alice", scores: [90, 85, 88] },
    { name: "Bob", scores: [60, 70, 72] },
    { name: "Charlie", scores: [95, 92, 90] }
  ];

//   6. Score-Based Ranking
//   You have an array of students with scores in multiple subjects.
//   Return names of students whose average score is above 85.

function names(student) {
  return student.filter((value)=>{
    let total = value.scores.reduce((acc,val)=>acc = acc + val,0)
    let avg = total/value.scores.length;
    return avg> 85;
  }).map(n=>n.name)
}

console.log(names(student));


const strings = ["banana", "apple", "pear", "pineapple", "grape", "orange"];

// Given an array of strings, return a new array with strings that have more than 5 characters,
// sorted by length (descending), and transformed to uppercase.

function transform(strings) {
return strings.filter((val)=>val.length>5).map(val=>val.toUpperCase()).sort((a,b)=>b.length-a.length)
}

console.log(transform(strings));