//declaracion de variables locales
//declaracion de funciones
//declaracion de eventos

//toda la ejecución va dentro de esta función
$(document).ready(function(){
    //la función $ es equivalente a:
    //document.querySelector()
    $("h1").text("Con Jquery");
    //document.querySelector(h1).innerText("Sin jquery");
    //cargar un parafo con jquery
    let parrafo=$("p");
    console.log(parrafo);
    console.log(parrafo.text()); //para leer el innertext
    parrafo.text("texto cambiado!!!"); //para escribir el innertext
    //me cambia el texto para todos los elementos de la colección
    $("p").text("texto cambiado 2"); //cambio directo, sin variable
    //seleccionar sólo el parrafo que está dentro del segundo div
    $("#segundo p").text("texto segundo parrafo");
    //seleccionar el segundo titulo h2 (equivalente a style de js)
    $("#titulo2").css("color","red");
    //eventos,  equivalente a addeventlistener("click",function(e){})
    $("#titulo2").click(function(){
        $("#titulo2").css("color","lightgreen");        
    })

    //seleccionar la lista ul
    $("#lista").css("color","violet");
    //cambio el color de fondo solo a los hijos
    $("#lista").children().css("background-color","black");

    //desafio
    //cambiar el color de fondo de todo lo que esta al interior del segundo parrafo
    $("#segundo").children().css("background-color","black");

    //cambiar el colro de fondo a azul sólo a los elementos impares de la lista ul
    //con funcion
    $("li").even().css("background-color","blue");
    //con pseudoselector
    $("li:odd").css("background-color","yellow");

    //equivalente a un for (i=0;i<coleccion li.length;i++)
    $("ul").children().each(function(i,e){
        $(e).text(i);
    })
    //------------------------------------------------------------------------
    //CREACIÓN DE ELEMENTOS
    //ejemplo clonar el primer elemento de la lista y agregarlo al final
    $("ul li:first").clone().appendTo("ul");
    //en js para crear un elemento se usa:
    //document.createElement(p);
    //su equivalente en jquery sería: $
    let nuevoElemento=$("<p>nuevo elemento</p>");
    //insertarlo en el div segundo
    $("#segundo").append(nuevoElemento);
    //es equivalente a
    $("<p>nuevo elemento 2</p>").appendTo("#segundo");
    //desafio
    //crear un tercer  div (con titulo y parrafo),
    // y agregarlo despues del segundo y antes de la lista
    $("<div id='tercero'><h1>Titulo 3</h1><p>texto 3</p></div>").insertAfter("#segundo");
    //como resumen, para insertar elementos tenemos:
    //insert Afeter y Before
    //append y preppend

    //ELIMINAR
    //eliminar el tercer segundo elemento de la lista
    $("ul li:first").next().remove();

    //vaciar la lista
    //$("ul").empty(); //comentar para ver resultado

    //EVENTOS
    //metedo 1 para el mouseenter, implementar la funcion 
    /*$("#segundo").mouseenter(function () { 
        $("#segundo").css("background-color","red");
    });*/

    //metodo 2 con funcion aparte
    function cambiarFondo(){
        $("#segundo").css("background-color","red");
    }
    function cambiarFondoSalir(){
        $("#segundo").css("background-color","white");
        $("#segundo").css("color","lightblue");
    }
    //bindindg de la función
    //$("#segundo").bind("mouseleave",cambiarFondo);
    $("#segundo").bind({
        "mouseenter":cambiarFondo,
        "mouseleave":cambiarFondoSalir
    })





})