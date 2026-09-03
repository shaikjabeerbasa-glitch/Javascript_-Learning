const id = 1243;
console.log(id); //1243
const balance =new Number (500); // declaring a varable with specific date type
console.log(balance);//[Number: 500]
console.log(balance.toString()); // 500 ==> date type is changed to string
console.log(balance.toString().length);// 3
console.log(balance.toFixed(2)); //500.00

const num = 142.98675;
console.log(num.toPrecision(4)); //toPrecision(4)==>143.0 toPrecision(3)==>143

const num1 = 1234567876;
console.log(num1.toLocaleString()); // 1,234,567,876 ==> US standard
console.log(num1.toLocaleString('en-IN'));//1,23,45,67,876 ==> Indian Standard

//++++++++++++++++++++   MATHS   +++++++++++++++++++++++++++++++++++++++
/*
console.log(Math.abs(-5)); //5
console.log(Math.round(5.6)); //6
console.log(Math.ceil(4.1));//5
console.log(Math.floor(5.9)); //5
console.log(Math.sqrt(4)); //2
console.log(Math.min(1,2,6,7)); //1
console.log(Math.max(1,2,6,7)); // 7
*/
console.log(Math.random()); // Random value between 0 to 1
console.log(Math.random() + 1) // Random value between 1 to 2
console.log((Math.random()*10)+ 1) // Random value between 1 to 10

const min =10;
const max =20;
console.log((Math.random()*(max-min))+ min );
// Rondom number between 10 to 20 with decimals
console.log(Math.floor((Math.random()*(max-min))+ min )); 
// Rondom number between 10 to 20 without decimals
