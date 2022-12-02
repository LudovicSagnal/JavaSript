// // Exemple de test regex

// // Première lettre en majuscule ?
// const paragraph = "C'est mon test !"
// const regex = /^[A-Z]/;
// const essai = paragraph.match(regex);
// console.log(essai);

// const paragraph2 = "sans majuscule"
// const essai2 = paragraph2.match(regex);
// console.log(essai2);

// // Est ce que c'est un nombre ?
// const nombre = "1558";
// const reg = /^\d+$/;
// const essaiN = nombre.match(reg);
// console.log(essaiN);

let loginSelector = document.querySelector(".login");
let passwordSelector = document.querySelector(".password");
let buttonSelector = document.querySelector("button");
let pSelector = document.querySelector("p");
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordUpper = /.*[A-Z]/;
let passwordSpecial =/.*[!@#$&*]/;
let passwordDigit = /.*[0-9].*[0-9]/;
let passwordLength = /.{8,}/; 

buttonSelector.addEventListener("click", function (){
    login = loginSelector.value;
    // console.log(login);
    password = passwordSelector.value;
    // console.log(password)
    passwordSelector.value = "";
    pSelector.textContent = ""
    if (verifyLogin(login) == true) {
        verifyPassword(password);
    }else if (verifyLogin(login) == false) {  
        pSelector.textContent = "Email inconnu";
    }
})

function verifyLogin (testMail) {
    // console.log(login);
    if(testMail.match(mailFormat)){
        loginSelector.classList.add("ok");
    return true;
    }else  {
        loginSelector.classList.add("nope");
        return false;
    }
}

function verifyPassword(testPassword) {
    console.log("Password:", testPassword); 
    if(!testPassword) {
        pSelector.textContent = "Rentrez votre mot de passe"
        return
    } 
    let statusUpper = passwordUpper.test(testPassword)
    let statusSpecial = passwordSpecial.test(testPassword)
    let statusDigit = passwordDigit.test(testPassword)
    let statusLen = passwordLength.test(testPassword)

    console.log(statusUpper, statusSpecial, statusDigit, statusLen)
    if(statusUpper && statusSpecial && statusDigit && statusLen) {
        pSelector.textContent = "Ok !"
        passwordSelector.classList.add("ok");
        loginSelector.value = "";
        passwordSelector.value = "";
        pSelector.textContent = ""
    }
    if (!passwordUpper.test(testPassword)) {
        console.log("pas de maj")
        pSelector.textContent += " Pas de lettre en majuscule"
    }   
    if (!passwordSpecial.test(testPassword)) {
        console.log("pas de spe")
        pSelector.textContent += " Pas de caractère spécial"
    }   
    if (!passwordDigit.test(testPassword)) {
        console.log("pas de nb")
        pSelector.textContent += " Pas assez de nombres"
    }   
    if (!passwordLength.test(testPassword)) {
        console.log("pas assez long")
        pSelector.textContent += " Pas assez long"   
    }
}