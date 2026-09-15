const lan =["Telugu","Hindi","English","Tamil"]

// lan.forEach(function(element){
//     console.log(element);
// });
// lan.forEach((element)=>{
//  console.log(element);
// })
// function printMe(value){
//     console.log(value);
// }

// lan.forEach(printMe)

// lan.forEach((item ,index, arr)=>{
//     console.log(item ,index, arr);
    
// })

const mycode=[
    {
      languageName:"Javascript",
      filename:"Js"  
    },
    {
      languageName:"Java",
      filename:"Java"  
    },
    {
      languageName:"React",
      filename:"React.js"  
    },
    {
      languageName:"python",
      filename:"py"  
    }
]

mycode.forEach(element => {
    console.log(`languageName is ${element.languageName},and file name is
        ${element.filename}`);
    
    
});