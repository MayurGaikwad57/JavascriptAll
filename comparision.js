// comparision in javascript 
// console.log(3>2)
// console.log("3"<2)
// Javascript has automatically converted string to number while comparing the value 
// hence while comparing make sure you checek data types in js and then compare

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
/*............!!!!!!!!Biggest Confusion In Javascript!!!!!!!!!!!!!!!!........................*/
// In Javascript operators work differently for equality and comparision 
// console.log(null>0) 
// 1 is comparison of null with 0
// here null acts as number as 0 
// 0> 0 is false 

/*   It is not necessary that it will convert always into 0 sometimes it converts into NaN also 
     so you cannot predict anything regarding it   */

/*  2nd case 
1) There we have an equality check null == 0 
2) here null will not be treated as zero 
3) hence the output is false
*/

/* 
3rd case 
1) null is treated as zero beacuse its comparison 
2) hence 0>=0 is true 
*/

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

/* Undefined It will give you false always  */

/*..........Null or Undefined or any such comparisions having inconsistencies will be always avoided
 In Industry level coding */

/*.....................Strict Check.........................*/
//                  ===   is used for strict type checking
 console.log("2"===2) // It will give false as string and number are not comparable 
console.log("2"==2)  // will give true as here js automatically converts string "2" into number 2
