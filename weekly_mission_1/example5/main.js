const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el modulo logger
logger.log('This is an informational message')

/*
Tambien puede instanciar uno nuevo de esta manera:
    const customLogger = new logger.constructor('CUSTOM')
    customLogger.log('This is an informational message')
*/