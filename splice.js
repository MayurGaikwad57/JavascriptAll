let employees = [
    { id: 101, name: "John Doe", department: "IT" },
    { id: 102, name: "Jane Smith", department: "Finance" },
    { id: 103, name: "Alice Johnson", department: "HR" }
];

// Remove employee with id 102
const removeEmp = employees.findIndex(item=>item.id===102);
employees.splice(removeEmp,1);
console.log(employees)


let products = [
    { id: 201, name: "Laptop", price: 1000 },
    { id: 202, name: "Smartphone", price: 800 }
];

// Insert a new product at index 1

const product = {id:203,name : "insurance",proce:500};
products.splice(1,0,product)
console.log(products)

let users = [
    { id: 301, name: "Mike", role: "User" },
    { id: 302, name: "Sarah", role: "User" }
];

// Update user role to Admin for user with id 301
const roleIndex = users.findIndex(ind=>ind.id===301);
users.splice(roleIndex,1,{...users[roleIndex],role:"Admin"})

console.log(users)

let tasks = [
    { id: 101, task: "Design UI", priority: 1 },
    { id: 102, task: "Develop Backend", priority: 2 },
    { id: 103, task: "Write API Documentation", priority: 3 },
    { id: 104, task: "Testing", priority: 4 }
];

function shuffleElements(arr,fromIndex,toIndex) {
    if (fromIndex < 0 || toIndex < 0 || fromIndex >= arr.length || toIndex >= arr.length) {
        console.log("Invalid indexes");
        return;
    }
  let changeElement = arr.splice(fromIndex,1)[0];
  console.log("Stored Element is ",changeElement)
   arr.splice(toIndex,0,changeElement);
  
}

shuffleElements(tasks,2,3)
console.log(tasks)



let cart = [
    { productId: 201, name: "Laptop", price: 1000 },
    { productId: 202, name: "Smartphone", price: 800 },
    { productId: 203, name: "Headphones", price: 200 },
    { productId: 204, name: "Smartwatch", price: 300 }
];


function batchDeletion(cartArray,batch){
//    batch.forEach((val)=>{
//    const getIndex = cartArray.findIndex(id => id.productId === val);
//    console.log(getIndex)
//     if(getIndex !== -1) {
//         cartArray.splice(getIndex,1)
//     }
//    })

// approach 2 
return cartArray.filter(item=>!batch.includes(item.productId));
}

del = batchDeletion(cart,[202,203])
console.log(del)

let orders = [
    { id: 601, customer: "John" },
    { id: 602, customer: "Emma" },
    { id: 603, customer: "Sophia" },
    { id: 604, customer: "Oliver" },
    { id: 605, customer: "Liam" }
];

let agents = ["Agent A", "Agent B", "Agent C"];

function mapDeliveryAgents(orders,agents){
   const assignment = {};
   agents.forEach(ass=>assignment[ass] = []);
   while(orders.length>0) {
     for (const agent of agents) {
        if(orders.length>0) {
           assignment[agent].push(...orders.splice(0,2))
        }
     }
   }
  return assignment
}

console.log(mapDeliveryAgents(orders,agents))



let ordersMap = [
    { id: 601, customer: "John" },
    { id: 602, customer: "Emma" },
    { id: 603, customer: "Sophia" },
    { id: 604, customer: "Oliver" },
    { id: 605, customer: "Liam" }
];

let agentsMap = ["Agent A", "Agent B", "Agent C","Agent D"];
// dynamic mapping of orders based on available agents 

function assignOrdersDynamically(ordersMap,agentsMap,orderReq){
 const assignment = {};
 agentsMap.forEach(add=>assignment[add]=[])
 let agentIndex = 0;
 while(ordersMap.length>0) {
    let agent = agentsMap[agentIndex];
    if(assignment[agent].length < orderReq) {
        // assignment[agent].push(ordersMap.shift());
        let [firstOrder, ...remOrders] = ordersMap;
        assignment[agent].push(firstOrder);
        ordersMap = remOrders;
    }
    agentIndex = (agentIndex + 1) % agentsMap.length;
 }
 return assignment;
}


let result = assignOrdersDynamically(ordersMap, agentsMap, 2);
console.log(result);




