// Date  in Javascript 
// let myDate = new Date()
// console.log(myDate) // date is usually represented in milliseconds in Javascript
// console.log("Trying Different Javascript Methods")
// console.log(myDate.toString())
// // Output : Wed Sep 11 2024 11:16:20 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())
// Output : Wed Sep 11 2024  clear and more consice than toString()
// console.log(myDate.toISOString())
// // Output : 2024-09-11T05:48:19.286Z
// console.log(myDate.toJSON())
// // Output : 2024-09-11T05:49:06.437Z
// console.log(myDate.toLocaleDateString())
// // Output : 9/11/2024
// console.log(myDate.toLocaleString())
// // Output : 9/11/2024, 11:21:14 AM

// console.log(myDate.toLocaleTimeString())
// // Output : 11:22:03 AM

// console.log(myDate.toTimeString())
// // 11:24:51 GMT+0530 (India Standard Time)

// console.log(typeof(myDate))
// // Date is an object in Js 

let myNewCreatedDate = new Date(2022,0,24)
// If you write in a single digit you have to mention dates from 0 (0 is january) 
console.log(myNewCreatedDate.toDateString()) 
// Output : Mon Jan 24 2022

let advanceDatesPrefix = new Date(2023,0,21,5,23,0)
console.log(advanceDatesPrefix.toLocaleString());
// Output : 1/21/2023, 5:23:00 AM

let bringDate = new Date("2024-01-23") // yyyy-mm-dd not followed in india
// If you mention in a string then you have to mention dates from 1 and not 0
console.log(bringDate.toLocaleDateString())

let indianDateFormat = new Date("01-13-2024")  //mm-dd-yyyy
console.log(indianDateFormat.toLocaleString())

//.................................TimeStamps in Javascript..............................//
/* Usage -> used for designing quizzes,polls and hotelBookings where you need to compare timestamps of two different users */
let myDateTimestamp = new Date("02-15-2023")
let myNewTimestamp = Date.now()
console.log(myNewTimestamp)  // TimeStamp in milliseconds
console.log(myDateTimestamp.getTime())
// getTime() will give you date in milliseconds from 1 January 1970 
/* Note -> 1) Date.now() is anothere way of creating date object instead of using new 
 2)  myNewTimestamp is the timeStamp of the current date
 3) myDateTimestamp is the dateObject that i have created for date 02-15-2023 and 
   using getTime() we get date from 1 jan 1970 
*/

const myNumber = new Number(2000000);
console.log(myNumber.toLocaleString())
console.log(myNumber.toLocaleString('en-In'))