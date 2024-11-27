class student {
    constructor(username,email,age) {
        this.username = username;
        this.email = email ;
        this.age = age ;
    }

    Name() {
        return `${this.username}`
    }
}
// Inheritance in Javascript 
class Teacher extends student{
    constructor(username,email,age){
        super(username);
        this.email = email;
        this.age = age ;
    }

    available() {
        return `Are you Available ${this.username}`
    }
}

// const obj1 = new student("Mayur","example1@greatKing.com",15)
// console.log(obj1.Name())

const obj1 = new Teacher("King Kohli","example1@king.com",15)
console.log(obj1.Name())
console.log(obj1.available())

/* IMP THEORY -->1)Teacher Here is our child which is inheriting properties from parent class
student so all the methods and properties of parent student are accesible to child class teacher
2) keyword extends is used followed by class Name which we want to inherit 
3) so Name() property of student class and all its properties are accesible to child class Teacher
4) Vice-Versa is not possible teacher's properties and object won't be available to the parent 
class student


*/ 

const obj2 = new student("Elvish Bhai")
console.log(obj2.Name())
console.log(obj2.available())
/* IMP THOERY --> 1) Child Class can have parent class properties
2) Parent class whereas cannot have child class properties  
Hence obj2 which is actually holding our constructor function student
which in our case is parent doesn't have access to avaiable() method of the 
child class 


*/
// console.log(obj1)
// console.log(obj1.username)