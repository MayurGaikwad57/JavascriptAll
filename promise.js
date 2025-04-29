// all about promises in js 
// Below is an implementation of promise.all
const newPromise = new Promise((resolve,reject)=>{
 let success = true;
 success ? resolve("resolved First Promise") : reject("Rejected First")
})

const newPromiseTwo = new Promise((resolve,reject)=>{
    let success = false;
    success ? resolve("resolved Second Promise") : reject("Rejected Second")
})

const newPromiseThree = new Promise((resolve,reject)=>{
    let success = true;
    success ? resolve("resolved Third Promise") : reject("Rejected Third")
})

// newPromise.
//           then((res)=>console.log("Promise Resolved Successfully",res))
//           .catch((err)=>console.log("Error Catched Successfully",err))
//           .finally(()=>console.log("Promise Settled")) 
//           // Will run all times even if the promise is rejected or fulfilled 
        
// return newPromise

Promise.all([newPromise,newPromiseTwo,newPromiseThree]).
             then((res)=>console.log("All resolved sucessfully",res))
             .catch((err)=>console.log(err))
             .finally(()=>console.log("Resolved/Rejected All"))
             
//  NOTE --> after promise consumption the output will be based on 
// the way the promises were given in input array not based on time of execution 


// Practical Use Cases
/*   Use it when:
You have multiple independent promises you want to run in parallel.

You want to wait for all of them to complete before continuing.

Example use cases:

Fetching user data, settings, and permissions at the same time.

Loading multiple resources (images, files, etc).

Running parallel computations or validations.  

*/


// Implementing Promise.Race() 

// const promise1 = new Promise((_,reject)=>{
//   setTimeout(()=>reject("Promise 1 Rejected"),1000);
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("Promise 1 resolved"),3000);
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("Promise 1 resolved"),3000);
// })

// Promise.race([promise1,promise2,promise3])
//      .then((result)=>console.log(result)).
//      catch((err)=>console.log(err)).
//      finally(()=>console.log("All Resolved"))

/* Promise.race() takes an array of promises, and returns a single promise that:

Settles (resolves or rejects) as soon as the first promise in the array settles.

Ignores the other promises once the first one finishes.

 Important: It's a race — whichever promise finishes first wins, whether it resolves or rejects.
 The other promises still run in the background, but their results are ignored.
*/


// Promise .allSettled() in js 
const prom1 = new Promise((_,reject)=>{
    setTimeout(()=>reject("Promise 1 Rejected"),1000);
  })

  const prom2 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Promise 2 Resolved"),1000);
  })
  
  const prom3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promise 3 Resolved"),1000);
  })
  

Promise.allSettled([prom1,prom2,prom3]).
                then((result)=> result.forEach((result,index) => {
                    if(result.status ===  'fulfilled') {
                        console.log(`Promise ${index+1} is`,result.value)
                    }
                    else {
                        console.log(`Promise ${index+1} is`,result.reason)
                    }
                }))
                // .catch() is not required as everything is settled here
                
 /*     🔸 Definition:
Promise.allSettled() takes an array of promises and returns a new promise that:

Always resolves after all input promises are settled (i.e., resolved ✅ or rejected ❌).

Returns an array of objects describing the result of each promise:

{ status: "fulfilled", value: ... } if it resolved

{ status: "rejected", reason: ... } if it rejected

🔍 It's useful when you want to wait for all promises, even if some of them fail, and you want to know the outcome of each one.
  Promise.allSettled() is your go-to when:

You want to run many promises together.

You don’t care if some fail, but want to know which did.

You're showing a summary of multiple results (e.g., UI feedback, task lists, logs).
 */        


// Promise .any() in js 
const pro1 = new Promise((_,reject)=>{
    setTimeout(()=>reject("Promise 1 Rejected"),1000);
  })

  const pro2 = new Promise((resolve)=>{
    setTimeout(()=>resolve("Promise 2 Resolved"),1000);
  })
  
  const pro3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promise 3 Resolved"),1000);
  })

Promise.any([pro1,pro2,pro3]).
              then((result)=>{
           console.log("Result is",result)
              })
              .catch(err=>{
                console.log("errr",err)
              })


 /*          Promise.any() takes an array of promises and returns a single promise that:

✅ Resolves as soon as one of the promises fulfills.

❌ Ignores all rejected promises.

❌ Only rejects if all input promises are rejected, and returns an AggregateError.                 
 
 Feature	Promise.any()
Resolves      on	First fulfilled promise
Ignores	      Rejected promises
Rejects         when	All promises are rejected
Result	       The value of first fulfilled
Error	         AggregateError if all rejected
 
 
 
 
 
 
 
 
 */             

