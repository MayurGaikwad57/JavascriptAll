let a = 500  // global definition of a is provided which can be accessed inside local scope also 
var c = 100  // This value of global var will not be printed because it is defined in local scope 

/*  IMPORTANT NOTE -> avoid using var use instead let and const to avoid scope issues */
// Block Scope
if(true) {
    let a = 20;
    const b = 100;
    var c = 300;
  console.log("Inner is :",a);  // This will print the value 20 which is local declaration of that variable a
    // Note -> variables declared inside local scope should and are not accessible outside this scope 
}
console.log(a) // We have got error beacuse we trying to access this varaible outside its scope 
// variable a has no global scope declaration 
// conosle.log(b)   // Similarly we will get this for b also 
console.log(c)   // This value is printed because of problems with var 
 

/* THERE IA ALSO DIFFERENCE BETWEEN CORE SCOPE - (SCOPE INSIDE OUR CONSOLE IN WEB BROWSER AND OUR CODE ENVIRONVEMENT IN NODE ) */