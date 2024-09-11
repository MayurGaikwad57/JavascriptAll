// For loop in Javscript
// for(let i = 0; i< 10;i++){
//   const element = i;
//   console.log(element)
// }

// for(let i = 0 ; i< 10; i++) {
//     const element = i ;
//     if(element == 5) {
//         console.log(" 5 is the best Number")
//     }
//     console.log(element)
// }

// for(let i =1 ; i< 10 ; i++) {
//     console.log(`Outer Loop is ${i}`)
//     for(let j = 0 ; j<= 10 ; j++) {
//      console.log( i+ '*' +j +" = " +i*j) // using + actually concatenates all parts of output inside a single string 
//      // console.log( i, '*' ,j ," = " , i*j)  // globally used provides spacing making ouput more readable 
//     }
// }

// accesing array elements using for loop 
// const Array = ["Mayur","Amit","Prasad"]

// for(let i = 0 ; i< Array.length;i++) {
//     const element = Array[i];
//     console.log(element)
// }

// Break and Continue keyword in Javascript 

// for(let i = 0; i<=10 ; i++) {
//     const element = i
//     if(element == 5) {
//       console.log(" 5 Detected ")
//       break; // The Execution stops here and for loop is terminated
//     }
//     console.log(`The value is ${i}`)
// }

for(let i = 0; i<=10 ; i++) {
    const element = i
    if(element == 5) {
    //   console.log(" 5 Detected ")
      continue; //continue key word is used to skip the current iteration of the loop so all the code written after continue statement will be ignored for that particular iteartion 
    }
    console.log(`The value is ${i}`) // console will not print for 5 as the continue keyword is used and remaining values are printed 

  /*   Output of above code 
  The value is 0
The value is 1
The value is 2
The value is 3
The value is 4
The value is 6   // you can see value 5 is skipped here in output
The value is 7
The value is 8
The value is 9
The value is 10 */
}