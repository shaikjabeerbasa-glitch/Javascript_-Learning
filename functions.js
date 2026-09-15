//Functions
function saymyName(){
console.log("J");
console.log("a");
console.log("b");
console.log("e");
console.log("e");
console.log("r");
}

//saymyName()

function SumTwoNumbers(num1, num2){ //num1 and num2 are parameters
let result =num1 +num2
return result
return num1+num2
}
SumTwoNumbers(3, 5) //8 (3,5 are arguments)

const result =SumTwoNumbers(3,5)
console.log("Result:",result); //Result undefined.

// inputs are parameters ==>num1,num2
// calling values are arguments ==> 3, 5

function loginUserMessage(username="sam"){
    if(!username){  //!username is undefined then we use ! with parameter
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Jabeer"));
//Jabeer just logged in
//console.log(loginUserMessage());
//undefined just logged in


//Rest and spread oparators

function calculateCartPrice(val1,val2,...num){
    return num
    
}
console.log(calculateCartPrice(200,300,400,800,1000))

 const user = {
    username:"jabeer Basha",
    price:500

}

function myobject(anyobject){
    console.log("The user is ",anyobject.username,"and the price is",anyobject.price);
    console.log(`The user is ${anyobject.username} and the price is ${anyobject.price}`);
    
}
myobject({ 
    username:"Shaik jabeer Basha",
    price: 999
})

let myarray=[100,200,500,200]

function getSecondValue(getarray){
    console.log(getarray[1])
}

getSecondValue([200,500,5789,3000])