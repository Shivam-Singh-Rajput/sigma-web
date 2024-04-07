console.log("I am Shivam")

/* when we write a modern javascript code then we should always
use "let" variable */
let a = 5;
let b = 10;
var c = "Shivam Singh Rajput" /*-->var is a globally scoped datatype */
console.log(a + b + 15);

/* if we want to know about variable datatype then we have a 
   one type of comand "console.log(typeof a, typeof b, typeof c)"*/
console.log(typeof a, typeof b, typeof c)

var _a = 55;  //it is valid
//    var 55a = "Ram" -->It is not valid

// const a1 = 4; -->This is not allowed because of we can not change
// a1 = a1 + 1;     the value of 'constant'

{
    let a = 22;
    console.log(a)
}
console.log(a) /*--> It is not print the value of let a beause
let is a block element that's why it is execute the value of block let a */

let o ={
"name": "Shivam Singh",
"Job code": 55602,
"is_Handsome": true
}
console.log(o)
// if we want to change or add something then we can do this
o.salary = "100crores"
console.log(o)

o.salary = "500crores"
console.log(0)
console.log(o["is_Handsome"]); //when we use square bracket than we will must be uses semicolumn(;) 