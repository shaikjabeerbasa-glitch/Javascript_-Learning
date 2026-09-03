// Destructuring 

const course ={
    coursename:"Js in Hindi ",
    price: "999",
    courseInstructor: "Hitesh"
}

console.log(course);
const {courseInstructor:lecturer} = course;
console.log(lecturer);

/*const navbar= ({comapany}) =>{

}
navbar(company="Hitesh")
*/
//({comapany}) ==> used generally to deconstruct diectly.

/*{
    name:"Jabeer",
    courcename: "js in Hindi",
    price: "free"
} ==> declaration in Json 
 */



//https://randomuser.me/ ==> to get some random json format of user
//https://randomuser.me/api/ ==> API url 
//https://jsonformatter.org/ ==> to understand and fortmat json of a user