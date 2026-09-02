"Use Strict" // treat all JS code as newer version
//alert(3+3) alert doesn't work in node.js but works in browser

console.log(3+3) // this works in node.js and browser

//console.log(3+3) console.log("Hi there! This is Jabeer Basha");

let Name = "Jabeer Basha" //String data type
let age = 24 //Number ==> data type range of number is -2^53 to 2^53
let isloggedIn = true //Boolean ==> true or false
let city = null //Null ==> empty value standalone value
let state; //Undefined ==> variable is declared but value is not assigned to it.
//symbol ==> unique and immutable data type
//BigInt ==> used to store large numbers beyond the range of number data type

console.log("Name:", Name, "Type is :", typeof Name);
console.log("Age:", age, "Type is :", typeof age);
console.log("Is Logged In:", isloggedIn, "Type is :", typeof isloggedIn);
console.log("City:", city, "Type is :", typeof city); 
//typeof null is object but it is not an object. It is a bug in JS.
console.log("State:", state, "Type is ", typeof state);
//typeof undefined is undefined.  It is used to check whether a variable is declared or not.



