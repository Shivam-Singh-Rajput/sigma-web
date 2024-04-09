function rrr(name){ 
    console.log("Hello " + name + " wheres you gone");
    console.log("Hello " + name + " what are you doing wright now");
    console.log("Hello " + name + " are you ok");
    console.log("Hello " + name + " you are such a nice man yr");
}

// function is use for doing the muliple repeated work in a single line
// it is reusable 
rrr("Shivam")
rrr("Rohit")

function S(a, b, c = 2){
    //   console.log("The sum of a and b is = " + (a + b));
    return a + b + c
}

// it is not run automatically we will have to give a value like this
// Use the function comes reusability
result1 = S(5,3);
result2 = S(10,10);
result3 = S(5,6,5);
console.log("The sum of thes number is = " + result1,result2,result3)
