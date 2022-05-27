//crear las variables globales y cargar los elementos html
//carga del select para obtener el verbo
const selectVerbo = document.querySelector("#verbo");
//carga del input para obtener el url
const inputUrl=document.querySelector("#url");
//carga del textarea para obtner el json del body
const textJSON=document.querySelector("#textoJson");
//cargar el header de la respuesta
let textStatus=  document.querySelector("h3");
//cargar el parrafo de la respuesta
let textoRespuesta=document.querySelector("p");
//crgar el boton
let botonEnviar=document.querySelector("#enviar");
//-------------------------------------------------------------
//funciones
//GET
async function enviarGET(url){    
    let respuesta = await fetch(url);    
    textStatus.innerText="código:" + respuesta.status;
    textStatus.innerText+= "   " + respuesta.status<300?"OK":"Error";
    let datos=await respuesta.json();    
    textoRespuesta.innerText=JSON.stringify(datos);
}
//POST
async function enviarPOST(url){
    let respuesta = await fetch(url,{
        method: "POST",
        header:{"Content-Type":"application/json"},
        body: textJSON.innerText
    });
    textStatus.innerText="código:" + respuesta.status;
    textStatus.innerText+= "   " + respuesta.status<300?"OK":"Error";
    let datos=await respuesta.json();
    textoRespuesta.innerText=JSON.stringify(datos);
}
//PUT
async function enviarPUT(url){
    let respuesta = await fetch(url,{
        method:"PUT",
        header:{"Content-Type":"application/json"},
        body: textJSON.innerText
    });
    textStatus.innerText="código:" + respuesta.status;
    textStatus.innerText+= "   " + respuesta.ok?"OK":"Error";
    let datos=await respuesta.json();
    textoRespuesta.innerText=JSON.stringify(datos);
}
//PUT
async function enviarPATCH(url){
    let respuesta = await fetch(url,{
        method:"PATCH",
        header:{"Content-Type":"application/json"},
        body: textJSON.innerText
    });
    textStatus.innerText="código:" + respuesta.status;
    textStatus.innerText+= "   " + respuesta.ok?"OK":"Error";
    let datos=await respuesta.json();
    textoRespuesta.innerText=JSON.stringify(datos);
}
//DELTE
async function enviarDELETE(url){
    let respuesta = await fetch(url,{
        method:"DELETE"
    });
    textStatus.innerText="código:" + respuesta.status;
    textStatus.innerText+= "   " + respuesta.ok?"OK":"Error";    
    textoRespuesta.innerText="";
}
//-------------------------------------------------------------
//eventos
botonEnviar.addEventListener("click",async function(e){
    let url =  inputUrl.value;
    let verbo = selectVerbo.value;
    if (verbo=="GET"){
        await enviarGET(url);
    }else if(verbo=="POST"){
        await enviarPOST(url);
    }else if(verbo=="PUT"){
        await enviarPUT(url);
    }else if(verbo=="PATCH"){
        await enviarPATCH(url);
    }else{
        await enviarDELETE(url);
    }
})
