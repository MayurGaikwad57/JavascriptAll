console.log(Math.PI)
Math.PI = 5; // Math.PI value is fixed and cannot be changed
console.log(Math.PI)

const mathObj = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(mathObj)

const getUser = {
    name:"Mayur",
    age:14, 
    greeting : function() {
        console.log("Mayur is the Legend")
    }
}
 console.log(Object.getOwnPropertyDescriptor(getUser,"name"))

Object.defineProperty(getUser,"name",{
    // writable : false,
    enumerable : true // when it is set to false you cannot iterate through the name property , true means you can iterate through this property name as define
    // property is set to only name so only that property will get affected
})
console.log(Object.getOwnPropertyDescriptor(getUser,"name"))
for (const [key,value] of Object.entries(getUser)) {
    if(typeof value !== 'function')
    console.log(`${key}: ${value}`);
}