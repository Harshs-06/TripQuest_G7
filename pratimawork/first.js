console.log('this is first JS code ')
setTimeout(()=>{
console.log('this is second JS code ')
},5000)
console.log('this is think JS code ')

let x=5;
console.log(x)
let a='Hiii';
console.log(a)
const b=10;
console.log(b)
//var global variable let local variable
// we can declare one variable two time or redeclare if we use var 

let x=10;
let y='10';
console.log(x==y)
//double equal to check value of a and y  ->True
// triple equal check value and datatype both   ->False



//       -----< FUNCTION >-----
function temp(){
    console.log('hello world')
}
temp();

//  const div = function(){
  //  console.log('hello world!! this is a div')
// }

//arrow func
const div = () => {
    console.log('First')
}

// hoisting : phle func ko call krr sakte h declaration se phle

function div(x){
    console.log(x)
} 
div(1,2,3,4,5);



function div(10){
    console.log(x)
} 
div(100);  // 100 

//rest : multiple arrgument

function parent(callback){
    
    console.log('this is a parent')
    callback();
}
function child(){
    console.log('this is a child')

}
parent(child);



// Always 'use strict';


let person1 = {
    name:" john",
    age:30,
    gender:"Male"
}
let person2 = {
    name:"Jack",
    age:27,
    gender:"Male"
}
console.log(person1.name)
console.log(person1.age)

console.log(person1['name'])
for(let i in person1){
    console.log(person1[i])
}




let temp = 10;
let div = temp;
div = 100;
console.log(div)
console.log(temp)



