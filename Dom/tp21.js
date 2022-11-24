let buttonSelector = document.querySelector("button");
let pSelector = document.querySelector("p");
var compteur = 11;
var timer;

function decompte() {
    if (compteur > 0) {
        compteur--;
        pSelector.innerHTML += compteur + "<br>";
    }else {
        alert("BOOOOOOM");
        clearInterval(timer);       
        pSelector.innerText = " ";
        compteur = 11;
    }
};

buttonSelector.addEventListener("click", function start(){
    timer = setInterval(function(){
        decompte();
    },1000);
});

