const mynum =[1,2,3]

// const sumnum = mynum.reduce(function(acc,curval){
//     console.log(`acc:${acc} and ${curval}`)
//     return acc +curval
// },0)
// console.log(sumnum);

const sumnum = mynum.reduce((acc,cuval)=> acc+cuval,0)
console.log(sumnum);

const cart =[
    {
        iteamName: "js course",
        price:999
    },
    {
        iteamName: "data science",
        price:5999
    },
    {
        iteamName: "web development",
        price:2999
    },
    {
        iteamName: "full stack devolper",
        price:3999
    },
    {
        iteamName: "mobile app developer",
        price:6999
    },
    {
        iteamName: "i-phone",
        price:4999
    }
]
const totalprice = cart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice);
