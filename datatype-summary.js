//Primitive Data Types
// 7 types: string, number, boolean, null(empty), undefined, symbol(unique), bigint(big values)

/*JavaScript is a dynamically typed language.
 Because data type will automatically assigned at the time of compilation or code execution.
 */
const Name = "Jabeer Basha" //String data type
const age = 24 //Number ==> data type range of number is -2^53 to 2^53
const isLoggedIn = true //Boolean ==> true or false
const city = null //Null ==> empty value standalone value
let state; //Undefined ==> variable is declared but value is not assigned to it.
const Id = Symbol('id'); //symbol ==> unique and immutable data type
const Id1 = Symbol('id'); 
console.log(Id === Id1); //false 
/*==> symbol is unique and immutable data type. It cannot be changed once created.*/
const bigNumber = 1234567890123456789012345678901234567890n; 
//BigInt ==> used to store large numbers beyond the range of number data type

//BigInt ==> used to store large numbers beyond the range of number data type

console.log(typeof Name); //string
console.log(typeof age); //number
console.log(typeof isLoggedIn);//boolean
console.log(typeof city);//object
console.log(typeof state)//undefined
console.log(typeof Id);//symbol
console.log(typeof Id1);//symbol
console.log(typeof bigNumber)//bigint

console.table([
    { Variable: "Name", Value: Name, Type: typeof Name },
    { Variable: "age", Value: age, Type: typeof age },
    { Variable: "isLoggedIn", Value: isLoggedIn, Type: typeof isLoggedIn },
    { Variable: "city", Value: city, Type: typeof city },
    { Variable: "Id", Value: Id, Type: typeof Id },
    { Variable: "Id1", Value: Id1, Type: typeof Id1 },
    { Variable: "bigNumber", Value: bigNumber, Type: typeof bigNumber }
]);
/*┌─────────┬──────────────┬───────────────────────────────────────────┬───────────┐
│ (index) │ Variable     │ Value                                     │ Type      │
├─────────┼──────────────┼───────────────────────────────────────────┼───────────┤
│ 0       │ 'Name'       │ 'Jabeer Basha'                            │ 'string'  │
│ 1       │ 'age'        │ 24                                        │ 'number'  │
│ 2       │ 'isLoggedIn' │ true                                      │ 'boolean' │
│ 3       │ 'city'       │ null                                      │ 'object'  │
│ 4       │ 'Id'         │ Symbol(id)                                │ 'symbol'  │
│ 5       │ 'Id1'        │ Symbol(id)                                │ 'symbol'  │
│ 6       │ 'bigNumber'  │ 1234567890123456789012345678901234567890n │ 'bigint'  │
└─────────┴──────────────┴───────────────────────────────────────────┴───────────┘*/
/* Reference or Non-Primitive Data Types
Arrays, objects,Functions
*/
const myArray = [1,2,3,4,5]; //Array

console.log(myArray[1]); //2

const myObject = {
    name:"Jabeer Basha", 
    age:24, 
    city:"Bengaluru"
}; //Object
console.log(myObject); //{ name: 'Jabeer Basha', age: 24, city: 'Bengaluru' }
console.log(myObject.name); //Jabeer Basha

const myFunction = function (){ 
    console.log("Hi there! This is Jabeer Basha");
} //Function
myFunction();
