const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

let executed = false;
let div = document.createElement("div");
div.className = "row";
doggos.appendChild(div);

function addNewDoggo() {
  const img = document.createElement("img");
  img.src = "./loading.gif";
  img.alt = "Cute doggo";
  img.className = "dog-image";
  if (div.children.length >= 5) {
    div = document.createElement("div");
    div.className = "row";
    doggos.appendChild(div);
  }
  div.appendChild(img);
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
      img.src = processedResponse.message;
      div.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
