// All about call in javascript
// call passes the current execution context to the other function 

function addName(Name) {
    this.Name = Name;
    console.log("Called")
}

function setData(Name, email, age) {
    /*
Without call():
When you simply create a new user (without using call()),
the addName() function will execute and set the Name property,
but it will do so in the global context (in non-strict mode) or in the local context
(if in strict mode), which may not be the object you're trying to modify.
...........Related to our Example...............
In this case, the this inside addName() may not refer to the user1 object,
and when addName() finishes execution, the this context is lost. 
Hence, Name might not be set properly on user1, and when you try to log user1,
it may not contain the Name property
*/
    addName.call(this, Name);
    /*   
    When you use call(), you're explicitly passing the current context (this inside setData) to the addName() function,
    ensuring that addName sets the properties on the correct object (in this case, user1).
    ..............Related to example.......................   
    Now, inside addName(), this will correctly refer to user1 (because of call()),
     and the Name property will be set on user1 instead of getting lost in a different context.
    */ 
    this.email = email;
    this.age = age;
}

// To avoid the above issues we have call to pass the current execution 
// context to other function 

const user1 = new setData("Mayur", "example1@dot.com", 20)

console.log(user1)


/* 
The key idea:
Without call(), once addName() executes, the context (this) is discarded,
and its properties don't get attached to the object you want (user1).
Using call() explicitly binds the context of addName() to user1,
preserving the execution context and allowing you to correctly set properties on the object.

So, in summary:

Without call(), the this context inside addName() may not refer to the correct object, and its properties (like Name) might not be set correctly.
With call(), you're explicitly binding this to user1, ensuring the properties are set on the correct object.
*/ 