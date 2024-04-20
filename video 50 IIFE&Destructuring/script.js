async function sleep(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(45)
        }, 1000);
    });
}

//IIFE-->Immediately Invoke Function Expression
(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b)

    // Destructuring-->If we want to find the "x,y" value than we should check the insider value of border
    // and if we want to print remaning value then we should use rest operator "...variable name"
    let [x, y, ...rest] = [1, 2, 3, 4, 5]; //-->Here we can take any variable name at the place of rest
    console.log(x, y, rest) 

    //"object" destructuring
    let obj = {
        p: 5,
        q: 10,
        r: 15
    }
    let {p, q} = obj
    console.log(p, q);

    // "Spread" operator
    function sum(a, b, c){
     return a+b+c;
    }
    let arr = [5,  10, 15]
     console.log(arr[0] + arr[1]  + arr[2])
     console.log(sum(...arr)) //-->here "...arr" is spread the whole value and add them    }
})()