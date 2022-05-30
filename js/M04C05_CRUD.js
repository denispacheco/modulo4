//variables
var botonAgregar= document.querySelector("#btAgregar");
var formulario=document.querySelector("#formulario")
var urlBase="https://reqres.in/api/users"
var contenedor=document.querySelector("#contenedor");
var botonGuardar=document.querySelector("#btGuardar");
var nuevoNombre=document.querySelector("#nuevoNombre");
var nuevoCorreo=document.querySelector("#nuevoCorreo");
//---------------------------------------------------------------
//Eventos
botonAgregar.addEventListener("click",function(e){
    let estado = formulario.style.visibility;    
    if(estado=="hidden"){
        formulario.style="visibility:visble"
    }else{
        formulario.style="visibility:hidden"
    }
})
botonGuardar.addEventListener("click",async function(e){
    let usuario={
        first_name:nuevoNombre.value,
        email:nuevoCorreo.value
    }
    
    let ok = await insertarUsuario(usuario);

    usuario.avatar="img/avatar.png";
    if (ok){
        agregarUsuario(usuario);
        nuevoNombre.value="";
        nuevoCorreo.value="";
    }
    formulario.style="visibility:hidden"
})
//------------------------------------------------------
//funciones
function agregarUsuario(usuario){
    let cont=document.createElement("div");
    let foto=document.createElement("img");
    let nombre=document.createElement("h3");
    let nombreEdit=document.createElement("input");
    let email=document.createElement("p");
    let emailEdit=document.createElement("input");
    let btUpdate=document.createElement("button");
    let btDelete=document.createElement("button");
    let btGuardarCambios=document.createElement("button");
    //-------------------------------------
    foto.setAttribute("src",usuario.avatar);
    nombre.innerText=usuario.first_name;
    nombreEdit.value=usuario.first_name;
    nombreEdit.setAttribute("type","text");
    nombreEdit.style="display:none"
    email.innerText=usuario.email;
    emailEdit.value=usuario.email;
    emailEdit.setAttribute("type","text");
    emailEdit.style="display:none";
    btUpdate.innerText="Actualizar";
    btDelete.innerText="Eliminar";
    btGuardarCambios.innerText="Guardar";
    btGuardarCambios.style="display:none";
    btDelete.addEventListener("click",async function(e){
        let ok= await eliminarUsuario(usuario.id)
        if (ok){
            contenedor.removeChild(cont);
        }
    })
    btUpdate.addEventListener("click",function(e){
        nombre.style="display:none"
        email.style="display:none";
        nombreEdit.style="display:block"
        emailEdit.style="display:block";
        btUpdate.style="display:none";
        btGuardarCambios.style="display:inline";
    })
    btGuardarCambios.addEventListener("click",async function(e){
        let usuario={
            first_name:nombreEdit.value,
            email:emailEdit.value
        }
        console.log(usuario);
        let ok= await actualizarUsuario(usuario)

        if (ok){            
            nombre.innerText=nombreEdit.value;
            email.innerText=emailEdit.value;
            nombre.style="display:block"
            email.style="display:block";
            nombreEdit.style="display:none"
            emailEdit.style="display:none";
            btUpdate.style="display:inline";
            btGuardarCambios.style="display:none";
        }
    })
    //-------------------------------------
    cont.appendChild(foto);
    cont.appendChild(nombre);
    cont.appendChild(nombreEdit);
    cont.appendChild(email);
    cont.appendChild(emailEdit);
    cont.appendChild(btUpdate);
    cont.appendChild(btGuardarCambios);
    cont.appendChild(btDelete);
    //-------------------------------------
    contenedor.appendChild(cont);
}
//------------------------------------------------------------
//funciones API
async function cargarUsuarios(){
    let respuesta = await fetch(urlBase+"?page=1");
    let usuarios=[];
    if (respuesta.ok){
        let datos=await respuesta.json();
        //console.log(datos);
        usuarios.push(...datos.data);
    }
    respuesta = await fetch(urlBase+"?page=2");    
    if (respuesta.ok){
        let datos=await respuesta.json();
        //console.log(datos);
        usuarios.push(...datos.data);
    }
    console.log(usuarios);
    usuarios.map(u=>agregarUsuario(u));
}

async function eliminarUsuario(id){
    let respuesta = await fetch(urlBase+"/"+id,{
        method:"delete"        
    });
    console.log(respuesta);
    return respuesta.ok
}

async function actualizarUsuario(usuario){
    let respuesta = await fetch(urlBase+"/"+usuario.id,{
        method:"put",
        header:{"content-type":"application/json"},
        body:JSON.stringify(usuario)        
    });
    console.log(respuesta);
    return respuesta.ok
}

async function insertarUsuario(usuario){
    let respuesta = await fetch(urlBase+"/",{
        method:"post",
        header:{"content-type":"application/json"},
        body:JSON.stringify(usuario)        
    });
    console.log(respuesta);
    return respuesta.ok
}
//------------------------------------------------------------
//instrucciones de inicio
cargarUsuarios();