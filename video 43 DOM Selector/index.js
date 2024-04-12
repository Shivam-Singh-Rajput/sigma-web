console.log("Shivam")

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[1].style.backgroundColor = "yellow";

//"id" selector is uniq thats why we can't be change after the implemantation of any method
document.getElementById("dog").style.backgroundColor = "red";

//"query" selector search the first element which is match the query selector and then return.
//here i use the css selector
document.querySelector(".box").style.backgroundColor = "brown";

//In this "query" selector we can't style html Collection,Array and String
//query selector All return multiple element in Node list
console.log(document.querySelectorAll(".box"));
document.querySelectorAll(".box").forEach(e=>{ //(=>) this is known as aerow function
    console.log(e);
});

// document.getElementsByTagName("div");-->is returtn all the element which tagneme is "div"
document.getElementsByTagName("div");

//matches selector is return true or false if match then true if no match than false
console.log(boxes[0].matches("#dog"));
// The closest ancestor Element or itself, which matches the selectors. If there are no such element, null.
console.log(boxes[2].closest("html"));

// contain selector is also return the value in the form of true or false if given element
//is containing than return true other wise false
console.log(document.querySelector(".gfg").contains(boxes[2]));
console.log(document.querySelector(".gfg").contains(boxes[2]));
console.log(document.querySelector("body").contains(document.querySelector(".gfg")));