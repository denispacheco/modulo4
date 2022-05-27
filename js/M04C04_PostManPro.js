async function enviarRequest(url,opciones){
    let respuesta =await fetch(url,opciones);   
    let textoStatus = respuesta.status +" - " + (respuesta.status<300?"OK":"ERROR");
    document.querySelector("#textoStatus").innerText=textoStatus;
        
    let datos= respuesta.status==204?"":await respuesta.json();
    
    if (datos){
        document.querySelector("#respuestaJson").innerText=JSON.stringify(datos);
    }else{
        document.querySelector("#respuestaJson").innerText=""
    }    
}

document.querySelector("#enviar").addEventListener("click",async e=>{
    let opciones={
        method:document.querySelector("#verbo").value,
        header:{"Content-Type":"application/json"}
    }
    if(document.querySelector("verbo"=="GET")){
        opciones.body= document.querySelector("#textoJson").value
    }
    await enviarRequest(document.querySelector("#url").value,opciones);
})