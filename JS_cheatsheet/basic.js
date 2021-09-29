/*const todos=[
    {
        id:1,
        text:'take out trash',
        iscompleted:true
    },
    {
        id:2,
        text:'Meeting with boss',
        iscompleted:true
    },
    {
        id:3,
        text:'Dentist Appointment',
        iscompleted:false
    },
]
*/
/*
const todoCompleted=todos.filter(function(todo){
    return todo.iscompleted===true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);

/*const x=4;
const y =10;

if(x>5 || y>10)
{
   console.log('x is more than 5 or y is more than'); 
}
else if(x>10)
{
    console.log('x is greater than 10');
}
else{
    console.log('x isnt 10 and less than 10');
}
*/
/*
const x=9;
const color =x>10?'red':'blue';

switch(color)
{
    case'red':
    console.log('Color is red');
    break;
    case'blue':
    console.log('Color is blue');
    break;
    default:
    console.log('color isnt blue or red');
}
*/
// FUNCTION:
/*
function addNums(num1=1,num2=2){
    return num1+num2;
}
console.log(addNums(5,5));
*/
//can be written as:
/*
const addNums=(num1,num2) => num1+num2;
console.log(addNums(5,6));
*/
/*todos.forEach((todo)=>console.log(todo));*/

/*
//constructor function:
function Person(firstName,lastName,dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName =function(){
        return `${this.firstName} ${this.lastName}`;
    }
    
}
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName =function(){
    return `${this.firstName} ${this.lastName}`;
}
*/

//Class:
class Person {
    constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    getFullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}


//Instantiate Object:
const person1= new Person('John', 'Doe', '8-10-1987');
const person2= new Person('Mary', 'Smith', '7-07-2000');

console.log(person1.getBirthYear());
console.log(person1.getFullName());
