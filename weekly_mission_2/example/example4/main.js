import Viajero from './Viajero.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

const viajero1 = new Viajero("Bernardo", "LaunchX", "Node JS", "Abril 2022")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo())//Métdo de la clase hija