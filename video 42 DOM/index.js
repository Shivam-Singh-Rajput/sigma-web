console.log("Hey Shiv");
// Here the some document method 
document.body;
console.log(document.body);  //Here the (document.body) is count as a text of a given spaces
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes);

// Here the some element method 
let cont = document.body.childNodes[1];
console.log(cont.firstElementChild);
console.log(cont.lastElementChild);
console.log(cont.lastElementChild.style.color = "yellow");
console.log(cont.lastElementChild.style.backgroundColor = "red");
// console.log(cont.element.childNodes) --> It is print a all child nodes
console.log(cont.lastElementChild.parentElement);

// If parant of both the element are same than we say "Sibling"
//In most of the causes we will target only "ELEMENT"
console.log(document.body.firstElementChild.children[3].nextElementSibling);
console.log(document.body.firstElementChild.children[3].previousElementSibling);
console.log(document.body.firstElementChild.children[2].previousSibling);
