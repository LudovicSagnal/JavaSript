function color () {
    let randomColor =
    Math.floor(Math.random()*16777215).toString(16);
    buttonSelector.style.backgroundColor = "#" + randomColor;
};

var buttonSelector = document.querySelector("button");

function change () {
    buttonSelector.style.background = color();   
};

change();

var interval = setInterval(change,1000);

buttonSelector.addEventListener("click", function() {
    clearInterval(interval);
});