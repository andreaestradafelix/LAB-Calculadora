/*Archivo de JavaScript*/

let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));

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

console.log("Suma: " + sumar(a, b));
console.log("Resta: " + restar(a, b));
console.log("Multiplicación: " + multiplicar(a, b));
console.log("División: " + dividir(a, b));