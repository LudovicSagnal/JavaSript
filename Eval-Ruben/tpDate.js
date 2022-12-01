let maDate = new Date(2021,4,20);
let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
let maDateFR = maDate.toLocaleString('fr-FR', options);

console.log(maDateFR);

pSelector = document.querySelector("p");

pSelector.textContent = `${maDateFR}`;