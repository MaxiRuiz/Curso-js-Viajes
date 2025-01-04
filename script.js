import{barcelona, roma, paris, londres} from './ciudades.js';

//Obtener los elementos del DOM

let enlaces = document.querySelectorAll('a');
/*  Luego de ejecutar, "enlaces" contiene un NodeList (colección de nodos) con todos los elementos <a> del documento.
    Cada elemento del NodeList es un objeto que representa un enlace del documento.
    Si hiciera enlaces[0], devolvería el primer enlace del html:  <a>Barcelona</a> 
*/

// Creo 3 variables, para cada uno de los elementos del DOM que quiero manipular:
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
/*  Cada línea de código anterior obtiene un elemento del DOM y lo almacena en una variable.
    El método getElementById() devuelve el elemento que tiene el ID especificado.
    
    Por ejemplo, document.getElementById('titulo') busca dentro del index.html el elemento que tenga el atributo id igual a "titulo".
    que en este caso correspondería a <h2 id="titulo"></h2>

    Entonces, tituloElemento ahora contendría una referencia a este <h2>, permitiendo manipularlo en el código JavaScript. 
    Por ejemplo, cambiar su contenido con tituloElemento.innerHTML = 'Nuevo Título', estilos, etc.
*/


//Agregar un evento CLICK a cada enlace

enlaces.forEach(function(enlace){
    
    // Agregar un evento CLICK a cada enlace.     
    enlace.addEventListener('click', function(){
        
        //REMOVER el activo (clase "active") de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });

    // Agregar la clase "active" al enlace actual
    this.classList.add('active');
    /* Al hacer "clic" en uno de los enlaces, se pone verde y se selecciona.
    */

    // Obtener el contenido correspondiente según el enlace
    let contenido = obtenerContenido(this.textContent);
    /* Luego de ejecutar esta linea, la variable "contenido" contiene una referencia a uno de los objetos importados.
        this.textContent obtiene el texto visible del enlace clickeado. 
            Por ejemplo, si el enlace clickeado es <a>Barcelona</a>, this.textContent sería "Barcelona", y contenido sería el objeto "barcelona" (con sus datos, obtebidos de ciudades.js).
    */
    
    //Traer la info del objero correspondientea la elección y mostrarla en el DOM
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo
    /*  Cada línea actualiza el contenido HTML del elemento del DOM con los valores del objeto "contenido".
      Por ejemplo, para tituloElemento.innerHTML = contenido.titulo, si contenido.titulo es, "Barcelona", el contenido interno del elemento <h2 id="titulo"></h2> en el DOM se cambiará a <h2 id="titulo">Barcelona</h2>.
    */

    });

}

)

//Función para traer la información correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
