// forEach Loop in array 
let fruits = ["Mango","Watermelon","grapes","pineapple","guava"];
let altFruit = []; 
fruits.forEach((fruit)=>{
   altFruit.push(fruit);
})
console.log(altFruit); // altFruit array populated with the values from our array


const obj = {
   name : "Mayur",
   id: 11
}

console.log(...obj)
