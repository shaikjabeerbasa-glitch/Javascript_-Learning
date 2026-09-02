let score = "33abc";
//console.log(typeof score); 
//console.log(typeof(score)); 

let valueInNumber = Number(score); 
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);
//33==>33
//33abc==>NaN
//Jabeer==>NaN
//true ==>1 false==>0
//null==>0 undefined==>NaN
// NaN ==> Not a Number. It is a special number value that represents an undefined or unrepresentable value. 

let isLoggedIn ="Jabeer";
//console.log(typeof (isLoggedIn)); 
let ValueInBoolean = Boolean(isLoggedIn);
//console.log(typeof(ValueInBoolean)); 
//console.log(ValueInBoolean); 
//1==>true 0==>false 
// false "Jabeer"==>true 
// null==>false undefined==>false

let someNumber = 33;
//console.log(typeof(someNumber));
let stringNumber= String(someNumber);
//console.log(typeof(stringNumber));
//console.log(stringNumber);

// Operations //

let value = 3;
let negValue = -value;
//console.log(negValue);

let str1 = "Hello";
let str2 = "Jabeer";
let str3 = str1 + " " + str2;
//console.log(str3);
//console.log(1+2); //3
//console.log("1"+2); //12
//console.log("1"+2+3); //123
//console.log(1+2+"3");//33==> 1+2=3==>3+"3"=33
//console.log(true) ==> true
//console.log(+true) ==> 1
//console.log(true+)==>Error 
//console.log(+false)==> 0
//console.log(false+)==>Error
//console.log(+"") ==>0
//console.log(undefined)==>undefined
//console.log(+undefined)==>NaN
//Pre fix and Postfix Increment and Decrement Operators//
let num1 = 3;
let num2 = num1++;
//console.log("num1 is", num1, "num2 is", num2); //num1 is 4 num2 is 3
let num3 = 2;
let num4 = num3--;
//console.log("num3 is", num3, "num4 is", num4); //num3 is 1 num4 is 2
let x = 5;
let y = ++x;
//console.log("x is", x, "y is", y); x is 6 y is 6
let a = 4;
let b = --a;
//console.log("a is", a, "b is", b); //a is 3 b is 3    




