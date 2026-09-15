const user ={
    username: "jabeer",
    price:999,

    greeting: function(){
        console.log(`${this.username},welcome to our website`);
        console.log(this);
    }
} //this is keyword used to refers to the object 
// that is currently calling or executing the function.
//when we console this in a function it will provide 
// all varables in that particular object and function and its name
// ex:{ username: 'jabeer', price: 999, greeting: [Function: greeting] }
user.greeting()
user.username ="shaik";
user.greeting()
console.log(this); 
//{}  when we console this it returns empty object as node is providing it 
// but we console it web it will give you a window


 /*function coffee(){
   console.log(this); 
}
coffee() 

//It gives some gibbarish values*/

function coffee(){
    let username="jabeer"
   console.log(this.username); 
}
coffee() 
//undefined --> this will give its value as undefined 
// when it is used in a function.

// Arrow Function

// Basic arrow Function
// const Addition = (num1,num2) =>{
// return num1+num2
// }
// console.log(Addition(5,3)) //8
//const Addition = (num1,num2) => num1+num2
//console.log(Addition(5,3)) //8

const Addition = (num1,num2) => (num1+num2)
console.log(Addition(5,3)) //8
