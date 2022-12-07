let but = document.querySelector("button");
let inputSelector = document.querySelector("input");
let p = document.querySelector("p");
var liste = document.createElement("ul");
bod.appendChild(liste);
liste.classList.add("hid");


but.addEventListener("click", async function (){
    liste.classList.remove("hid");
    liste.classList.add("show");
    let input = inputSelector.value;  
    liste.innerHTML = " ";  
    let response = await fetch(`http://universities.hipolabs.com/search?country=${input}`);
    var universities = await response.json();
    if (universities.length > 50) {
        let label = document.createElement("h2");
        bod.appendChild(label);
        label.textContent = "Entrez une ville pour plus de précision"
        let newInput = document.createElement("input");
        bod.appendChild(newInput);
        newInput.placeholder = "exemple : Paris";       
        newInput.addEventListener("input", function(){
            let city = newInput.value;
            
            universities.forEach(univ => { 
                console.log(univ);
                let result = univ.name.includes(city);
                let pListe = document.createElement("li");
                pListe.textContent = univ.name;
                liste.appendChild(pListe);
                })
        })
    } else {
        universities.forEach(univ => { 
        console.log(univ);
        let pListe = document.createElement("li");
        pListe.textContent = univ.name;
        liste.appendChild(pListe);
        })
    }
})
