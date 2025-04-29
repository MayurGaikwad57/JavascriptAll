const arr = [10, 20, 30, 40, 50];
let sliceLast = arr.slice(-1);
console.log(sliceLast)
// get last 2 elements form array 
let removeLast = arr.slice(-2)
console.log(removeLast)
// Slice Note -> If start or end is negative, it's treated as array.length + value.
// remove the first and last element from an array 
let newArray = arr.slice(1,arr.length-1);
console.log(newArray)

const numbers = [5, 10, 15, 20, 25, 30];
function getLastElements(arr,n) {
return arr.slice(-n);
}
console.log(getLastElements(numbers, 3));
