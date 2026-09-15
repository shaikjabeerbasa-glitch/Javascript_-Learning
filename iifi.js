//Immediately Invoked Function Expression(IIFE)
//An IIFE is a function that is defined and executed immediately after it is created.

(function user(){
    //user is a named IIFI
    console.log(`Hello user`)
})();

((name)=>{
     console.log(`Hello ${name}`);
})('jabeer')