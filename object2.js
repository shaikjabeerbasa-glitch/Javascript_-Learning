// singleton using constructor

//const InstaUser = new Object()
const InstaUser = {}

InstaUser.id ="12345efvg";
InstaUser.name ="Shaik";
InstaUser.isLoggedIn = false ;

console.log(InstaUser);

const regular_user = {
    email: "Shaik@gmail.com",
    fullname:{
        username:{
            firstname :"Shaik",
            middlename : "Jabeer",
            lastname : "Basha"
        }
    }
};

console.log(regular_user.fullname.username.firstname);

const obj1 ={1: "a",2: "b"};
const obj2 = {3: "c", 4: "d"};
//const obj3= {obj1,obj2}; 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign(obj1,obj2);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = Object.assign({},obj1,obj2);
//{}==> we use empty {} to provide a new object as a target
//  by provding other objects as source.
console.log(obj3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj4 = {5: "e", 6: "f"};
const obj5  = Object.assign({},obj1,obj2,obj4);
console.log(obj5);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
const obj6 ={...obj1, ...obj2,...obj4}
console.log(obj6);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users =[
    {
        id: 1,
        email: "j@gamil.com",

    },{
    },
    {
    },
]
users[1].email
console.log(InstaUser);
//{ id: '12345efvg', name: 'Shaik', isLoggedIn: false }
console.log(Object.keys(InstaUser));
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(InstaUser));
//[ '12345efvg', 'Shaik', false ]
console.log(Object.entries(InstaUser));
//[ [ 'id', '12345efvg' ], [ 'name', 'Shaik' ], [ 'isLoggedIn', false ] ]
console.log(InstaUser.hasOwnProperty('isLoggedIn'));
//true
console.log(InstaUser.hasOwnProperty('isLogged'));
//false