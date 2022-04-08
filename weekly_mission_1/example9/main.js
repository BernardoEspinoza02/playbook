const Pokemon = require('./pokemon')// invocas al nombre de la clase

//creacion de nuevos objetos
const pikachu = new Pokemon("pikachu")
const bulbasaur = new Pokemon("bulbasaur")
const squirtle = new Pokemon("squirtle")
const charmander = new Pokemon("Charmander")

//Invocación del metodo
pikachu.sayHello()
pikachu.sayMessage("Heey!")

bulbasaur.sayHello()
bulbasaur.sayMessage("Heey!")

squirtle.sayHello()
squirtle.sayMessage("Heey!")

charmander.sayHello()
charmander.sayMessage("Heey!")
