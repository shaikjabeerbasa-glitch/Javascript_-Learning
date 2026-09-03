// Arrays

let myArr = [0, 1, 2, 3, 4 , 5, 6]

//Array Methods

myArr.push(8);
console.log(myArr);//[0, 1, 2, 3, 4 , 5, 6, 8]
myArr.push(10);
console.log(myArr);//[0, 1, 2, 3, 4 , 5, 6, 8,10]
myArr.pop();
console.log(myArr);//[0, 1, 2, 3, 4 , 5, 6, 8]
myArr.unshift(9)
console.log(myArr);//[9,0, 1, 2, 3, 4 , 5, 6, 8]
myArr.shift(myArr);
console.log(myArr);//[0, 1, 2, 3, 4 , 5, 6, 8]
console.log(myArr.includes(8));
console.log(myArr.indexOf(3));

const newArr = myArr.join();//join will convert arrey in string
console.log(myArr);//[0, 1, 2, 3, 4 , 5, 6]
console.log(newArr);//0, 1, 2, 3, 4 , 5, 6
console.log(typeof newArr);


//slice, splice

console.log("A",myArr); //[0, 1, 2, 3,4, 5, 6]
const myn1 =myArr.slice(1,3) 

console.log(myn1); //[1,2]
console.log("B",myArr); //[0, 1, 2, 3, 4 , 5, 6]

const myn2 =myArr.splice(1,3);
console.log("C",myArr);//[0, 4 , 5, 6]
console.log(myn2);//[1, 2, 3]




