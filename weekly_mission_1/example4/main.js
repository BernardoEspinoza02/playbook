const Logger = require('./logger')// Invocas el modulo que contiene la clase

// Cracion de un objeto 
const dbLogger = new Logger('DB')//Creas un objeto nuevo, esto llama por default el constructo de la clase
//inovacion del metodo
dbLogger.info('This is an informational message')

//Creacion de otro objeto 
const accessLogger = new Logger ('ACCESS')
accessLogger.verbose ('This is a Verbose message')