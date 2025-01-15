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