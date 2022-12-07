let pSelector = document.querySelector("p");

let show = prompt("Voulez-vous afficher un texte ?")

if (show.toLowerCase() == "oui") {
    console.log("Ok");
    pSelector.classList.add("pShow");
}else if (show.toLowerCase() == "non") {
    console.log("nope")
    alert("Dommage :'(")
}else {

}