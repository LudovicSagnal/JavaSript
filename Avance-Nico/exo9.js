buttonSelector = document.querySelector("button");

buttonSelector.addEventListener("click", function(){
    const para = document.createElement("p");
    para.textContent = "Oh oui !";
    div.appendChild(para);
    return para;
})