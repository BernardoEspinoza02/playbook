const issue = {
    title: "02 Live 2 Semana 1",
    name_repository: "Semana 1",
    status:"Cerrado",
    numberOfComments: "105 comments",
    label: "Finalizado, LIVE2, Semana-1",
    author:"CarloGilmar",
    dateCreates:"1 de abril 2022",
    lastUpdated:"15 days ago",

    getTitleAndAuthor: function(){
        return this.title + this.author
    },
    getGeneralInfo: function(){
        return `This general info: status: ${this.status}, whas created by, ${this.dateCreates} ,Commnets ${this.numberOfComments} `
    }
}

console.log("Nombre del issue", issue.title)
console.log("Nombre de repositorio", issue.name_repository)
console.log("Estado: ", issue.status)
console.log("Numero de comentarios: ", issue.numberOfComments)
console.log("Etiquetas: ", issue.label)
console.log("Hace cuanto se creo: ", issue.lastUpdated)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
