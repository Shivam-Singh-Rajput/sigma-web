console.log('Hello World!');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(()=> {
            console.log("yes i am done")
            resolve("Shivam")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a<0.5){
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(()=> {
            console.log("yes i am done 2")
            resolve("Shivam 2")
        }, 1000);
    }
})

//Here the means of settle ya to vah "resolve" hogi ya "reject"
// and the means of resolve is one value shoud be found without error
let p3 = Promise.all([prom1, prom2])
p3.then((a) => {
console.log(a)
}).catch(err=>{ console.log(err)})