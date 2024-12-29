// Array Methods Practice 
let arr = [10,20,30,40,50]
// const arr2 = arr.slice(0,4) // last element is exculded 
// console.log(arr2);// gives new array in range from (0,4] 4 excluded
// console.log(arr)  // Original Array remains same its size not changed

// Splice Method in Array 
let array = [1,2,3,4,5]
let Array1 = array.splice(0,4) // last index element is included
console.log(Array1) //gives new array (0,4) 4 is included
console.log(array); // original array size is reduced 


// Join Method in Array 
let joinArray = ["Apple","Santra","pineapple","watermelon"]
let joinedArray = joinArray.join(', ')
// will join the array elements and return a string ,
// default seperator is (,) if nothing is provided

console.log(joinedArray); // returns readable string form array with values joined
console.log(joinArray) // original array is not modified it remains as it is 

// Key Case 
// If you have non string elements 
let nonStringArray = [1,"king",true]
let nonStringJoin = nonStringArray.join('-') 
// The join method will convert all the array elements into string before 
// applying the seperator
console.log(nonStringJoin)

// Includes method in array 
// Original Array is not modified
// array.includes(valueToFind, startIndex) --> Syntax of includes method
// includes method is case sensitive
let includesArray = [1,2,3,4,55];
let includesReally = includesArray.includes(9);
console.log(includesReally)

let commonArr = [1,2,3,4,56,51];
let includesCommon = commonArr.includes(1,2);
// 2 here is index to start the search for 
// 1 is present at 0th index and we are trying to search from 2nd index
console.log(includesCommon); // false output
// console.log(commonArr) Original array remains same 

// Negative Case of searchIndex

let negArray = [1,2,4,5,6,7,8,9]
let negOut = negArray.includes(2,-6)
console.log(negOut)

/*  Step-by-Step Execution:
The array is: [1, 2, 4, 5, 6, 7, 8, 9].
startIndex = -6:
Negative startIndex is resolved as:
array.length + startIndex = 8 + (-6) = 2.
Search starts from the resolved start index
So, the search starts from index 2 (element 4).
The includes method checks from index 2 onward: [4, 5, 6, 7, 8, 9].
Since 2 is not present in this subarray, the result is false.
*/
// Anothere Example for understanding
let resArr = [1,2,3,4,5,6,7,8]
let conArr = resArr.includes(2,-3);
console.log(conArr); // output as false


// Split Method of an String
/*  string.split(separator, limit)
separator (optional): Specifies the character, substring, or regular expression
to use for splitting the string. If not provided, the entire string is placed in 
array as a single element.
limit (optional): A number specifying the maximum number of splits to perform.
Any remaining text will not be included in the array.
*/
let strSplit = "Mayur Gaikwad";
let result = strSplit.split(" ");
console.log(result)

// split by using limit parameter
/*  The split() method in JavaScript is not an array method;
it is a string method. It splits a string into an array of substrings
based on a specified delimiter. This method is particularly useful
when you want to break a string into smaller pieces or convert it into an array.
If seperator is not found then the entire string is returned in an array
*/
let str1Split = "Mayur, Anil , Prasad , Pushpak";
let results = str1Split.split(" ",2). // 2 indicates max 2 splits to be performed 
// any text above 2 will not be included in an array
console.log(results)

// Example 
// how many words are there in a sentence
let words = "Hi i am mayur gaikwad"
let count = words.split(" ").length;
console.log(count)

// Getting the extension of the file 
let ext = "document.pdf"
let getExt = ext.split(".").pop();
console.log(getExt) // output is pdf
console.log(ext)
