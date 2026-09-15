// truthy value
//"0",[],'false'," " {},function(){}
const UserEmail ="jabeer@mail.com"

if(UserEmail){
    console.log("Got user Email");
    
} else{
    console.log("Don't have user email");
    
}
//falsy value

//false,0,-0,BigInt 0n,"",null,undefined,NaN

let a=[5,8,9]
if(a===0){
    console.log("not an array");

} else{
    console.log("It's an array");
}

let user ={
    name:"jabeer",
}
if(user===0){
    console.log("not an on=bject");

} else{
    console.log("It's an object");
}

//Nullish coalecing operator(??): undefined

let val1;
val1=5??10
val1 = null ?? 10
val1 = undefined ?? 12
val1 =null ?? 10?? 20

console.log(val1);

//Terniary operator

//condition ? true: false

let price = 20

price>=20 ? console.log("less than and equal to 20"): 
console.log("more than 20");




