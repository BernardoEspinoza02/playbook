/**
 Este ejemplo incluye dependencias. Es tu línea de comando ve a este proyecto y ejetucta el 
 comando `npm install` para decargar las dependencias, esto creara una carpeta node_modules
 */

export default class Pokemon{
    constructor(name, type, age){
        this.name =  name
        this.type =  type
        this.age =  age
        this.attacks = []
    }

    get getAttacks(){
        return this.attacks
    }
    
    set setAttacks(attacks){
        return this.attacks = attacks
    }

}

const myPokemon = new Pokemon("Charmander", "Fuego", 10)
console.log(myPokemon)