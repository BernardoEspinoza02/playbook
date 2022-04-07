/*
 * Ten en cuenta:
 *    - require('./logger') te dara el objeto creado 
 *    - require('./logger').Logger te regresara la clase
 * 
 * En este caso estamos agregando una funcion mas al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function (){
    console.log('This is a new funcionality')
}