//console.log(2<1);//false
//console.log(2>1);//true
//console.log(2<=1);//false
//console.log(2>=1);//true
//console.log(2==1);//false
//console.log(2!=1);//true
//console.log(2!==1);//true

//console.log("2">1);//true
//console.log("02">1);//true

//console.log("2"=="2");//true
//console.log("2"===2); //false ==>it checks both value and data type. It is called strict equality operator.

console.log(null==undefined);
 //true null is only equal to undefined and not equal to any other value.
console.log(null===undefined); 
/*false ==> Null and undefined are different data types. 
 Null is an object and undefined is a primitive data type. 
 It is called strict equality operator.*/
console.log(null>0); //false
console.log(null<0); //false
console.log(null>=0); //true
console.log(null<=0); //true
console.log(null==0); //false
/* null value consider is considered as 0
when its comparing with relational operator like <,>,<=,>=.
when it comes to == it will consider as not equal as they are different data types. 
It is called loose equality operator.*/
