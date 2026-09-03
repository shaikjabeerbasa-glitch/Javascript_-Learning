let name =" shaik Jabeer Basha  "
let age = 26;
//console.log("My Name is "+ name +"My age is "+ age);==> not recommended to use in this way
console.log(`My Name is ${name} My age is  age ${age}`)
//My Name is  shaik Jabeer Basha  My age is  age 26
let FirstName = new String("Shaik") // Another way of declaring a string
console.log(FirstName[2]); //a
console.log(FirstName.length);//5
console.log(FirstName.toUpperCase());//SHAIk
console.log(FirstName.toLocaleLowerCase());//shaik 
console.log(name.trim()); //shaik Jabeer Basha
console.log(name.charAt(2)); // h
console.log(name.indexOf('J')); //7
let newstring = name.substring(0,7)
console.log(newstring); //shaik J ==> It will provide only 6 characters
let anotherstring = FirstName.slice(-2,5)
console.log(anotherstring); //ik

let url = "//http.shaikJabeer%20Basha.com/"
console.log(url.replace('%20', '-')); ////http.shaikJabeer-Basha.com/
console.log(url.includes('Jabeer'));//true
console.log(url.includes('jabeer'));//false
console.log(name.split(' ')); // [ '', 'shaik', 'Jabeer', 'Basha', '', '' ]






