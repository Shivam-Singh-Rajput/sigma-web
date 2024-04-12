console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").hasAttribute);
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style", "display: inline"));
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").removeAttribute("style"));

console.log(document.designMode = "on");
console.log(document.querySelector(".box").dataset);

let div = document.createElement("div");//-->It is use for create a element
        div.innerHTML = "He is a good boy whose name is <b>Shivam</b>" 
        div.setAttribute("class", "created"); //use for set Attributes 
        //when we want to store inside of container than we use this function
        //and (.append) means element are inserted at the end of sentence
        document.querySelector(".container").append(div);
        // It is insert the element before the same element
        document.querySelector(".container").before(div);
        document.querySelector(".box").after(div);
        document.querySelector(".container").prepend(div);

        // This is also work as a innerHTML function but in this element we would be
        // use of ".insertAdjecentHTML" for inserting the element we can use the same
        // function for inserting the "text" and "element"
        let cont = document.querySelector(".container");
        cont.insertAdjacentHTML("afterbegin", "<b>Ganga is the biggest river in india</b>");

        // If we want to find the all classes from the element than we will use the ".classList"
        console.log(document.querySelector(".ssr").classList);
        // If we want find only name value of all classes than we would be use ".className"
        console.log(document.querySelector(".ssr").className);
        // If we want to add a new class in the given class than we use [.classList.add("class name")]
        console.log(document.querySelector(".ssr").classList.add("Rohit"));
        // If we want to remove a class in the given class than we use [.classList.remove("class name")]
        console.log(document.querySelector(".ssr").classList.remove("ssr"));
        console.log(document.querySelector(".container").classList.toggle("box"));