// Concept of getter and setter in javascript 
/* Getter and Setter is primrialy used when we dont want a user to access 
the property of object or to hide a implementation and display different info
*/
class user{
    constructor(email,password) {
        this.email = email;
        this.password = password;
/* NOTE--> Always remember when getter and setter is used the constructor doesn't
assign values which are passed but the setter will set the value of property
and when user will try to access that property whatever value of property is present
inside getter that only user will be able to see or get that value only 
     */
    }
   get email() {
      return `${this._email.toUpperCase()}wrong.com`
   }
   set email(value) {
      this._email = value;
   }
   get password() {
        return `${this._password.toUpperCase()}efghijklqw`
    } 
/*Cannot set property password of #<user> which has only a getter*/
    // get co-exsist with set 
    // you cannot only have get , you should also have set for it 
    // setter is used to set value and getter is used to get value 

    set password(value) {
      this._password = value
    }
    /* 
    C:\Users\ADMIN\Desktop\Javascript\getterSetter.js:13
      this.password = value
     ^RangeError: Maximum call stack size exceeded
       .............Main Cause of Error........................
Error Encountered Beacuse both the constructor and set are trying to set the 
value of password which is why we are getting this error as there will be race
condition 
    */
/*      Solution               
1) To avoid these issue first change the nam eof the property that you are 
trying to set using setter function 
2) most followed method can be give a underScore(_) to that property
name in your setter 
3) Now in getter when the object is trying to access that method 
use same underscore(_) there also which ensures consistency in both 
setter and getter method 

*/
}
const base = new user("best1@example.com","abcd")
console.log(base.password) 
console.log(base.email)
// base.password() will throw error as it is not a function 
// getter and setter are set on property not on function 