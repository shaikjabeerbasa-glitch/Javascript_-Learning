const marvel = ["thor","Ironman","Spiderman"];
const dc =["batman","Flashman","groot"];

marvelarvel.push(dc);
console.log(marvel);
console.log(dc);

const allHeros = marvel.concat(dc);
console.log(allHeros);

const allNewHeros = [...marvel,...dc];
console.log(allNewHeros)
const allArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArray = allArray.flat(Infinity)
console.log(realArray)

console.log(Array.isArray("Jabeer"));
console.log(Array.from("Jabeer"));
console.log(Array.from({name:"Jabeer"}));

let num1 =100;
let num2 =200;
let num3 =300;
console.log(Array.of(num1,num2,num3));
