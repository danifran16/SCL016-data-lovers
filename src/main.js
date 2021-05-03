import { cleanScreenOfChampions } from './data.js';
// import {dataAZ} from './data.js';

import data from './data/lol/lol.js';

let totalData = data.data; //muestra la data de los campeones en consola
let dataChampions = Object.values(totalData);  //.values devuelve las propiedades de los campeones 

////// modal //////// 
let modal = document.createElement('div');
modal.setAttribute('class', 'champ-modal');

//////muestra todos los campeones inicialmente//////
showChampions(dataChampions);

//////////////Asignando funciones a botones (filtro por tipo)//////////////
let buttonAssassin = document.getElementById('assassin');
buttonAssassin.addEventListener('click', () => {
     cleanScreenOfChampions;
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

// //////Funciones limpieza////////
// function cleanScreenOfChampions() {
//      document.getElementById('root').innerHTML = '';
// }


//////Funcion que muestra toda la data denuevo////////
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
        // divIcons.setAttribute('data-idChampion', obj.name);
        
        pName.textContent = obj.name;

        let divRoot = document.getElementById('root');
        divIcons.appendChild(pName);

        let img = document.createElement('img');
        img.setAttribute('class', 'img-container');

        img.src = obj.img;

        divIcons.appendChild(img);
        divRoot.appendChild(divIcons);
     
        const closeModal = () =>{ //cerrar modal
            divRoot.removeChild(modal)
        };

        divIcons.addEventListener('click', ()=>{             
                let champInfo = `
                    <div class="div-container">
                        <button value="Cerrar divIcons"  id="close-modal-button">X</button>
                        <p class="title-modal"> ${obj.title} </p>
                        <img class="img-modal" src=" ${obj.splash} "/>
                        <p class= "blurb-modal">${obj.blurb}</p>
                    </div> `;         
                    
            modal.innerHTML= champInfo;
            divRoot.appendChild(modal);

            const button = document.getElementById('close-modal-button');
            button.onclick = closeModal

            });    
    }
}

//////////////Funcion que filtra los campeones y los muestra en pantalla//////////////
function leakedChampions(tag) {
    let championsToShow = dataChampions.filter(lolData => (lolData.tags.includes(tag)));
    showChampions(championsToShow);
}

// ////////funcion orden alfabetico/////////
const dataAZ = dataChampions.sort((a,b)=>{
    if(a.name > b.name){
        return 1;
    }
    if(a.name < b.name){
        return -1;
    }
    return 0;
});


let orderAZ=document.getElementById('selectOrder');
orderAZ.addEventListener('change', ()=>{
    cleanScreenOfChampions();
    showChampions(dataAZ);
});

let orderZA=document.getElementById('selectOrder');
orderZA.addEventListener('change', ()=>{
    cleanScreenOfChampions();
    showChampions(dataAZ.reverse());
});





/////contenido dentro del modal 


/* 
function foto(sp){

    let cajaexterior= document.createElement('div',{
        id:'caja-exterior', 
        class:'caja-exterior'},
        [cajainterior]);  

        cajaexterior.textContent = sp.
    showChampions(cajaexterior);
    document.body.appendChild(sp);


} */

/*     let imprimirmodal= content =>{
    let cajainterior= document.createElement('div', {
        id:'caja-interior', 
        class:'caja-interior'},
        [content]),
        
        cajaexterior= document.createElement('div',{
            id:'caja-exterior', 
            class:'caja-exterior'},
            [cajainterior]);  
            
            document.body.appendChild(cajaexterior);
        }
        
       // ``
       
       /* divIcons.addEventListener('click', (el)=>{(el.currentTarget.dataset.idchampion) })
       
       let imprimirmodal= impr =>{
let cajainterior= document.createElement('div',{id:'caja-interior',class:'caja-interior'},
         [impr]),
    cajaexterior= document.createElement('div',{id:'caja-exterior',class:'caja-exterior'},
         [cajainterior]);  
         
         document.body.appendChild(cajaexterior);
         }

   divRoot.appendChild(imprimirmodal); */