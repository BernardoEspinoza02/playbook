export default class Pokemon {
    constructor (name) {
        this.name = name 
    }

    sayHello (message) {
        console.log (`${this.name} ${message}`)
    }
}
