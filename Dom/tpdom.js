// let h2 = document.querySelector ("h2");
// console.log(h2);

// let a = document.querySelectorAll ("a");
// console.log(a);

// let thisDiv = document.querySelector (".text");
// console.log(thisDiv);

document.querySelector ("h2").innerHTML = ("Nouveau titre !"); //à ne pas trop utiliser
document.querySelectorAll ("a") [1].innerText = "On va voir";
document.querySelector ("p").textContent = "Montpellier c'est pas trop mal, mais bon.";
//.textContent à priviliger
//Il vaut mieux stocker dans une variable

// exo append & co :

let nh1 = document.createElement("div");
nh1.innerText = "Nouveau titre, haha";
document.body.append(nh1);
document.querySelector("nav").prepend(nh1);

// document.querySelector("img").remove();
document.querySelector("img").src = "https://a.cdn-hotels.com/gdcs/production8/d1097/363987af-c07c-4f91-9f4d-847552d055e4.jpg?impolicy=fcrop&w=800&h=533&q=medium"

//correction exo append & co :

// //Ajouter un h1
// let nav = document.querySelector("#burger");
// let header = document.querySelector("header");
// let newDiv = document.createElement("div");

// let newTitle = document.createElement("h1");

// header.prepend(newDiv);

// newDiv.append(newTitle);

// //supprimer l'image

// let backgroundImg = document.querySelector("img");

// backgroundImg.remove();

document.body.style.background = "linear-gradient(#e66465, #9198e5)";
