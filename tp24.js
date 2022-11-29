let pSelector = document.querySelector("p");
let answerSelector = document.querySelector("input");
let button2 = document.getElementById("but2");
let button1 = document.querySelector("button");
let form = document.querySelector("form");
let counter = 1;
let goodAnswer;


answerSelector.style.display = "none";
button2.style.display = "none";

function butOne (){
    goodAnswer = Math.floor(Math.random() *1000+1);
    button1.style.display = "none";
    answerSelector.style.display = "block";
    button2.style.display = "block";
    console.log(goodAnswer);
};

function butTwo (){
    answer = Number(answerSelector.value);
    console.log(answer);
        if (answer === goodAnswer) {
            form.style.backgroundColor = "green";
            pSelector.textContent = `Bravo, c'était bien ${goodAnswer} et vous avez mis ${counter} coups pour le trouver`
        }else if (answer > goodAnswer) {
            form.style.backgroundColor = "red";
            pSelector.textContent = "Plus bas !"
            counter++;
        }else if (answer < goodAnswer) {
            form.style.backgroundColor = "red";
            pSelector.textContent = "Plus haut !"
            counter++;
    }
};

button1.addEventListener("click", butOne);
button2.addEventListener("click", butTwo);