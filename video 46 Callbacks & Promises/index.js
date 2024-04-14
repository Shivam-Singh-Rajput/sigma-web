console.log('I am Shivam Rajput...');
console.log('I am Rohan Rajput...');
// This console always print a first and than second that means it is print a one after one
// but when we write a asynchronous function than it is print first 

setTimeout(() => { // this is an anonymous function which has no name so it is called as an anonymous function.
    console.log('I am inside of timeout');
}, 2000);
// This function is deffer for after the 2 scond at the end

console.log("This is the end");

const fn = () => {
  console.log("What's up");
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadScript = (src, callback) => {
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("Shivam", fn); //anfn is a short key for write a aerow function 
    document.head.append(sc);  
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js', callback);