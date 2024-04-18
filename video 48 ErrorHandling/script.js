let a = prompt("Enter the first number");
let b = prompt("Enter the second number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);
function main(){
    try {
        console.log("Your sum is = ", sum * x);  //it will be try 
    } catch (error) { //inside of "catch" code will run if error occur
        console.log("Error come in code");
    }

    //Finally is use for execution after try catch mainly it is use when we are using function
    //and we want to execute some thing at the end of try catch than we use "finally"
    //"Finally" is a key word which is run after the return value from the code
    finally {
        console.log("This is finally block");
    }
}

let c = main();