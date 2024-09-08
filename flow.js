// flow control in javscsript 
// ie instead of all statemnets getting executed in a code i will prefer execution of the portion that i want to execute 
// if user is logging in i want only login code to get executed in that manner 


// const isLoggedIn = true
// if(isLoggedIn) {
//     console.log("Hello User Logged In ")
// }

// if( 2 == "2" ) {
//     console.log("True") // get executed as in js (==) checks left and right hand side expression without checking their types 
//     // for comapring and type checking we have (===)
// }
// This above code will get executed 


// if(2 === " 2 ") {
//     console.log("Executed") //not get executed as number and string are of different types
// }

// if(2!=3) {
//     console.log(" True")
// }

// if(2>=3 ) {
//     console.log("True ") // condition is false hence we didnt enter inside a loop 
// }

// const temprature = 25
// if(temprature <= 25) {
//     console.log(" Yes is true")
// }  else {
// console.log(" It is not true")
// }

// const score = 200
// if(score > 100) {
//    let userPower = " Run "
//    console.log(`The User Power is ${userPower}`)
// }
// console.log(`user Power is ${userPower}`) // this will give us error beacuse the variable userPower is inside block scope and is accessible only inside that scope 


// const balance = 1000 
// if(balance > 500) console.log("Balance is Huge"), console.log("Implicit use")
// The above of defining is bad dont use this in Industry 


const isLoggedIn = true
const debitCard = true 

const loggedFromGoogle =  true
const loggedFromEmail = false
const loggedFromLinkedin = false 

if(isLoggedIn && debitCard) {
   // && represents (and) condition works if both are true
    console.log("Can Purchase Course")
}

if(loggedFromEmail || loggedFromGoogle || loggedFromLinkedin) {
    // || represents even  or condition even if any one condition is true it will execute 
    console.log(" User Logged In Succesfully ")
}


 