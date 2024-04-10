// JavaScript was made for give the less error
/* String is immutabil that means if you make once string than you can't change it
 it will be remain same string yes you can make a different string using string
functionality */
let a = "Shivam Singh";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]); //it is also count spaces
console.log(a[7]);

console.log(a.length);

let Ram = "Aakay";
let vlc = "Rudrans";
console.log("This is the " + Ram + " and his another name is " + vlc);
console.log(`Hey ${Ram} where is your friend ${vlc}`);

let b = "Shresth";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

//slice method is use for skipe the word which we don't want to take
//it is take a 1 to 4 word of "shivam" that would be "hiva" here 5 is not included
//if we give the one instruction then it is give a all character from given variable
console.log(b.slice(1,5));
console.log(b.slice(1));

/*If we want to replace the character then we can do also using "replace" function
 but in the given word character is repeating than this cause the first
 character would be replace not secondary character */
 console.log(b.replace("am", "yom")); 

 /*If we want to add the both name we can do using "concatinate" function even 
 we want to add more and more name than we can add also these names */
 console.log(b.concat(a,"Rohit","Rahul"));