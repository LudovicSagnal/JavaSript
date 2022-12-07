let inputSelector = document.querySelector("input");
let but = document.getElementById("but");

but.addEventListener("click", function(){
    const input = inputSelector.value;
    div = document.createElement("div");
    bod.appendChild(div);
    createDom(input);
})

function createDom (input) {
    div = document.createElement("div");
    bod.appendChild(div);
    const markup = document.createElement("p");
    markup.textContent = input;
    div.appendChild(markup);
    btn = document.createElement("button");
    btnS = document.createElement("button");
    btn.textContent = "Valider";
    btnS.textContent = "Supprimer";
    div.appendChild(btn);
    div.appendChild(btnS);
    btn.addEventListener("click", function () {
        markup.style.color = "green";
    });
    btnS.addEventListener("click", function () {
        markup.style.textDecoration = "line-through"
    });
}