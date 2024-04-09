let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Shivam Singh",
    role: "Developer",
    company: "SSSR"
}

//forin loop use for object
// for (const key in obj) {
//     const Element = obj[key];
//     console.log(key, Element)
//     }


// for (const key in obj) {
//     console.log(key)
//     }

//forof loop use for iterator in array,string and etc
// for (const s of "Shivam") {
//     console.log(s);
// }

//while loop
// let i = 1;
// while(i<=6){
//     console.log(i);
//     i++;
// }

//do-while loop is run at least one time even if the given cindition
// is false
let i = 0;
do{
    console.log(i);
    i++;
}while(i<5)