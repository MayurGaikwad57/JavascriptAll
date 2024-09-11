const User = {
    name:"Mayur",
    age:18,
    email:"mayur23@gmail.com",
    isEnrolled:true
}
// Object de structuring

const {isEnrolled:enr} = User
console.log(enr)

// Data when it comes from api may mostly come in two formats 
// 1)-> Object
// 2) ->Array which may contain many objects

// JSON Structure
{
    // Inside json object keys are also string in " " and values are also string 
    // Number , Boolean will not include " "  ie string
    "name":"Mayur",
    "isTrue":true,
    "id":24,
}
//  It is showing error but definitely this way we get data from api