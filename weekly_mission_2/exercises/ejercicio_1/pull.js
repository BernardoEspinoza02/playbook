const pullrequest = {
    title:"",
    branchName:"",
    dateCreated:"",
    status:"",
    repositoryNameAssociated:"",
    getStatus: function(){
        return `El status del pullreques es: ${this.status}`
    },
    getTitleAndAutor: function(){
        return this.title + this.repositoryNameAssociated

    }

}

console.log("Titulo: ", pullrequest.title)
console.log("Branch Name: ", pullrequest.branchName)
console.log("Día creado: ", pullrequest.dateCreated)
console.log(pullrequest.getStatus())
console.log(pullrequest.getTitleAndAutor())