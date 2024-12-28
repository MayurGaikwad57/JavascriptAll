function createUser(name,price) {
    this.name = name
    this.price = price 
}
createUser.prototype.increment = function() {
    this.price;
    console.log(this.price)
}

const user1 = new createUser("Mayur",50)
console.log(user1)
user1.increment();

/* 
What does the new keyword do?
The new keyword is used to create an instance of an object from a constructor function. Here's the breakdown of what happens when you use the new keyword:

Create an empty object: A new, empty object is created.
Set the prototype: The newly created object's __proto__ (or prototype) is set to the constructor function's prototype.
Bind this: The this inside the constructor function refers to the newly created object, so properties and methods are added to it.
Return the object: By default, the new object is returned from the constructor function unless you explicitly return another object.
*/


/*  With Respect to our Code
Step 1: Create an empty object: When new createUser("Mayur", 50) is called, JavaScript creates a new empty object {}.
Step 2: Set the prototype: This empty object’s __proto__ (or prototype) is set to createUser.prototype, so it has access to methods defined on createUser.prototype (in this case, the increment method).
Step 3: Bind this: Inside the createUser constructor function, this is bound to the new object, so the properties name and price are added to the new object.
Step 4: Return the object: The new object is returned, and user1 now refers to this object with the properties name and price, as well as the increment method from the prototype.
*/

/* General Theory
Prototype Chain and Inheritance
The prototype chain in JavaScript refers to the chain of objects that are linked together,
where each object has access to properties and methods defined in its prototype.

In your example:

user1's prototype is createUser.prototype.
createUser.prototype is linked to Object.prototype (the prototype of all JavaScript objects).
Object.prototype has properties like toString() and hasOwnProperty().

Object.prototype: All objects (including instances created via constructors like createUser) ultimately inherit from Object.prototype.
This gives all objects the ability to use methods like toString(), hasOwnProperty(), etc.
However, Object.prototype has no prototype, which means its prototype is null.
This makes Object.prototype the root of all objects, and its parent is null (the end of the prototype chain).
*/