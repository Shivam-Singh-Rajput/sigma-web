console.log("What is your age")

let age = 16;
let grace = 3;
console.log(age+grace);

if((grace+age)>18){
    console.log("Oh hey Man you can drive the car")
}
else{
    console.log("Man can not drive the car")
}

// Operator
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age**grace); //it is use for find the squar
console.log(age/grace);  //The division ( / ) operator produces the coefficient/multiplier of its operands where the left operand is the dividend and the right operand is the diviso
console.log(age%grace);  //It is define reminder

//Assignment Operator
console.log("The value of Assignment operator")
let sh = 4;
let ms = 3;

sh *= ms;
console.log(sh);

console.log("if else if conditional statement");
let Q = 14;
if(Q != 14){
    console.log("hey little one");
}
else if(Q == 14){
    console.log("are you kiding");
}
else{
    console.log("both are kid")
}

console.log("turnary operator");
a = 6;
b = 8;
c = a>b ?(a-b): (a+b);
console.log(c);