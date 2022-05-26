
async function obtenerDatosPokemon(){
    let respuesta= await fetch("https://pokeapi.co/api/v2/pokemon/458");
    console.log(respuesta);
    let datos= await respuesta.json();
    console.log(datos);
}


obtenerDatosPokemon();
//Request
//Headers
//