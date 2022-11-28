let cookSelector = document.getElementsByClassName("cook-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

function initModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

cookSelector.addEventListener("click", initModal);