//variables
var contenedor=document.querySelector("#contenedor");
var urlBase="https://jsonplaceholder.typicode.com/";

//funciones
function construirPost(datosPost,nombreUsuario){
    let nombre=document.createElement("h4");
    let titulo=document.createElement("h2");
    let texto=document.createElement("p");
    let post=document.createElement("div");
    
    //---------------------------------
    nombre.innerText=nombreUsuario;
    nombre.classList.add("display-6");
    titulo.innerText=datosPost.title;    
    texto.innerText=datosPost.body;
    texto.classList.add("lead")
    post.classList.add("border", "border-1", "border-success","rounded","my-4","mx-3","p-3");
    //-----------------------------
    post.appendChild(nombre);
    post.appendChild(titulo);
    post.appendChild(texto);
    contenedor.appendChild(post);

    post.addEventListener("click",async function(e){
        let comentarios = post.querySelector("div")
        console.log(comentarios);
        if(comentarios){
            console.log("SI");
            post.removeChild(comentarios);            
        }else{
            comentarios=document.createElement("div");
            //comentarios.setAttribute("id","comentarios");
            let datos=await cargarComentarios(datosPost.id);
            datos.map(d=>comentarios.appendChild(crearComentario(d)))
            post.appendChild(comentarios);
        }
    })
}

function crearComentario(datos) {
    let titulo=document.createElement("h5");
    let texto=document.createElement("p");
    let comentario=document.createElement("div");
    //---------------------------------------
    titulo.innerText=datos.name;
    texto.innerText=datos.body;
    comentario.classList.add("border-top","border-success","py-3")
    //---------------------------------------
    comentario.appendChild(titulo);
    comentario.appendChild(texto);
    return comentario;
}



//funciones de API
async function cargarPosts(){
    let respuesta=await fetch(urlBase+"posts");
    if (respuesta.ok){
        let datos=await respuesta.json();
        console.log(datos);
        datos.map(async d=>{
            let nombreUsuario=await cargarUsuario(d.userId)        
            construirPost(d,nombreUsuario);
        })

        
    }
}
async function cargarUsuario(id){
    let respuesta=await fetch(urlBase+"users/"+id);
    console.log(respuesta);
    if (respuesta.ok){
        let datos=await respuesta.json();
        return datos.name;
    }
    return null;
}
async function cargarComentarios(idPost){
    let respuesta=await fetch(urlBase+"posts/"+idPost+"/Comments");
    console.log(respuesta);
    if (respuesta.ok){
        let datos=await respuesta.json();
        return datos;
    }
    return null;
}
//hilo de ejecución principal
cargarPosts();