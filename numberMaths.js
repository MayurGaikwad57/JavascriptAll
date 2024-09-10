let lateValue = new Number(400.75);
console.log(lateValue)
console.log(lateValue.toFixed(2)) // Mostly used in E commerce website for providing precison value to client
console.log(lateValue.toPrecision(3)) // must be careful and know excatly what value you will be using upon 


let currencyInd = new Number(103452233)
console.log(currencyInd.toLocaleString('en-IN')) // number converted into indian format
// bydefault it is an us standard 
console.log(currencyInd.toLocaleString()) // us standard

console.log(Math.round(2.6))
console.log(Math.ceil(2.9)) // ceil will always take the smaller value 
console.log(Math.floor(2.9)) // floor is opposite of ceil will take small value 
console.log(Math.abs(-4)) // will give absolute value

console.log(Math.floor(Math.random()*10)+1) 
// Addition of +1 is to make sure we get proper value like 3.23 or 2.43 

   /*.................................................................Formula to for generating Random Number bewteen two given  values ................*/
   console.log("Special Formula")
   let max = 20
   let min = 10
   console.log(Math.floor(Math.random()*(max-min+1)))  // special formula to be remembered