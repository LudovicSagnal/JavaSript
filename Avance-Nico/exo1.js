let tSelector = document.querySelectorAll("h2");

tSelector.forEach(item => {
    item.addEventListener("click", () => {
        let nextT = item.nextElementSibling;
        if (nextT.style.display == "none") {
            nextT.style.display = "block";
        }else {
            nextT.style.display = "none";
        }
    })
})