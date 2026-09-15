//for of

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    console.log(num);
}
const greeting = "Hello World";

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}
 
const map =new Map()
map.set('In', "India")
map.set('UK', "united kingdom")
map.set('Fr', "France")
//console.log(map);
for(const [key,value] of map){
    console.log(key,":-",value);
}

// const mygames ={
    // 'game1':'GTA',
    // 'game2':'candycrush'

// }
//for(const [key,value]of mygames){
  //  console.log(key,":-",value);
// }

