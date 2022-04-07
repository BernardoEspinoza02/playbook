// logger.js 

//Esta es una funcion que se guradara en este modulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
}

// Esta es una funcion  que se guradara en este modulo como verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}

/*
const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
* */