const user = {
    username:"Mayur",
    Id : " 111 ",
    welcomeMessage:function() {
      console.log(`${this.username} , Welcome to show`);
      console.log(this)
    }

}

// user.welcomeMessage();
// user.username = " Sunny "
// user.welcomeMessage();

// console.log(this)  
// Node Environment 
/* This refers to {} empty object in node environment beacuse in node the global context refers to the node modules ie node actuaaly has a file system inside whuch there are modules encapsulated inside wrapper this is done to avoid any varaibles or functions() conflict inside node and by default this global context refers to module whose global object is {} hence inside node environment we get {}   */

// Inside Browser

/*  in browser thr global context refres to window object hence we see that  */

// function name() {
//  let username = "Hitesh"
//   console.log(this.username); // output here will be undefined, cannot use this
// }
// // name()

// const Func = function virat() {
//   let name = " Jonty Bhai"
//   console.log(this.name);   // In these case the output will be undefined , here this case we cannot use this 
// }
// // Func();

/*  Arrow function in javascript */
const Kid  = () => {
   let  username = "Jonty king "
   console.log(this.username); // this will return undefined
   console.log(this) // this will return {}
}
Kid()

// const Sum = (num1,num2) => {
//   return num1+num2;
// }


// const Sum = (num1,num2) => (num1 + num2) // when use paranthesis there is no need to write return 
// const Sum = (num1,num2) => {return num1+num2}
// When you use curly braces you need to write the return statement 
// Useful in future in react and anguar



const User = (num1,num2) => ({name:"ElvishBhai"})
// When returning an object directly from an arrow function, you need to wrap the object in parentheses.
// Without the parentheses, the curly braces would be interpreted as a block of code instead of an object literal.
console.log(User(10,20));


const client = {
  Id : " 111 ",
  returnId:function() {
    console.log(` Your Id is  ${this.Id} `)
  }
}
client.returnId()