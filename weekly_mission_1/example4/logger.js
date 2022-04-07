class Logger {
    constructor(name) {
        // this es una variable para referenciar el valor dedl contexto local de esta clase 
        this.name = name //Estas variables se le conoce como atributos
    }
    // metodo
    //this.name es la variable que se guirada en el contexto local
    //message es una variable que se le pasa al ejecutar este metodo
    info (message) {
        console.log(`[objeto con nombre: ${this.name}] info: ${message}`)
    }

    //metodo
    verbose (message) {
        console.log(`[objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

//Esta clase se exporta en este modulo
module.exports = Logger