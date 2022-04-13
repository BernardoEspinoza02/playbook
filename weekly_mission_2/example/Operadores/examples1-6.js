// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finlad', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirsThreeLetters = countries6.map((country) => 
  country.toUpperCase().slice(0, 3)//el metodo slice obtiene solo la longitud marcada del string 3 primeras letras
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirsThreeLetters)