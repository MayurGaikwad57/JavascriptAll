// code should be readable,reusable
// dataTypesin Javacsript
/* 
1)Number => 2 to power 53
2)string => " "
3)boolean => true/flase
4)null = represents empty value meaning the declared varaible is currently empty doesn't hold anyvalue
5)undefined => meaning value not defined
6)Symbol => is used to uniquely identify a component froma group of components,used for uniqueness
6)Object => also a dataType
*/
let id = 1
let name="Mayur"
let val = true
let studentCity; // undefined  will be output

// Note - (Interview Perspective) when we do typecasting and check dataType 
// 1) undefined the type is Undefined only 
// 2) for null the type is object

console.log(typeof id)
console.log(typeof name);
console.log(typeof val)
console.log(typeof studentCity);
console.log(typeof null)

/* 
Datatypes in Javacsript
Number -> for number (2 to power 53)
Bigint -> for bigger integer values
string -> " " (can be enclosed in ('') but standard practice is using (""))
null -> Standalone value and also data type 
undefined -> datatype for values declared but not defined 
symbol -> used mostly when large number of components are used to uniquely identify a component
boolean -> true/false
object 


*/

let age = 18
let king ="Mayur"
let answer = true
let video = null
let keys;

console.log(typeof age);
console.log(typeof null);
console.log(typeof "Mayur");
console.log(typeof keys);
