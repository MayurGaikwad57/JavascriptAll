//function getter setter still present in many code bases as the primary use
// currently to many codebases use class syntax as more readable and understandable
// after introduction of ES6 , but many old code base this can also be seen 

function user(email,password) {
    this.email = email
    this._password = password

    Object.defineProperty(this,"password",{
        get : function() {return this._password.toUpperCase()},
        set : function(value) {this._password = value;}
    })
}

const pretty = new user("gaikwad@king.com","abcd") 
console.log(pretty)
console.log(pretty.password)