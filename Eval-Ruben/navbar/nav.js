let icon = document.getElementById("icon");
let nav = document.getElementById("laNav");

icon.addEventListener("click", showMenu);

function showMenu(){
    console.log("Hello");
    nav.classList.toggle("show");
}