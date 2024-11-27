// Static keyword in Javascript 
// Static keyword is used when we want to restrict any method from being accessed
class User {
    constructor(name,email,age) {
        this.name = name
        this.email = email
        this.age = age
    }
   static logMe(){
        return this.name;
    }
}

const obj1 = new User("Mayur","best@example.com",15)
// console.log(obj1.logMe())// method logMe() cannot be accessed as static keyword is being used

                     /*.......... IMP NOTE...............*/
// when used keyword static in parent for any method even the child class or any other class which is inheriting
// from this parent class will not be able to access the method 
// so while inheriting also logMe() cannot be accessed due to static keyword

class slave extends User {
    constructor(email,name) {
        super(name);
        this.email = email;
    }
}
const obj2 = new slave("bestExample@gmail.com","John Cena")
console.log(obj2.logMe())


// OTHER IMPORTANT NOTE ABOUT SUPERKEYWORD // 
/* 
1) In JavaScript, subclasses cannot access this before super() is called because
the base class's constructor hasn't been executed yet.
Explanation of Changes
super(name):
This calls the constructor of the parent User class, passing the name parameter. 
The User class then initializes its properties (this.name).
Order of super() and this:
You cannot use this in a subclass until super() has been called because this depends
on the parent class's constructor being executed first.

*/