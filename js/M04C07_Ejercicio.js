//evento 
$("#boton").click(function (e) { 
    let  elemento = $("<li></li>") ;
    
    let texto= $("#texto").val();
    //alert(texto);
    let posicion=$("#numero").val();
    //alert(posicion);
    elemento.text(texto);

    elemento.bind({
        "mouseenter": function(){elemento.css("background-color","red")},
        "mouseleave": function(){elemento.css("background-color","white")},
        "click":function(){elemento.remove()}
    })
    
     if(posicion>$("ul").children().length){
         $("ul").append(elemento);
     }else{
        //$(elemento).insertBefore("ul li:gt("+posicion+")");
        console.log(posicion);
        elemento.insertBefore(("ul li:gt("+(posicion-1)+") :first"));        
     }

});

$("form").submit(function (e) { 
    e.preventDefault();
    
});


$(document).ready(function () {
   
});