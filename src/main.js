import { example } from './data.js';
import data from './data/lol/lol.js';

let totalData = data.data; //muestra la data de los campeones en consola
let dataChampions = Object.values(totalData);  //.values devuelve las propiedades de los campeones 

//////muestra todos los campeones inicialmente//////
showChampions(dataChampions);

//////////////Asignando funciones a botones (filtro por tipo)//////////////
let buttonAssassin = document.getElementById('assassin');
buttonAssassin.addEventListener('click', () => {
     cleanScreenOfChampions();
     leakedChampions('Assassin');
});

let buttonFighter = document.getElementById('fighter');
buttonFighter.addEventListener('click', () => {
     cleanScreenOfChampions();
     leakedChampions("Fighter");
});

let buttonMage = document.getElementById('mage');
buttonMage.addEventListener('click', () => {
     cleanScreenOfChampions();
     leakedChampions("Mage");
});

let buttonMarksman = document.getElementById('marksman');
buttonMarksman.addEventListener('click', () => {
     cleanScreenOfChampions();
     leakedChampions("Marksman");
});

let buttonSupport = document.getElementById('support');
buttonSupport.addEventListener('click', () => {
    cleanScreenOfChampions();
    leakedChampions("Support");
});

let buttonTank = document.getElementById('tank');
buttonTank.addEventListener('click', () => {
    cleanScreenOfChampions();
    leakedChampions("Tank");
});

//////////////Boton Reset//////////////
let buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', () => {
    viewDataNew();
})

//////////////Funciones limpieza//////////////
function cleanScreenOfChampions() {
     document.getElementById('root').innerHTML = '';
}

//////////////Funcion que muestra toda la data denuevo//////////////
function viewDataNew(){
    cleanScreenOfChampions();
    showChampions(dataChampions);
}

//////////////Funcion que muestra los campeones//////////////
function showChampions(champions) {
    for (const obj of champions) {

        let pName = document.createElement('p');
        let divIcons = document.createElement('div');
        divIcons.setAttribute('class', 'champ-container');

        pName.textContent = obj.name;

        let divRoot = document.getElementById('root');
        divIcons.appendChild(pName);

        let img = document.createElement('img');
        img.setAttribute('class', 'img-container');

        img.src = obj.img;

        divIcons.appendChild(img);
        divRoot.appendChild(divIcons);
    }
}

//////////////Funcion que filtra los campeones y los muestra en pantalla//////////////
function leakedChampions(tag) {
    let championsToShow = dataChampions.filter(lolData => (lolData.tags.includes(tag)));
    console.log(championsToShow);
    showChampions(championsToShow);
}



