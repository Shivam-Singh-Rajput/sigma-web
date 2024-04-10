let a = [1,2,3,4,5,6];
const s = (a, b)=>{
    return (a+b);
}
console.log(a.join(" + ") + (" = " + a.reduce(s)));

const c = [1,2,3,4,5];
// c.splice(2,1,23,24);
console.log(c.splice(2,1,23,24));//it show that what is happening that means 3 is remove from the array list
console.log(c) //This is what we were expect