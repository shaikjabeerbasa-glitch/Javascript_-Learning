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

function SumTwoNumbers(num1, num2){
//let result =num1 +num2
//return result
return num1+num2
}
SumTwoNumbers(3, 5) //8

const result =SumTwoNumbers(3,5)
console.log("Result:",result); //Result undefined.

// inputs are parameters ==>num1,num2
// calling values are arguments ==> 3, 5

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Jabeer"));
//Jabeer just logged in
//console.log(loginUserMessage());
//undefined just logged in
