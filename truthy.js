const email =  ""

if(email) {
    // Here we have given simply email so we are assuimg that email is true 
    // it is called as truthy value a value which assumed to be true 
    console.log("email is true")
}

const version = [] 
if(version.length === 0) {
    console.log("Version Exists")
}

const obj = {}

if(Object.keys(obj).length===0) {
   console.log(" Value is truthy")
}

// Falsy Values
// 0, -0, "", false,NaN,undefined,BigInt 0n,null
// "" ->it is a string with no value in it 

//truthy values 
// [],{}," 0 "," ",'false',function(){}
// " " -> It is a string with value in it and that value is space 

