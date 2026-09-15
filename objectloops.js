let myuser={
    user:'Jabeer',
    userid:'jab1234',
    age:26

}
for (const key in myuser){
    console.log(`${key} :- ${myuser[key]}`);
}

const arr=["java","js","py","c++"]
for(const key in arr){

console.log(`${key} is ${arr[key]}`)
}


// const map =new Map()
// map.set('In', "India")
// map.set('UK', "united kingdom")
// map.set('Fr', "France")
//console.log(map);
// for(const key in map){
//     console.log(key);
// }
// //maps are not ittratable