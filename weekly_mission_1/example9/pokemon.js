class Pokemon{ //clase llamada pokemon
    constructor(name) { //Contructor que recibe el nombre
        this.name = name 
    }

    sayHello (message) {//funcion que nombre pokemon
        console.log(`Mi pokemon ${this.name} te saluda!!!`)//impresion mensaje consola
    }

    sayMessage (message){//funcion saludo pokemon
        console.log(`Mi pokemon ${this.name} dice: ${message}`)//impresion mensaje consola
    } 
}

module.exports = Pokemon //exporta la clase al modulo Pokemon