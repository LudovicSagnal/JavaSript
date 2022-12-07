let butHead = document.getElementById("head");
let butMain = document.getElementById("main");
let butFoot = document.getElementById("foot");

console.log(bod.children)

butHead.addEventListener("click", function() {
    butHead.classList.add("nope");
    createDom("header", "Je suis bel et bien un header", bod);
})

butMain.addEventListener("click", function() {
    butMain.classList.add("nope");
    let main = document.createElement("main");
    main.textContent = "Et je suis bien un main !";
    bod.insertBefore(main, bod.children[1]);
})

butFoot.addEventListener("click", function() {
    butFoot.classList.add("nope");
    let foot = document.createElement("footer");
    foot.textContent = "Et moi je suis un footer"
    bod.appendChild(foot);
})

function createDom (element, text, parent) {
    const markup = document.createElement(element);
    markup.textContent = text;
    parent.prepend(markup);
    return markup;
}