// Object nethods and pratices using javacript 
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  // iterating over objects 
for (const val in person) {
    //  console.log(`${val}`)  // returns key 
    if(person.hasOwnProperty(val)) {
     console.log(`key ${val} Value:${person[val]}`)
    }
}

// getting keys as array 
console.log("Get key Arrays",Object.keys(person)); 
// return keys as an array

console.log("Get Values as Array",Object.values(person))

