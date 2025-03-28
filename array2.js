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

const legend = new Set();
legend.add(1);
legend.add(2);
legend.add(3);

console.log("does 1 exist :", legend.has(3));

const objects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'David' },
    { id: 2, name: 'Eve' },
]

const updatedObject = objects.map(role => role.id)

console.log("The Returned Value is :",updatedObject);
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Charlie' },
    { id: 3, name: 'David' },
    { id: 2, name: 'Eve' },
  ];
// we will maintain set to track id's 
const seenId = new Set();
const uniqueUsers = users.filter((unique)=>{
   const hasunique = !seenId.has(unique.id);
   seenId.add(unique.id);
   return hasunique
})

console.log(uniqueUsers)

const books = [
    {
      title: 'Book A',
      authors: [{ name: 'Author 1', publishedWorks: 2 }, { name: 'Author 2', publishedWorks: 4 }],
    },
    {
      title: 'Book B',
      authors: [{ name: 'Author 3', publishedWorks: 1 }],
    },
    {
      title: 'Book C',
      authors: [{ name: 'Author 4', publishedWorks: 5 }],
    },
  ];

// const getBooks = books.filter((role)=>{
//     const authr = role.authors.some(x=> x.publishedWorks>=3);
//     return authr
// })

// console.log(JSON.stringify(getBooks,null,2))

let getBooks = (book,minWorks) => {
 return book.some((val)=>val.publishedWorks>=minWorks);
};

let result = books.filter((role)=>getBooks(role.authors,3))

console.log(JSON.stringify(result,null,2))


// code to only get the specific author with publiction more than 3 
const book  = books.map((book)=>{
 const author = book.authors.filter(val=> val.publishedWorks>=3);
 if(author.length > 0) {
    return {
        title : book.title,
        author : author
    }
 }
 return null
}).filter(Boolean)

console.log(JSON.stringify(book,null,2))

const movies = [
    {
      title: "Movie A",
      genres: ["Action", "Adventure"],
      cast: [
        { name: "Actor 1", awards: 2 },
        { name: "Actor 2", awards: 1 },
      ],
    },
    {
      title: "Movie B",
      genres: ["Drama"],
      cast: [
        { name: "Actor 3", awards: 5 },
        { name: "Actor 4", awards: 0 },
      ],
    },
    {
      title: "Movie C",
      genres: ["Action", "Thriller"],
      cast: [
        { name: "Actor 5", awards: 3 },
      ],
    },
  ];

const getMovies = movies.filter((movie)=>movie.genres.includes("Action"))
    .map((mov)=>{
        const actorAwards = mov.cast.find(mov=>mov.awards>2);
        if(actorAwards) {
        return {
            title : mov.title,
            genre : mov.genres,
            name : actorAwards.name
        }
    }
    return null
    }).filter(Boolean)

console.log("actor with more than 2 awards",getMovies)


const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const getCount = items.reduce((acc,val)=>{
    acc[val] = (acc[val] || 0) + 1;
    return acc
},{})

console.log(getCount)

// find units of product sold across all regions
const sales = [
    {
      region: "North",
      products: [
        { name: "Product A", units: 100 },
        { name: "Product B", units: 200 },
      ],
    },
    {
      region: "South",
      products: [
        { name: "Product A", units: 150 },
        { name: "Product C", units: 300 },
      ],
    },
  ];
// acc = {}
// acc = {"Product A" : 0}
const getProducts = sales.flatMap((product)=>product.products);
const getUnitsSold = getProducts.reduce((acc,product)=>{
      if(!acc[product.name]){
         acc[product.name] = 0;
      }
      acc[product.name] += product.units
      return acc
},{})
  
console.log(getUnitsSold);
// console.log(getUnits)

// const getUnitsSold = [
//     { name: "Product A", unitsSold: 10 },
//     { name: "Product B", unitsSold: 5 },
//     { name: "Product A", unitsSold: 7 },
//   ];
// // acc = {};
// // acc = {"Product A: 0"}
// // acc = {"Product B : 0"}
// // acc = {}
// const unitPrice = getUnitsSold.reduce((acc,product)=>{
//    if(!acc[product.name]) {
//      acc[product.name] = 0;
//    }
//    acc[product.name] += product.unitsSold 
//    return acc;
// },{})

// console.log(unitPrice);

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
  ];
// let peoples = {};
// acc= {25:[{name : alice, age : 25}]}
const groupByAge = people.reduce((acc,user)=>{
    if(!acc[user.age]) {
       acc[user.age]  = [];
    }
    acc[user.age].push(user)
    return acc
},{});

console.log(groupByAge)

// output oldest book in the library 
const library = {
    shelves: [
      {
        id: 1,
        books: [
          { title: "Book A", year: 2001 },
          { title: "Book B", year: 1999 },
        ],
      },
      {
        id: 2,
        books: [
          { title: "Book C", year: 2010 },
          { title: "Book D", year: 1998 },
        ],
      },
    ],
  };
  
