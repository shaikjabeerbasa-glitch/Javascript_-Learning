//Dates

let myDate =new Date()
/*
console.log(myDate); //2026-09-03T14:00:39.496Z
console.log(myDate.toString()); //Thu Sep 03 2026 19:30:39 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Thu Sep 03 2026
console.log(myDate.toLocaleString()); //9/3/2026, 7:30:39 PM
console.log(myDate.toLocaleDateString());//9/3/2026
console.log(typeof myDate); //Object
*/

//let myCreatedDate = new Date(2020, 0, 25, 5, 3);
//console.log(myCreatedDate.toLocaleString()); //1/25/2020, 5:03:00 AM
//let myCreatedDate = new Date(2020, 0, 25)
//console.log(myCreatedDate); //2020-01-24T18:30:00.000Z

let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString()); //1/14/2023, 5:30:00 AM

let myTimestamp = Date.now()
//console.log(myTimestamp);//1788445065045
//console.log(myCreatedDate.getTime());//1673634600000
//console.log(Math.floor(Date.now()/1000));//1788445065

let newDate =new Date();
//console.log(newDate); //2026-09-03T14:21:13.945Z
//console.log(newDate.getFullYear()); //2026
//console.log(newDate.getMonth()); // 8
//console.log(newDate.getDay());// 4


console.log((newDate.toLocaleString('default',{
    weekday:"long"
}

)));//Thursday.
