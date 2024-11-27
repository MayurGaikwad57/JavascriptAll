class User{
    constructor(username,email,age) {
        this.username = username 
        this.email = email
        this.age = age 
    }

    getName() {
        return `${this.username}`
    }
}

const love = new User("Mayur","gaikwad@gmail.com",12)
console.log(love)
console.log(love.getName())