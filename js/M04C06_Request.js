//crear una url
var url1=new URL("https://www.google.cl/search?q=animales");
//console.log(url1);

var url2=new URL("search","https://www.google.cl/");
url2.searchParams.append("q","animales");
//console.log(url2);


var url3=new URL("search","https://www.google.cl/");
url3.searchParams.append("q","ñandú");
//console.log(url3);
//https://www.google.cl/search?q=%C3%B1and%C3%BA

//pokemon: construir la url para traer 
//los datos de los primeros 100 pokemons (pokeAPI: https://pokeapi.co/)
var pokeUrl=new URL("pokemon","https://pokeapi.co/api/v2/");
//agregar parametros
pokeUrl.searchParams.append("limit","100")
pokeUrl.searchParams.append("offset","0")
//console.log(pokeUrl);

//obtener el valor de un parametro
//console.log(pokeUrl.searchParams.get("limit"));//100

//obtener si los parametros existen o no en la url
//console.log(pokeUrl.searchParams.has("offset"));//true
//console.log(pokeUrl.searchParams.has("name"));//false

//-----------------------------------------------------------------------------
//solicitudes hacia APIs (similar al fetch)
//creamos un objeto request
var request= new  XMLHttpRequest();

//agregar evento para cuando la respuesta llegue
request.addEventListener("load",function(e){
    console.log("listo!!");
    console.log("status code:" + request.status);
    console.log("status:" + request.statusText);
    console.log("response:" + request.response);    
    console.log("texto response" + request.responseText);
})
//implementar el evento para cuando cambie el etstado de la request
request.onreadystatechange=function(){
    if(request.readyState==0){ //UNSENT
        console.log("iniciando");
    }else if(request.readyState==1){ //OPENED
        console.log("abriendo");
    }else if(request.readyState==2){ //HEADERS_RECEIVED
        console.log("recibiendo headers");
    }else if(request.readyState==3){ //LOADING
        console.log("loading");
    }else if(request.readyState==4){ //DONE
        console.log("finalizado");
        console.log(request.response);
    }
}

//inicializar
request.open("GET","https://dog.ceo/api/breeds/image/random",true);

//ejecutar (descomentar para ejecutar ejercicio)
//**************************************** */
//request.send();//******descomentar para ver ejecucion

//-------------------------------------------------------------------------------------------

//creamos la request
var request2=new XMLHttpRequest();
//inicializamos
request2.open("PUT","https://reqres.in/api/users/2",true);
//agregar header
request2.setRequestHeader("Content-Type","application/json");
//agregar evento para cuando la respuesta llegue
request2.addEventListener("load",function(e){
    console.log(request2.status);
    console.log(request2.response);
})
//generar datos
var usuario={
    id:2,
    name:"denis",
    job:"profesor",
    email:"pachinx@gmail.com"
}
//enviar
request2.send(JSON.stringify(usuario));

//insertar un usuario en reqres-------------------------------------------------
//creamos la request
var post=new XMLHttpRequest();
//abrir
post.open("POST","https://reqres.in/api/users/",true);
//agregar header
post.setRequestHeader("Content-Type","application/json");
//evento
post.addEventListener("load",function(e){
    console.log(post.status);
    console.log(post.response);
})
//crear el usuario que se enviará para insertar
var usuario2={
    name:"alejandra",
    email:"alejandra@gmail.com",
    job:"estudiante"
}
post.send(JSON.stringify(usuario2));

//--------------------------
//lo mismo con fetch
async function insertarUsuario(){
    let respuesta=await fetch("https://reqres.in/api/users/",{
        method:"POST",
        header:{"Content-type":"application/json"},
        body:JSON.stringify(usuario2)
    })
    console.log(respuesta.status)
    let datos=await respuesta.json();
    console.log("datos:" + JSON.stringify(datos));
}
insertarUsuario();


//------------------------------------------------------------------------------------------
//formularios
var formulario=document.querySelector("#formulario");
formulario.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("enviando...");
    //forma de obtener todos los datos del formulario de una sola ves
    let datos=new FormData(formulario);
    //datos.forEach((v,k)=>console.log(k+":"+v));
    //console.log(JSON.stringify(Object.fromEntries(datos)));
    let r=new XMLHttpRequest();
    r.open("POST","https://reqres.in/api/users/",true);
    r.setRequestHeader("Content-Type","application/json");
    r.addEventListener("load",function(e){
        console.log(r.status);
        console.log(r.response);
    })
    r.send(JSON.stringify(Object.fromEntries(datos)));

})
