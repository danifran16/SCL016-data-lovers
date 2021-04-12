import { example } from './data.js';
import data from './data/lol/lol.js';


let pruebaData = data.data; //muestra la data de los campeones en consola
console.log(pruebaData);

let dataNueva = Object.values(pruebaData);  //.values devuelve las propiedades de los campeones 
console.log(dataNueva)

dataNueva.forEach(e => console.log(e.name, e.img)); //obtengo nombre e img de los campeones











//console.log(example, data);