function oldestBook(library) {
    const getOldBook = library.shelves.flatMap((book)=>book.books)
    console.log(getOldBook)
    const getBook = getOldBook.reduce((old,curr)=>{
        return curr.year < old.year ? curr : old
    })
    return getBook.title
}

console.log(oldestBook(library))

// let arr = [1,2,3,4,5]
// const reducing = arr.reduce((acc,val)=>{
//     return acc = acc + val;
// })

// console.log(reducing)
// total number of likes for a post
const comments = [
    {
      postId: 1,
      text: "Nice post!",
      replies: [
        { text: "Thanks!", likes: 5 },
        { text: "You're welcome!", likes: 2 },
      ],
    },
    {
      postId: 2,
      text: "Great article!",
      replies: [
        { text: "Glad you liked it!", likes: 3 },
      ],
    },
  ];

let totalLikes = (comments) => {
  const likes = comments.flatMap((like)=>like.replies)
  const countLike = likes.reduce((acc,likeCount)=>{
       if(typeof likeCount.likes === "number") {
           return acc + (likeCount.likes || 0)
       }
       return acc;
  },0)
  return countLike
}

console.log(totalLikes(comments));
  
// find and output the unique projects
const company = {
    name: "Tech Corp",
    departments: [
      {
        name: "Engineering",
        employees: [
          { id: 1, name: "Alice", projects: ["Alpha", "Beta"] },
          { id: 2, name: "Bob", projects: ["Gamma"] },
        ],
      },
      {
        name: "Marketing",
        employees: [
          { id: 3, name: "Charlie", projects: ["Delta"] },
          { id: 4, name: "Dave", projects: ["Alpha", "Epsilon"] },
        ],
      },
    ],
  };
  
function uniqueProjects(company) {
// const uniqueProject = company.departments.filter((proj)=>proj.employees)
// // return uniqueProject
// const getUnique = uniqueProject.flatMap((proj)=>proj.employees);
// const projects = getUnique.flatMap(proj=>proj.projects);
// const allUniqueProjects = [...new Set(projects)]
// return allUniqueProjects
const uniqueProjects = [...new Set(company.departments.flatMap((proj)=>proj.employees).flatMap((proj)=>proj.projects))]
const prValues = uniqueProjects.forEach((mov)=>{
  if(mov && mov.length>0) {
    console.log(mov)
  }
})
}
uniqueProjects(company);

const uniqueValue = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Charlie' },
  { id: 3, name: 'David' },
  { id: 2, name: 'Eve' },
];

const seenID = new Set();
const usersUnique = uniqueValue.filter((val)=>{
  const uniquePeople = !seenID.has(val.id);
  console.log("Unique People are",uniquePeople)
  seenID.add(val.id);
  return uniquePeople;
}) 

console.log(usersUnique);

let email = "john.doe@gmail.com";

// extract domain names from the array 
const extractNames = email.split('@')[1];
console.log(extractNames)

let csvData = "name,age,city\nAlice,25,New York\nBob,30,Los Angeles\nCharlie,22,Chicago";

const splitCsvObject = csvData.split('\n').map(x=> {
  return {
    name : x,
    age : x,
    city : x
  }
})
console.log(splitCsvObject)

let str = "  JavaScript   is   awesome!   ";
const objTrim = str.trim().split(/\s+/).join(" ");
console.log(objTrim)

let numbers = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const fomattedNumber =  `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`;
console.log(fomattedNumber)

let sentence = "JavaScript is powerful";
const reverseWord = sentence.split(" ").reverse().join(" ");
console.log(reverseWord)

let data = ["Alice", "Bob", "Charlie", "David"];
const goString = data.join(" ");
console.log(goString)


let messyStr = "  JavaScript   is    awesome!  ";
const removeSpaces = messyStr.trim().split(/\s+/).join(" ")
console.log(removeSpaces)

let cardNumber = "1234-5678-9012-3456";
// mask the credit card number here 
const maskedData = cardNumber.split("-").map((ele,index)=> index< 3 ? '****' : ele).join(" ")
console.log(maskedData)

let words = "apple banana apple orange banana apple";
// find most frequently occuring word 

function findMostOccuringWord(sentence){
 let words = sentence.split(" ");
 let setWords = {};
 for (const word of words) {
   setWords[word] = (setWords[word] || 0) + 1;
 }
 let maxCount = 0;
 let mostOccuringWord = "";
 for (const wordCount in  setWords) {
    if(setWords[wordCount]>maxCount) {
        maxCount = setWords[wordCount];
        mostOccuringWord = wordCount
    }
  }
  return maxCount // most occuring word frequency
}

console.log(findMostOccuringWord(words));
let dateArray = [2025, 2, 19];
let updatedDate = dateArray.join("/")
console.log(updatedDate)


let sentence1 = "apple banana apple orange banana apple";
// challenge --> remove duplicate words from string 
function duplicate(sentence1){
   let sentence = sentence1.split(" ");
   const uniqueFruits = [...new Set(sentence)].join(" ");
   return uniqueFruits
}


console.log(duplicate(sentence1));


let longestWord = "I love programming in JavaScript";
// find the longest word from the sentence 

