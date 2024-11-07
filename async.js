// // Async Javascript 
// function fetchData(callBack){
//    setTimeout(()=>{
//      const data = "Hello Async Js is great";
//      callBack(data);
//    },2000)
// }

// fetchData((result)=>{
// console.log(result);
// })

/*  IMPORTANT THINGS ABOUT SETTIMEOUT() 
Non-blocking behavior: setTimeout() is a fundamental part of how JavaScript handles asynchronous programming.
It allows JavaScript to perform other tasks while waiting for the timeout,
which is crucial for keeping web applications responsive.

Creating Delays or Intervals: setTimeout() is often used to introduce a delay between actions,
such as showing a message or starting a new task after some time.

Handling Asynchronous Tasks: It is useful when you want to handle time-sensitive tasks asynchronously,
like waiting for a server response or animating elements after some delay.


*/
// console.log("I will run 1")

// setTimeout(function(){
//     console.log("I will execute after 2 seconds") // code will get execute after 2 seconds
// },2000)

// console.log("i will run 3") // this will immediately be executed 
// setTimeout() will not block this from getting executed

// order of execution 
// top console i.e I will run 1
// botom console i.e I will run 3 
// and then the timeout will execute i.e I will execute after 2 seconds


// Call back functions with the parameters
function greet(name,message) {
     console.log(` ${name}  ${message}`)
}

setTimeout(greet,2000,"Mayur","You are legend")

