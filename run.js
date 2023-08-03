// • En el fichero run.js (fichero del programa principal) escribir la sentencia:
// - let myLib = require("./index");
// • Llamar a todas las funciones de la librería e imprimir sus resultados.
// - NOTA: Para llamar a la función hay que hacer myLib.función. Ej: myLib.suma(2,3)

let myLib = require("./index");
let s= myLib.suma(3,2,7);
let r= myLib.resta(5,2);
let p= myLib.producto(9,2);
let d= myLib.division(10,2);
let c= myLib.cuadrado(5);
console.log(r,p,d,c);