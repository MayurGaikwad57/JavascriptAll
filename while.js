// const Array = ["Amit ","Mayur","Sachin"]
// let i = 0
// while(i<Array.length) {
//     console.log(`${Array[i]}`)
//     i = i+ 1
// }

// const myArray = ["Sunny","Alia","Deepika"] 
// let index = 0
// do {
//     console.log(myArray[index])
//    index = index + 1
// } while(index < myArray.length);


let greetings = "Hello World"

for (const greet of greetings) {
    if(greet === " "){
        continue;
    }
    console.log(`Each Char is ${greet}`)
}

