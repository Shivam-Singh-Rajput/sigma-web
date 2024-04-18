// let obj = {
//     a  : 1,
//     b : "Shivam"
// }
// console.log(obj);
// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps : true
// };
// Prototype-->If we have a some property and we want to add this property in object thats property is known as "{Prototype}"
// // rabbit.__proto__ = animal; // Inherit properties from the parent object, in this case 'animal' is the parent of 'rabbit'.

// Classes & OOPM\script.js
class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...")
    }
    eats(){
        console.log("I am eating....")
    }
    jumps(){
        console.log("I am jumping....")
    }
}

class Lion extends Animal{ //Here 'extend' is a keyword which is use extend another class
    constructor(name){
        super(name)       //we call in constructor if we override derive class of constructor
        console.log("Object is created and he is lion....");
    }
    eats(){
        super.eats() //It is run both classes eats function
        console.log("I am eating food....")
    }
}
let a = new Animal('Lion');
console.log(a);

let l = new Lion("shera");
console.log(l)