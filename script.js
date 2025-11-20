/*Archivo de JavaScript*/

let a = parseFloat(prompt("Ingrese el primer número:"));
let b = parseFloat(prompt("Ingrese el segundo número:"));

//Funciones de operaaciones 
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
   return a/b;
}

//Se muestran los resultados, se imprimen en la consola, se concatena cada operacion son su funcion, llamando los argumentos entre parentesis
console.log("Suma: " + sumar(a, b));
console.log("Resta: " + restar(a, b));
console.log("Multiplicación: " + multiplicar(a, b));
console.log("División: " + dividir(a, b));