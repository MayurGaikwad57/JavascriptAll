// Creation of Objects
const Obj1 = {
    name: "Mayur",
    id: '1',
    isenrolled: true
}
// One way to create Objects
const obj2 = new Object(); // 2nd way to create objects

// console.log(Obj1);
// console.log(obj2); // Both Objects have same return type

const Obj = {
    UserName: {
        fullName: {
            name: "Mayur",
            surname: "Gaikwad"
        }
    }
}

// Accessibility of Objects
// Two possible methods of accsessing used based on needs
// console.log("Object Access Method",Obj["UserName"]["fullName"]["name"]);
// console.log(Obj.UserName.fullName)
// merging or combining two objects

const new1 = { 1: "a", 2: "b" }
const new2 = { 3: "c", 4: "d" }
const new4 = { 3: "e", 5: "f" }
// key if repeated you will get the overridden value of that key 

const new3 = Object.assign(new1, new2, new4);
// console.log(new3);
console.log(Obj1);

console.log(Object.keys(Obj1))  // output keys are returned as array 
console.log(Object.values(Obj1)) //output values has been returned as array
console.log(Obj1.hasOwnProperty('isenrolled'))  // answer is bolean ie true or false
