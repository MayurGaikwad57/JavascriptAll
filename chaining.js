// Chaining multiple array methods in Javascript 
// This is possible and done when multiple opeartions needs to be performed
// Case:1 Suppose you have an array and you want to perform 2-3 operations on that array 
// and return that value from array based on certain conditions  

let array = [1,2,3,4,5,6,7,8]
let performOperations = array.map((num)=>num*10)
                                 .map((num) => num + 1)
                                 .filter((num) => num>40)
console.log(performOperations)

/* 1) when the first operation is performed the array is modified 
  [10,20,30,40,50,60,70,80]  
  2) In the 2nd step this opeartion is performed on this array only which is returned by the first map method of array 
  2.1) in 2nd Opeartion we are adding 1 to the array which was returned by the first map method so the after this operation returned array will be 
   [11,21,31,41,51,61,71,81]
  3) now we have 3rd method filter which returns values from array larger than 40 this operation is performed on the array returned by the 2nd map so result will be 
  [41,51,61,71,81]
*/

let arr = [10,20,30,40,50]
let mapping = arr.map((num)=>num*10).map((num)=>num+1).filter((num)=> {
  if(num>140) return num;
  }).reduce((acc,val)=>{
    return acc+val;
  },0)
console.log(mapping)
