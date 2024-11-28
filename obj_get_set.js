// object getter and setter 
// not present in many code bases but user must have a thorough knowledge about this

const obj = {
    _email : "kingKong@example.com",
    _password : "abcd",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
       this._email = value
    }
}

const chai = Object.create(obj)
console.log(chai.email)