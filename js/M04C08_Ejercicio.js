//1.- cargar los elementos HTML en variables
let texto = document.querySelector("#texto");
let boton = document.querySelector("button");
let div = document.querySelector("#contenedor");
let formulario= document.querySelector("form");

//2.- eventos
boton.addEventListener("click",function(e){
    //capturar el texto dentro del input
    let dato = texto.value;
    //crear un nuevos elementos
    let nuevoElemento = document.createElement("p");    
    let nuevoBotonEliminar=document.createElement("Button")
    //modificar el nuevo elemento para agregarle el texto
    nuevoElemento.innerText = dato;
    nuevoBotonEliminar.innerText="Eliminar"
    //darle evento click al nuevo elemento
    nuevoElemento.addEventListener("click",function(e){
        div.removeChild(nuevoElemento);
        div.removeChild(nuevoBotonEliminar);
    })
    //farle evento al boton eliminar
    nuevoBotonEliminar.addEventListener("click",function(e){
        div.removeChild(nuevoElemento);
        div.removeChild(nuevoBotonEliminar);
    })

    //agregar el nuevo elemento al html
    div.appendChild(nuevoElemento);
    div.appendChild(nuevoBotonEliminar);
})

formulario.addEventListener("submit",function(e){
    e.preventDefault();
})
