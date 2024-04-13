let shm = document.getElementById("btn")
// list of all mouse Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// It is open single click if we want to open in double click than we use "dblclick"
shm.addEventListener("click", () => {
    alert("I was clicked. Yupp it's a hot")
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b>Enjoy you are click!";
})

// This function is alert when we right click on given button 
shm.addEventListener("contextmenu", () => {
    alert("Don't hack us by right click")
})

// It show the all key which one you will push
document.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode)
})