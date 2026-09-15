//global and block scope

let a =20;
var b=30;
const c=40;
console.log(a);
console.log(b);
console.log(c);

if(true){
    let x =20;
    var y=30;
    const z=40;
    console.log(x);
    console.log(y);
    console.log(z); 
}
//console.log(x);
console.log(y);
//console.log(z);

/*closures is a function that remembers and 
 can access variables from its outer scope even after the outer function 
has finished executing.
*/

function one(){
    let username ="jabeerBasha"
    function two(){
        let age = 35
        console.log(username);
    }
    //console.log(age);
    two()

}
one()

//Closures in if condition

if(true){
    let name="jabeer"
    if(name==="jabeer"){
        let age =26;
        console.log(name + " " + age) //jabeer26
    }
    //console.log(name + age) --> error
}
/*Hoisting is the behavior where JavaScript moves variable and function declarations
to the top of their scope before execution.*/

console.log(addone(4));
function addone(num1){
return num1+1
}
console.log(addone(4));
//console.log(addtwo(7)); 
// we will get an error if we use addtwo function 
// before it is decalred it throws an error as functions value is stored in a variable
const addtwo =function(num2){
return num2+2
}
console.log(addtwo(7));