// nullish coaelscing operator 
// Mostly used when we make database calls where we have used 10,15 etc after null or undefined in our examples there we actually write complex method for making databse call or fetching some values from databse and if we dont get any values then null or undeined will get so based on that we can do our further work

let val1; 
//   val1 = 5 ?? 15   here 5 will get printed
// val1 = null ?? 10  here 10 will be printed
// val1 = undefined ?? 20 here 20 will get printed
// val1 = null ?? 20 ?? 30  here also 20 will get printed

  console.log(val1)

// Ternary Opeartor 
// syntax condition ? true:false

const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("Price less than 80"): console.log("Price more than 80")