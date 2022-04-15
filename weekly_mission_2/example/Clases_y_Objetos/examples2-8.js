//Ejemplo 8: Métodos static nos ayuda a escribir en una clase que podemos usar sin necesidad de 
//iniciar algún objeto
class ToolBox{
    static getMostUsefulTools(){
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("Ejemplo 8: Método static")
//Puedo llamar el método static direcctamente con el nombre de la clase
console.log(ToolBox.getMostUsefulTools())
//Si intentamos instanciar un objeto, no podemos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools())//is not a function

/*
HERENCIA: Nos permite relacionar clases entre si y rehusar sus componentes
*/