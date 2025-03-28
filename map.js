// Map is the most important concept 
const cities = new Map();
cities.set('US','United States of America');
cities.set('In','India'),
cities.set('ussr','Russia');
cities.set('{id:1}','Kdnwd');

console.log(cities.get('In')); // to get particular value of key 
console.log("Key exists",cities.has('In')) // To check if the particluar key exist 
console.log(cities.get('{id:1}'))


// console.log([...cities.entries()]);
for(let [key,value] of cities){
   console.log(`key is ${key} and ${value}`)
}

let words = 'Javascript'
function OccuringWord(words){
 let characters = words.split("");
 let charMap = new Map();
 for(let word of characters){
   charMap.set(word,(charMap.get(word)||0)+1);
 }
 let maxCount = 0;
 let mostOccuringWord = '';
 for (const [word,count] of charMap) {
   if(count>maxCount) {
      maxCount = count;
      mostOccuringWord = word;
   }
 }
 console.log(mostOccuringWord)
}

OccuringWord(words);

let frequentWord = " banana apple orange banana apple banana orange mango";
// find 2nd most occuring word

function secondOccuring(sentence){
  const words = sentence.split(" ");
  let occuringWords = new Map();
  for(let word of words) {
    occuringWords.set(word,(occuringWords.get(word)||0)+1);
  }
 const sortedWords = [...occuringWords.entries()].sort((a,b)=>b[1]-a[1]);
 return sortedWords.length > 1 ? sortedWords[1][0] : null;
}

console.log(secondOccuring(frequentWord));