function findLongestStringWord(word) {
    let long = word.split(" ");
    let longestWord = long[0];
    for (const word of long) {
      if(word.length>longestWord.length) {
         longestWord = word;
      }
    }
    return longestWord;
}

console.log(findLongestStringWord(longestWord));

let strVowels = "JavaScript is amazing";
function countVowels(strVowels){
  //  let letterArray = strVowels.split("");
  //  let count = 0;
  //  for (const vow of letterArray) {
  //    if(vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u') {
  //      count++;
  //    }
  //  }
  //  return count
  // ABove solution is not a optimised appraoch it is not a good approach 

   let count = 0;
   let vowels = new Set(['a','e','i','o','u'])
   for (const word of strVowels.toLowerCase()) {
     if(vowels.has(word)) {
       count++;
     }
   }
   return count;
}

console.log(countVowels(strVowels))

let strRepeat = "aabbccdd";
// find first non repeating character 
function repeat(strRepeat){
     const wordObj = {};
     for (const char of strRepeat) {
      wordObj[char] = (wordObj[char] || 0) + 1;
     }
     for (const char of strRepeat) {
       if(wordObj[char] === 1) {
         return char
       }
     }
      return `No Unique characters found`
}
console.log(repeat(strRepeat))


let sentence2 = "hello world! welcome to javascript";
// capitalize first letter of each word
function capitalize(sentence2){
  const splitSentence = sentence2.split(" ");
  let capWords = splitSentence.map((word)=>{
    let firstChar = word.charAt(0).toUpperCase();
    let remWords = word.slice(1);
    return firstChar.concat(remWords)
  })
  return capWords.join(" ");
}

console.log(capitalize(sentence2));

let reapeat = "javascript";
function occuring(strRepeat){
  const charObj = {};
  for (const char of strRepeat) {
    charObj[char] = (charObj[char] || 0) + 1;
  }
  let maxcount = 0;
  let mostOccuring = '';
  for (const word in charObj) {
     if(charObj[word]>maxcount) {
       maxcount = charObj[word];
       mostOccuring = word
     }
  }
  return mostOccuring
}
console.log(occuring(reapeat));

let sentences = "JavaScript is an amazing language";
// function to calculate number of words in a sentence 
function countWords(sentences){
  const word = sentences.split(" ");
  if(word.length>0) {
    return word.length
  }
}

console.log(countWords(sentences));

let sentencess = "JavaScript is powerful";
let letter = "p";

// find the word that contains the given letter 
function findWord(sentencess,letter){
  const word = sentencess.split(" ");
  // let knowWord = getWord.map((char)=>{
  //   if(char.includes(letter)) {
  //      return char;
  //   }
  // }).filter(Boolean);
  // return knowWord

  // The above is not an optimised solution 
  const matchingWord = word.filter(char=>char.includes(letter))
  return matchingWord
}
console.log(findWord(sentencess,letter)); 
// correct soln but not optimised approach 




let wantSentence = "hello WORLD, HOW are YOU?";
function titleCase(wantSentence){
// let wordArray = wantSentence.split(" ");
// let formatSentence = wordArray.map((word)=>{
//    let firstChar = word.charAt(0).toUpperCase();
//    let remChar = word.slice(1).toLowerCase();
//    return firstChar.concat(remChar);
// })
// return formatSentence.join(" ");

// The above solution is correct but not an optimised approach 
// The below is the optimised approach 
return wantSentence.split(" ").map((word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}).join(" ");
}

console.log(titleCase(wantSentence))


let sentenceReverse = "JavaScript is awesome";
//Write a function that reverses each word individually but keeps their order.

function reverseString(sentence){
return sentence.split(" ")
       .map(word=>word.split("").reverse().join(""))
       .join(" ");
}

console.log(reverseString(sentenceReverse));

 let frequentWord = "apple banana apple orange banana apple orange banana orange mango";
//  find the 2nd most frequent word 
function secondFrequentWord(frequentWord){
  let words = frequentWord.split(" ");
 const fruits = {};
 for (const fruit of words) {
   fruits[fruit] = (fruits[fruit] || 0 ) + 1;
 }
 let fruitArray = Object.entries(fruits).sort((a,b)=>b[1]-a[1])
 return fruitArray[1][0]
}

console.log(secondFrequentWord(frequentWord))

const startDate = "2024-03-01";  // (Friday)
const endDate = "2024-03-10"; 
function dateDays(startDate,endDate) {
  const startingDate = new Date(startDate);
  const endingDate = new Date(endDate);
  //first we will calculate the number of days 
  const numberOfDays = Math.floor((endingDate - startingDate) / (1000 * 60 * 60 * 24));
  console.log(numberOfDays)
  const weeks = Math.floor(numberOfDays/7);
  let weekends = weeks*2;
  // Now we need to calculate the remaining number of days 
  let remainingDays = numberOfDays%7;
  let day = startingDate.getDay();
  for(let i = 0 ; i< remainingDays;i++) {
    if(day === 6 || day === 0) {
      weekends++;
    }
    day = (day+1)%7
  }
  console.log(weekends);
}


dateDays("2024-03-01","2024-03-20");


