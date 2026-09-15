 let score =33;
// console.log(typeof(score));

// let valueinstring = String(score);
// console.log(typeof(valueinstring));
// console.log(valueinstring);

let valueinboolen = Boolean(score);
// console.log(typeof(valueinboolen));
// console.log(valueinboolen);


if(true){
    let a =20;
    var b =30;
    // console.log(a);
    // console.log(b);
    
    
}
// console.log(b);
// console.log(a);
let name ="jabeer124"
console.log(typeof(name));
let valueinnumber = Number(name);
console.log(valueinnumber);
console.log(typeof(valueinnumber));
 let id = Symbol("jabeer143");
 console.log(id);
 console.log(typeof(id));

 let supername = ["spiderman", "superman", "ironman", "groot"]
 console.log(supername);
 console.log(supername[1]);
 supername.push("thor");
console.log(supername);
supername.pop();
console.log(supername);
supername.unshift("thor");
console.log(supername);
supername.shift();
console.log(supername);
console.log(supername.indexOf("spiderman"));

console.log(supername.includes("spiderman"));

let arr1 = ["jabeer","Ankit", "Fazle"];

let newarr = supername.concat(arr1);
console.log(newarr);
let arr2 =  arr1.slice(1,2);
console.log(arr2);
let arr3 = arr1.splice(1,2);
console.log(arr3);


// Array methods, push==> to add a varable to an array
// pop ==> will remove the recently added varible in array
// unshift==> will remove from the begining of an array
//  shift ==>will add a value to the begining of the array
//slice ==>will be used to get a remove particular portion in array without changing an original array.
//splice ==> will be used to get remove or replace elements in array by changing origin array.
 

let num = 179.4
console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(num.toString());
console.log(num.toString().length);

console.log(num.toFixed(2));
console.log(num.toPrecision(5));

let num1 =12345678987;
console.log(num1.toLocaleString());

console.log(num1.toLocaleString("en-In"));

console.log(Math.random());
console.log(Math.random()+1);
console.log((Math.random()*10)+1);
console.log((Math.ceil(Math.random())*10)+1);

let num2 =10;
let num3=20;
console.log((Math.random()*(num3-num2))+num2);
console.log(Math.floor((Math.random()*(num3-num2))+num2));

let greet =function(name){
    console.log("Hi", name)

}
greet("jabeer")

let sum =function(num1,num2){
   return num1+num2
}
sum(10,20)

console.log(sum(10,20));
const key = Symbol("key1")
let user ={
    name: "jabeer",
    full_name: "shaik jabeer basha",
    [key]: "Key1",
    email: "jabeer@node.com",
    isLoggedIn: false,
    location:"Pune"
}
console.log(user);
console.log(user.email);

console.log(user["email"]);
console.log(user["full_name"]);
user.email= "jabeer@bug0.com",
console.log(user["email"]);

user.greeting = function(){
    console.log("Hello user")
}
user.greetingone =function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(user.greeting());
console.log(user.greetingone());


const Facebook_user ={}
Facebook_user.name ="Jabeer";
Facebook_user.id ="Jab1432";
Facebook_user.isLoggedIn = false;

console.log(Facebook_user);

const jsuser ={
    emai:"jabeer@786.com",
    username:{
        full_names:{
            firstname:"shaik",
            lastname:"jabeer"
        }
    }
}
console.log(jsuser.username.full_names.firstname)

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",4:"e"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

console.log(Object.keys(Facebook_user));
console.log(Object.values(Facebook_user));

console.log(Object.entries(Facebook_user));

console.log(Facebook_user.hasOwnProperty("isLoggedIn"));


let {name:username}=Facebook_user;
console.log(username);
 
if(true){
    let x=10;
    var y=20;
    console.log(x);
    console.log(y);
    
}
console.log(y);














