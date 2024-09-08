let val1 = 10 
let val2 = 20 

function addNum(num1,num2) {
    let total = num1+ num2;
    return total
}
let result1 = addNum(val1 , val2)
let result2 = addNum(25,5)

/* Execution Context In Javascript 
 1) Global Execution Context 
 2) Function Execution Context 
 3) Eval Execution Context - (used in mongoose)

 Whenever a javacript file is created 

 1) Its global execution will set which has this variable this with which we can access the global Execution context for it 
 2) Execution basiccaly has 2 phases
 1)Memory Creation  Phase 
 2) Execution Phase

 for our example above 
 1) Global execution is set which is kept under this variable 
 2) Memory phase where only memory will allocated to our variables
 val1 = undefined
 val2 = undefined
 addnum = definition -(as no values are assigned inside the function ,function only contains the definition)
 result1 = undefined
 result2 = undefined
 3) Execution phase 
 val1 = 10;
 val2 = 20;
addNum ---- > 1) will create its own execution context check below 
<-----------------  **NOTE** ---------------------------------->
ONCE THE WORK OF THE GLOBAL EXECUTION CONTEXT WHICH IS CREATED FOR THE FUNCTION IS DONE THEN IT IS AUTOMATICALLY DELETED 
result - 15 value returned from function 
          
 now on line 7 we are calling a function 
 1) Here anothere execution environment is created it will also have 2 things 
     1.1) New Varaible Environment 
     1.2) Execution Thread (here all our operations are processed and executed)
    here the same 2 important tasks will be done 
    1) memory phase and 2) Execution phase 
    1) Memory phase    2) Execution Phase 
    num1 = undefined,    num1 = 10,
    num2 = undefined,    num2 = 20,
    total = undefined    total = 30

    Now this total value of the funtion will be returned to parent execution context or the Global execution context which is created at the start

    Now there is anothere call to the function for which a new  variable environment is created 
    1)Memory phase 2) Execution phase 
    1)Memory phase      2) execution phase
    num1 = undefined      num1 = 25,
    num2 = undefined      num2 = 5,
    total = undefined     total = 30 

    and same return statemnt will return the function value to the global execution context

 */