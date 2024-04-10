let arr = [1,2,22,11,12];

// forEach loop which is use for print the value, index and array
arr.forEach((value,index,array)=>{
console.log(value,index,array);
})
    
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element**2);
}

//       Another way for solving the same question through the push method
let array = [5,6,7,8,9];
let newArray = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(element**2);
}
console.log(newArray);

//       Another way for solving the same question through the map
let shiv = [2,3,7,14];
let newshiv = shiv.map((e,index,array)=>{ //In most of the cause we have to need only value
    return e**2;                          //if need index or array then we can also take this
})
console.log(newshiv);

//filter method of loop it use for finding all those value which are greater and 
//smaller than from the given filter value  
let rsm = [5,8,66,44,2,7];
const greaterThanFive = (e) => { //pam operator
    if (e>5){
        return true;
    }
    return false;
}
console.log(rsm.filter(greaterThanFive));

//This is the reduse function it is use for add,subtract, multiplication,etc a all array element 
let S = [5,4,8,7,6];
const red = (a,b)=>{
    return a+b;
}
console.log(S.reduce(red));

// let r = S.reduce((accumulator,currentValue)=>accumulator+currentValue);

// console.log(r);

// The reverse() method reverses the order of the elements in an array.
//The reverse() method overwrites the original array.
let Id = ["Shivam Singh","Roll No 94","house no 53","Pincode 402041"];
console.log(Id.reverse());