const AccountID = "123456"
var AccountName = "Jabeer Basha"
//var is not recommended to use in modern because issue with bolck and function scope. 

let city = "Hyderabad"
state = "Telangana"
//AccountID is a constant variable and cannot be reassigned.
//AccountID = "654321"
city = "Bangalore"
AccountName = "Shaik Jabeer Basha"
let Email; /*Email is decalred but value is not assigned to it. 
It can be assigned later.It gives its value as undefined when printed in console.
let city = "Pune"
City is already declared and can be reassigned but cannot be redeclared in the same scope.
*/
Email = "jabeer9989@gamil.com"
console.log("Account ID:", AccountID);
console.log("Account Name:", AccountName);
console.log("City:", city);
console.log("State:", state);
console.log("Email:", Email);
console.table([AccountID,AccountName, city, state, Email]);
