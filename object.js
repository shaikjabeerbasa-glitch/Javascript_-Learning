// Objects
//singleton -when we declare objects with constructer then it is called singleton

//object literals

const mysym = Symbol("Key1")
const jsUser ={
    name : "Jabeer",
    "full name":"Shaik Jabeer Basha",
    [mysym]: "mykey1",
    age :26,
    location: "Bengaluru",
    email:"jabeer@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday", "Satursday"]
};
// to declare a symbol in object we need use [] 
// then it is considered as key.
// otherwise it is considered as string.

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mysym]);

jsUser.email ="jabeer@google.com";
//Object.freeze(jsUser)
jsUser.email ="jabeer@microsoft.com";
console.log(jsUser);

jsUser.greeting =function(){
    console.log("Hello Js user");
}
jsUser.greetingOne =function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingOne());

