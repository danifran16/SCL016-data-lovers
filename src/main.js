//import { example } from "./data.js";npm test
import champ from "./data/lol/lol.js";

// MODULARIZACION: Eventos del Usuario y HTML Dinámico

let totalData = champ.data; //muestra la data de los campeones en consola
let dataChampions = Object.values(totalData); //.values devuelve las propiedades de los campeones

const modal = document.createElement("div");  // Contenedor creado para la ventana emergente
modal.setAttribute("id", "champ-modal");

showChampions(dataChampions); // Muestra todos los campeones

//Funcion de  limpieza
function cleanScreenOfChampions() {
  document.getElementById("root").innerHTML = "";
}

//Funcion que filtra los campeones y los muestra en pantalla

function leakedChampions(tag) {
  let championsToShow = dataChampions.filter((lolData) =>
    lolData.tags.includes(tag)
  );
  showChampions(championsToShow);
}

//Asignando funciones a botones - filtro por tipo

let buttonAssassin = document.getElementById("assassin");
buttonAssassin.addEventListener("click", () => {
  cleanScreenOfChampions();
  leakedChampions("Assassin");
});

let buttonFighter = document.getElementById("fighter");
buttonFighter.addEventListener("click", () => {
  cleanScreenOfChampions();
  leakedChampions("Fighter");
});

let buttonMage = document.getElementById("mage");
buttonMage.addEventListener("click", () => {
  cleanScreenOfChampions();
  leakedChampions("Mage");
});

let buttonMarksman = document.getElementById("marksman");
buttonMarksman.addEventListener("click", () => {
  cleanScreenOfChampions();
  leakedChampions("Marksman");
});

let buttonSupport = document.getElementById("support");
buttonSupport.addEventListener("click", () => {
  cleanScreenOfChampions();
  leakedChampions("Support");
});

let buttonTank = document.getElementById("tank");
buttonTank.addEventListener("click", () => {
  cleanScreenOfChampions();
  leakedChampions("Tank");
});

//Boton Reset
let buttonReset = document.getElementById("reset");
buttonReset.addEventListener("click", () => {
  viewDataNew();
});

//Funcion que muestra toda la data denuevo
function viewDataNew() {
  cleanScreenOfChampions();
  showChampions(dataChampions);
}

//Funcion que muestra los campeones
function showChampions(champions) {
  for (const obj of champions) {
    let pName = document.createElement("p");
    let divIcons = document.createElement("div");
    divIcons.setAttribute("class", "champ-container");
    // divIcons.setAttribute("data-idChampion", obj.name);

    pName.textContent = obj.name;

    let divRoot = document.getElementById("root");
    divIcons.appendChild(pName);

    let img = document.createElement("img");
    img.setAttribute("class", "img-container");

    img.src = obj.img;

    divIcons.appendChild(img);
    divRoot.appendChild(divIcons);

    const closeModal = () => {
      divRoot.removeChild(modal);
    };

    divIcons.addEventListener("click", () => {
      let champInfo = `
                    <div class="div-container">
                      <button value="Cerrar" id="close-modal-button"/>X</button>
                      <p class="title-modal"> ${obj.title}</p>
                      <img class="img-modal" src="${obj.splash}"/>
                    <div class="blurb-modal"><p>${obj.blurb}</p><div/>
                    </div> `;

      modal.innerHTML = champInfo;
      divRoot.appendChild(modal);

      const button = document.getElementById("close-modal-button");
      button.onclick = closeModal;
    });
  }
}

// Ordenar Alfabeticamente
const dataAZ = dataChampions.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

  const orderAZ = document.getElementById("selectOrder");
  orderAZ.addEventListener("change", () => {
    cleanScreenOfChampions();
    showChampions(dataAZ);
  });

  const orderZA = document.getElementById("selectOrder");
  orderZA.addEventListener("change", () => {
    cleanScreenOfChampions();
    showChampions(dataAZ.reverse());
  });

 /* 
// boton search
let buttonSearch = document.getElementById("input-name-champion");
buttonSearch.addEventListener("click", () => {
filter = showChampions.value.toUpperCase();
cleanScreenOfChampions();
});
*/
/*
 const search = document.querySelector("#search");
 filtrar = ()=> {
   console.log(serch.value);
   
 }
*/

/* para la info dentro del modal
obj = {name: "Cat", age: 26}
{name: "Cat", age: 26}
for (const key in obj) {console.log(key)}
VM889:1 name
VM889:1 age
undefined
for (const val of Object.values(obj)) {console.log(valueOf)}
2VM968:1 ƒ valueOf() { [native code] }
undefined
for (const val of Object.values(obj)) {console.log(val)}
VM1005:1 Cat
VM1005:1 26
*/
