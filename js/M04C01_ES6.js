//codigo ES6

var palabra="Altura";

//ES5
if(palabra[0]=="a" || palabra[0]=="A"){
    console.log("OK")
}else{
    console.log("NO");
}

//ES6
let palabraMay=palabra.toUpperCase(); //crea una copia de la palabra pero en mayusculas
console.log("original: " + palabra);
console.log("mayuscula: " + palabraMay);

let resultado =  palabraMay.startsWith("A"); //revisa si la palabra empieza con A
console.log("resultado: " + resultado);

if (palabra.toUpperCase().startsWith("A")){ //simil a la linea 6
    console.log("OK")
}else{
    console.log("NO");
}
//convierte en mayusculas la palabra original
palabra = palabra.toUpperCase()

//------------------------------------------------------
//this: hace referencia a valores o funciones dentro del mismo objeto donde se llama

function ejecutar(){
    console.log("fuera");
}

var objeto={
    ejecutar:function(){
        console.log("dentro");
    },
    comprobar:function(){
        ejecutar();
        this.ejecutar();
    }
}

objeto.comprobar();

//------------------------------------------------------
//funciones flecha

//funcion tradicional
function escribir(texto){
    console.log(texto);
}
escribir("hola");

//funcion flecha
var f = texto=>console.log(texto);
f("hola");


//ejemplo 2 - fucnion que dfevuelve el cuadrado de un número
//version tradicional
function cuadrado(num){
    return num*num;
}
console.log(cuadrado(5));
//en version flecha
var s = num=>num*num;
console.log(s(5));

//ejemplo 3 - funcion sin parametros
//version tradicional
function saludar(){
    console.log("hola");
}
saludar();
//version flecha
f= ()=>console.log("hola");
f();

//ejemplo 4 - funcion con mas de un parametro
function mostrarPersona(nombre, apellido){
    console.log(nombre+" "+apellido);
}
mostrarPersona("denis","pacheco");
//varsion flecha
let m = (n,a)=>    console.log(n+" "+a);
m("alejandra","ruiz");

//construccion de una funcion flecha
//(par1,par2,par3,et...)=>{instruccion1,instruccion2,instruccion3,retorno}
//si hay 1 parametro, se puieden omitir los parentesis
//si hay una isntruccion, se pueden omitir las llaves

//por ejemplo

var notas = [6.5, 5.4, 3.0, 7.0];

//mostrar los numero en pantalla
//con un for tradicional
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);    
}
console.log("----------");
//con map y funcion flecha
notas.map(n=>console.log(n));
var notasCopia=notas.slice(); //crea una copia del arreglo original
//supongamos que quiero subirle 2 decimas a cada nota en el arrgelo
//con un for tradicional
for(i=0;i<notas.length;i++){
    notas[i]=notas[i]+0.2;
}
console.table(notas);
//con map
notasCopia=notasCopia.map(n=>n+0.2);
console.table(notasCopia);
//-----------------------------------------------------------
console.log("-----------------");
//spread: ...

function concatenar(a,b,c){
    console.log(a+":"+b+":"+c);
}

var palabras=["hola","que","tal","festival"];
//version clasica
concatenar(palabras[0],palabras[1],palabras[2]);
//version ES6
concatenar(...palabras); //convierte cada uno delos elemento del arreglo en un elemento individual


//concatenar (unir) los siguientes arreglos:
var arregloA=["a","b","c"];
var arregloB=["d","e","f"];

//esto queda mal, porque quedan solo 4 elementos (en ves de 6) donde el cuarto es el arreglo B completo(d,e,f);
//arregloA.push(arregloB);
//console.log(arregloA);
//solución?
//solucion carretera (for)---------------------------------------------------------------------------
/*for(i=0;i<arregloB.length;i++){
    arregloA.push(arregloB[i]);    
}
console.log(arregloA);*/
//solucion avanzada----------------------------------------------------------------------------------
/*arregloB.map(e=>arregloA.push(e));
console.log(arregloA);
*/
//solucion profesional
arregloA.push(...arregloB); //equivalente a arregloA.push(arregloB[0],arregloB[1],arregloB[2]);
console.log(arregloA);

//----------------------------------------------------------------------------------------------------
//destructuracion (crear un conjunto de variables y asinarles el valor de un arreglo)
const frutas=["pera","manzana","limon","naranja"]
/*let fruta1=frutas[0];
let fruta2=frutas[1];
let fruta3=frutas[2];
let fruta4=frutas[3];*/
//otra solucion

let [fruta1,fruta2,fruta3,fruta4] = frutas;
//let [fruta1,fruta2,fruta3,fruta4]
//es li mismo que
/*let fruta1
let fruta2
let fruta3
let fruta4*/

console.log(fruta1);



