
// IIFE (Immediately Invoked Function)

(function dataBase() {
    // Function with name are known as named IIFE 
    console.log("DB Connected")
}) ();
// You have to give semicolon (;) because IIFE Doesnt know where to stop the context  

((name) => {
    // Arrow function can be called as Unknown IIFE
    // Here we have passed name as paramter to the IIFE 
    console.log(`DB2 Connected ${name}`)
}) ('Mayur')