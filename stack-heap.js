// stack (premitive )and Heap memory()

let name ="jabeer basha"

//let name2 =name;
//console.log(name2);//jabeer basha
let name2 ="Shaik Jabeer Basha"
console.log(name); //jabeer basha
console.log(name2); //Shaik Jabeer Basha

/*In primitive data types, the memory is allocated in the Stack.
It uses Call by Value. When you assign one variable to another, 
it creates a copy of the original value.
Both variables have separate copies, so when you change the value of one variable, 
the original variable remains unchanged.
*/

let user1 ={
    email :"jabeer@gmail.com",
    age :"26",
    Id :"12345678"
}
let user2 = user1;

//console.log(user1);{ email: 'jabeer@gmail.com', age: '26', Id: '12345678' }
//console.log(user2);{ email: 'jabeer@gmail.com', age: '26', Id: '12345678' }

user2.email ="jabeerbasha@google.com"
console.log(user2.email); //jabeerbasha@google.com
console.log(user1.email); //jabeerbasha@google.com

/* In non-primitive data types, the memory is stored in the Heap.
It uses reference values. When you assign one object to another, 
both variables refer to the same object in memory.
When you change a value in one object, 
the change will also be reflected when accessing the object through the other variable.*/

