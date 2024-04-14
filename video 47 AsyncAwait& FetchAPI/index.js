// async function getData() {
//     // async function is sure that the whole function us run properly in background
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(455)), 3000;
//     });
// }

async function getData() {
    // simulate getting data from a server i use "JSONPlaceholder" for fetch API
    // it is a fetch API inside of javaScript
    // We have to wait twice to parse fetch API
// let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
let a = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    // here we can use "a.text" anything which we want at the place of "a.json"
    let data = await a.json() //when we use "await a.json" than it is take a some time for passing the value in json
    console.log(data)
    // console.log(a)
    // return 524; --> it will wait the first async function
}

// "getrequest" is one when we search anything type and enter thean we will say it's a get request 

async function main(){
console.log('Hello World');

console.log("Loding module")

console.log("Do something else")

let data = await getData() //when we use "await" then it must be inside of "async" function
console.log(data)          // and it will wait the first async function

console.log("Process data") 

console.log("task 2")
}

main()
// data.then((v)=>{
//     console.log(data)
    
//     console.log("Process data")
    
//     console.log("task 2")
// })