//1.- CARGAR ELEMENTOS HTML
//funcion:document.querySelector
//por nombre(etiqueta), por id(#) o por clase(.)

//carga del formulario
let formulario =  document.querySelector("#formulario");
console.log(formulario);
//carga del campo de texto (input de tipo text)
let texto = document.querySelector("#texto");
console.log(texto);

//carga del boton
let boton = document.querySelector("#boton");

//cargar varios elementos al mismo tiempo
//let parrafo=document.querySelector("p"); //carga 1 elemento, el primero que encuentra
let parrafos=document.querySelectorAll("p");//carga TODOS los parrafos

//-----------------------------------------------------------------
//2.- MODIFICAR elementos HTML
//texto
let p=document.querySelector("p");
p.innerText="texto cambiado mediante JS!!!";

//cambiar el texto del boton
boton.innerText="Ejecutar";


//clase CSS, 3 formas de hacerlo
p.setAttribute("class","fondoAzul");
p.className="fondoAzul";
p.classList.add("fondoAzul");


//atributos
texto.setAttribute("disabled","");
texto.removeAttribute("disabled");

//---------------------------------------------------------------
//3.- DARLE EVENTOS A LOS ELEMENTOS HTML
//addEventListener
//click, mouseover,mouseleave,submit,keydownkeyup,load,etc...

//click en el primer parrafo:
p.addEventListener("click",function(e){
    p.className="fondoBlanco";
})

//cargar el div y cambiar el fondo al hacer el click
let div=document.querySelector("div");
div.addEventListener("click",function(e){
    div.className="fondoAzul";
})

//enviar un mensaje a pantalla (con alert) cuando se haga
//click en el boton

boton.addEventListener("click",function(e){
    alert("click!");
})

//cuando pasemos el mouse encima del input:text, cambiar el fondo a azul
//cuando saquemos el mouse, cambiar el fondo a blanco
texto.addEventListener("mouseover",function(e){
    texto.className="fondoAzul";
})

texto.addEventListener("mouseout",function(e){
    texto.className="fondoBlanco";
})
//-------------------------------------------------------------
//4.- CREACION DE NUEVOS ELEMENTOS
//document.createElement

//crear un parrafo
let nuevoParrafo = document.createElement("p");

//crear un nuevo input
let nuevoTexto = document.createElement("input");

//crear un nuevo div
let nuevoDiv = document.createElement("div");

//ahora se aplica el paso 2, modificar el elemento
//modificar parrafo nuevo (texto)
nuevoParrafo.innerText="nuevo texto";

//modificar el input (atributo)
nuevoTexto.setAttribute("type","text");

//modificar el fondo del div
nuevoDiv.className="fondoAzul";

//--------------------------------------------------------------
//5.- AGREGAR ELEMENTOS RECIEN CREADOS (MEDIANTE CODIGO)
//appendChild, prependChild
//contenedor.appendChild(hijo);

//agregar el nuevo parrafo al div existente
div.appendChild(nuevoParrafo);

//agregar el input al formulario
formulario.appendChild(nuevoTexto);

//agregar el nuevo parrafo al nuevo div
nuevoDiv.appendChild(nuevoParrafo);
//agregar el nuevo div a la página
document.body.appendChild(nuevoDiv);
//-------------------------------------------------------------
//6 - Eliminar Elementos
//removeChild(elemento a eliminar)

//elimnar el primer parrafo del div
div.removeChild(p);

//eliminar 
document.body.removeChild(nuevoDiv);

//elimnar el texto input
formulario.removeChild(texto);




















