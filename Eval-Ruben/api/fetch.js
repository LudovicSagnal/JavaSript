let mainSelector = document.querySelector("main");
let sectionCreation;
let asideCreation;
let imgCreation;
let pCreation;
let buttonCreation;

fetch('https://picsum.photos/v2/list?page=1&limit=100')
  .then((response) => {
    return response.json()
  })
  .then((photos) => {
    photos.forEach(photo => {
      photo.download_url = photo.download_url.replace(photo.width, "600").replace(photo.height, "600");
      console.log( photo.download_url);
      createElements();
      fillElements(photo.download_url, photo.author, photo.url);
      appendElements(); 
    });
  })

function createElements() {
   sectionCreation = document.createElement("section");
   asideCreation = document.createElement("aside");
   imgCreation = document.createElement("img");
   pCreation = document.createElement("p");
   buttonCreation = document.createElement("a");
}

function fillElements(photoUrl, photoAuthor, urlAuthor) {
  imgCreation.src = photoUrl;
  buttonCreation.textContent = "Visit";
  buttonCreation.href = urlAuthor;
  buttonCreation.target = "blank";
  pCreation.textContent = photoAuthor;
  sectionCreation.classList.add("sect");
}

function appendElements() {
  mainSelector.append(sectionCreation);
  sectionCreation.append(asideCreation);
  sectionCreation.append(imgCreation);
  asideCreation.append(pCreation);
  asideCreation.append(buttonCreation);
}