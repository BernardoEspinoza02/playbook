const repo = {
    name: "LaunchX",
    author: "Carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo", repo.name)
console.log("Author: ", repo.author)
console.log("Language: ", repo.language)
console.log("Commits: " + repo.numberOfCommits)
console.log("Numbers Stars: ", repo.stars)
console.log("Issues Totales: ", repo.getTotalIssues())
console.log(repo.getGeneralInfo())