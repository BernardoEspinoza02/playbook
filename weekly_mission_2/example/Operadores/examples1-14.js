/* Ejemplo 14: uso de some, este metodo validara todos los elemetos de la lista 
y si alguno cumple con la validacion indicada, regresara true, de lo contrario 
sera false */

//lista de elementos

const bools = [true, false, true, true]
//Uso de Some para ver si al menos uno de los elementos es false 
const areSomeTrue = bools.some((b) => b=== false)
console.log("Ejemplo 14: Alguno dee los elemtos en el array es false: " + areSomeTrue)//true