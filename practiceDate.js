// all about dates in javascript 
const date = new Date();
const convertDate = date.toLocaleDateString();
console.log(convertDate) // 1/20/2025

const newDate = date.getMonth(); // gets the day of the week 
console.log(newDate) // monday - 1 , tuesday -2, wednesday -3 etc
