const options = {method: 'GET'};

let buttonSelector = document.querySelector("button");
let inputSelector = document.querySelector('input');
let citySelector = document.querySelector("h2");
let iconSelector = document.querySelector("img");
let pSelector = document.querySelectorAll("p");
let pTextSelector = pSelector[0];
let pTempSelector = pSelector[1];
let city;

buttonSelector.addEventListener("click", function() {
    city = inputSelector.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91f40637a9cf837a5cee29d14c07e41b&units=metric&lang=fr `, options)
    .then(response => response.json())
    .then((meteo) => {
        console.log(meteo);
          console.log(meteo.main.temp);
          console.log(meteo.weather[0].main);
          console.log(meteo.name);
          fillElements(meteo.main.temp, meteo.weather[0].description[0].toUpperCase() + meteo.weather[0].description.slice(1), meteo.weather[0].icon);
        })
})

function fillElements(temp, desc, icon) {
    iconSelector.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    citySelector.textContent = `${city}`;
    pTextSelector.textContent = desc;
    pTempSelector.textContent = `${temp}°C`;
}