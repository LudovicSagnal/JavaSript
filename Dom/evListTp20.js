let linkSelector = document.querySelector("a");
let buttonSelector = document.querySelector("button");

linkSelector.addEventListener("click", function (e){
    linkSelector.remove();
    e.preventDefault()
});

buttonSelector.addEventListener("mouseenter", function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    buttonSelector.addEventListener("mouseleave", function(){
        document.body.style.backgroundColor = "unset";
        document.body.style.color = "unset";
    })
    // setTimeout (function() {
    //     document.body.style.backgroundColor ="unset";
    // },500);
});

let titleSelector = document.querySelector("h1");
let sectionSelector = document.querySelector("section");

console.log(titleSelector);

titleSelector.addEventListener("click", function(e){
    alert("Tu cliques sur le h1 là");
    e.stopPropagation();
});

sectionSelector.addEventListener("click", function(){
    alert("Et là c'est la section");
});