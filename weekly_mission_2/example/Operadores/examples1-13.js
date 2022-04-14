// Ejemplo 13: uso de findIndex, este metodo refresa la posicion del primer elemento con la validacion que indiques

const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']// cuenta el tamano de la palabra en este caso mayor a 7 letras
const result = names13.findIndex((name) => name.length > 7 )
console.log("Ejemplo 13: Primer elemento cuya paralabra sea mayor a 7 esta en la posicion " + result)