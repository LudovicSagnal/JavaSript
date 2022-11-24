/*
Voici comment va se dérouler notre bouton Spoiler :
- Un bouton s’affiche sur la page proposant d’afficher le message
- L’utilisateur clique sur le bouton, ce qui va activer une condition
• La variable hidden vaut true ? Dans ce cas, on affiche le message, on change
le texte du bouton en « Cacher », et on passe la variable hidden en false
• La variable hidden vaut false ? Dans ce cas, on cache le message, on change
le texte du bouton en « Afficher », et on passe la variable hidden en true
*/

let buttonSelector = document.querySelector("button");
let pSelector = document.querySelector("p");
let hidden = true;

pSelector.style.display = "none"

buttonSelector.addEventListener("click", function(){
    if (hidden == true) {
        pSelector.style.display = "block"
        buttonSelector.innerText = "Chuuuuuut, c'est secret";
        hidden = false;
    } else if (hidden == false) {
        pSelector.style.display = "none"
        buttonSelector.innerText = "Clique sur le bouton";
        hidden = true;
    }
});