//index={0,1,2,3,4,}-->In array indexing is start from 0
let a = [1,2,3,4,5];
a.push(20); //push function add the element in the last of array and increase the length of array

 console.log(a[2]); //-->It is tell us the indexing of the number
 console.log(a.length);
 console.log(a,typeof a);  // In js alwayse print the type of array is object

// Array is mutable that means we can change any number to string
a[3] = "shivam";
console.log(a.toString());

// a.pop() function is use for return the last element and alter the remain element which is important
let b = [4,5,6,7,8];
b.pop();
console.log(b, "\n" + b.length);

//shift is a function of array which is work as a pop fun but it is remove the first element in the array
b.shift();
console.log(b, "\n" + b.length); 

//unshift is a another type of array function it work as a push but it is push the element first in the array
b.unshift("Ram");
console.log(b, "\n" + b.length);

//'delete' function delete the chisable element but it is not delete element place that means array length 
//remain same but element deleted
delete(b[3]);
console.log(b, "\n" + b.length);

//concate fun merge the given all the variable in one frame 
let a1 = [5,6,7];
let a2 = [7,8,9];
let a3 = [1,2,3];
console.log(a1.concat(a2, a3));

//This method add a element in a array list, first number is start second no is use for
//deletion from the array length and after this all element for add on in array list
let numbers = [1,2,3,4,6];// ye jaha se start karega vhi se remove karega
numbers.splice(0,3,24,23);
console.log(numbers);

const num = [8,5,6,9,4,5];
console.log(num.slice(2));     //(start)
console.log(num.slice(1,3));  //(start, end) it is not excute the last length