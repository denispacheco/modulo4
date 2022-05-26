//URL base, nunca cambia (para reqres)
const urlBase="https://reqres.in/api/";
//------------------------------------------------------
//GET mas básico
async function leerUsuario(){ //siempre va con async cuando hay un await dentro
    let respuesta = await fetch("https://reqres.in/api/users/100"); //por defecto es un GET de la url sin body y sin headers
    console.log(respuesta)

    if(respuesta.ok){
        let datos =  await respuesta.json()  //obtener los datos del body de la respuesta
        console.log(datos);
    }else{
        console.log("Datos no encontrados");
    }
}
//GET variable, se construye la URL a partir de la base y el numero de usuario
async function leerUsuario(id){
    urlFinal=urlBase+"users/"+id;
    let respuesta = await fetch(urlFinal);
    console.log(respuesta)

    if(respuesta.ok){
        let datos =  await respuesta.json()  //obtener los datos del body de la respuesta
        console.log(datos);
    }else{
        console.log("Datos no encontrados");
    }
}
//------------------------------------------------------
//leerUsuario();
//leerUsuario(10);

//1.- comparar la salida con la respuesta del postman para
//la misma request
//2.- chequear que  la respuesta biene correcta (ok=true)

//ejercicio - crear una función que nos traiga desde reqres un 
//recurso (unknow) unico segun su id
async function leerRecurso(id){
    urlFinal=urlBase+"unknown/"+id;
    let respuesta = await fetch(urlFinal);
    console.log(respuesta)

    if(respuesta.ok){
        let datos =  await respuesta.json()  //obtener los datos del body de la respuesta
        console.log(datos);
    }else{
        console.log("Datos no encontrados");
    }
}
//leerRecurso(5000);

//----------------------------------------------
//const urlBase="https://reqres.in/api/";
let usuario1={
    name:"Denis Pacheco",
    job:"Profesor"
}

async function crearUsuario(usuario){
    urlFinal=urlBase+"users/" //paso 1, crear la ruta    
    //paso 2 - construir el request con:
    //metodo (verbo)
    //header: lo de siempre (cotent type)
    //body: transformando en json el objeto que quiero enviar
    let respuesta = await fetch(urlFinal,{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(usuario)        
    })
    console.log(respuesta);
    //paso 3 - obtener los datos (body)
    let datos= await respuesta.json();
    console.log(datos);
}

crearUsuario(usuario1);

//1.- actualizar un usuario (PUT o PATCH)
async function actualizarUsuario(usuario){
    let urlFinal = urlBase+"users/"+usuario.id;
    let respuesta = await fetch(urlFinal,{
        method:"PUT",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(usuario),
    })
    // Paso 3 - obtener los datos (body)
    let datos = await respuesta.json();
    console.log(datos)
}
let usuario2={
    id:10,
    name:"Alexis",
    Job:"Desarrollador"
}
console.log("usuario original:");
leerUsuario(10);
console.log("usuario modificado:");
actualizarUsuario(usuario2)

//2.- elimnar un usuario 
async function eliminarUsuario(id){
    let urlFinal = urlBase+"users/"+id;
    let respuesta = await fetch(urlFinal,{
        method:"DELETE"
    })    
    if(respuesta.ok){
        console.log("Usuario eliminado exitosamente!");
    }

}
eliminarUsuario(5);
