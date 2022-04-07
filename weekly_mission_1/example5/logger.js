class Logger{
    constructor(name){
    // Al crear este objeto se guardaran estos valores
    this.count = 0
    this.name = name
    }
    log(message) {
        this.count++//se aunmentara el contador interno al llamar este metodo
        console.log('[' + this.name + ']' + message)
    }
}

module.exports = new Logger('DEFAULT') // Instalacion del objeto y se exporta