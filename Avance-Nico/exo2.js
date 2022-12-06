let buttonSelector = document.querySelectorAll("button");
let countHTML = 0;
let countCSS = 0;
let countJS = 0;

buttonSelector.forEach(item => {
    item.addEventListener("click", function() {
        if (item.id == "html") {
            if (countHTML == 0){
                createDom("p", "Du texte sur HTML", div);
                countHTML++;
            }else {
                clearDiv("div");
                countHTML = 0;
            }
        } else if (item.id == "css") {
            if (countCSS == 0) {
                createDom("p", "Du texte sur CSS", div);
                countCSS++;
            }else {
                clearDiv("div");
                countCSS =0;
            }
        }else if (item.id == "js") {
            if (countJS == 0) {
                 createDom("p", "Du texte sur JS", div);
                 countJS++;
            }else {
                clearDiv("div");
                countJS =0;
            }     
        }else {
                createDom("p", "Du texte sur HTML", div);
                createDom("p", "Du texte sur CSS", div);
                createDom("p", "Du texte sur JS", div);
            }
    })
})

function createDom (element, text, parent) {
    const markup = document.createElement(element);
    markup.textContent = text;
    parent.appendChild(markup);
    return markup;
}

function clearDiv(elementID) {
    document.getElementById(elementID).innerHTML = "";
}