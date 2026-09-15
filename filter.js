const lan=["js","ruby","java","python","cpp"]

// const value = lan.forEach((value)=>{

//     console.log(value);
//     return value
// })
// console.log(value);

const mynum =[1,2,3,4,5,6,7,8,9,10]
// const newnums = mynum.filter((num)=>{
//    return  num>4
// })
//  console.log(newnums);
const newnum =[]
// mynum.forEach((value) => {
//     if(value>4){
//     newnum.push(value)
//     }
// });
// console.log(newnum);

const books =[
    {title:'book1',genre:'fiction',publis:2000,edition:2007},
    {title:'book2',genre:'science',publis:1998,edition:2004},
    {title:'book3',genre:'non-fiction',publis:1997,edition:2005},
    {title:'book4',genre:'history',publis:2004,edition:2006},
    {title:'book5',genre:'fiction',publis:2008,edition:2003},
    {title:'book6',genre:'non-fiction',publis:2004,edition:2004},
    {title:'book7',genre:'history',publis:1999,edition:2019},
    {title:'book8',genre:'science',publis:2000,edition:20020},
    {title:'book9',genre:'fiction',publis:2007,edition:2024},
    {title:'book10',genre:'non-fiction',publis:2009,edition:2025},
    {title:'book11',genre:'fiction',publis:1978,edition:2017}
    
]

let userBook = books.filter((bk)=> bk.genre==='history')

userbook =books.filter((bk) =>{
    return bk.publish>=1995 && bk.genere ==="history"
})
console.log(userBook)