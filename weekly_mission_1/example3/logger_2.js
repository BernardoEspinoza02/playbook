/*
    Al exportar una funcion/objeto asi:

    >module.exports.verbose

    Estaremos exportando el contenido con el nombre `verbose`

    module.exports hara que quedas invocar esta funcion en otro script como:
    > const logger = require('./logger')

    y usarla como:

    > logger.verbose("Heeey")
*/

module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}