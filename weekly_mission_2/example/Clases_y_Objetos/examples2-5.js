//Ejemplo 5: Atributos con valores por default
class PullRequest {
    constructor(repo, title, lines_changed){
        this.repo = repo
        this.title = title
        this.lines_changed = lines_changed 
        this.status ='Open'
        this.dateCreated = new Date()//Esto guardara la fecha actual en que se instancia el objeto 
    }
  getInfo(){
      return`This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi primer PR", 100)
console.log(myPR1.getInfo())

//Puedes instanciar n cantidad de objetos en la misma clase
const myPr2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPr2.getInfo())

//Puedes instanciar n cantidad de objetos en la misma clase
const myPr3 = new PullRequest("LaunchX", "Mi segundo PR", 98)
console.log(myPr3.getInfo())