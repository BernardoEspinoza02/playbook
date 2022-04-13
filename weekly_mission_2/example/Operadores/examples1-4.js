//Ejemplo 4: Uso de map para recorrer los elemntos de una lista y crear una nueva lista
/* Arrow function and explicit return
const modifiedArray = arr.map((element,indedx) => element);
*/
const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num){ return num * num})
//Tambien puedes escribir la funcion como fat arrow 
//const numbersSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(numbersSquare)