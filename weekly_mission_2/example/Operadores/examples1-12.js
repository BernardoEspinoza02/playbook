//Ejemplo 12: Uso de find en una lista de objetos 
const scores12 = [
    { name: 'A', scores: 95 },
    { name: 'M', scores: 80 },
    { name: 'E', scores: 50 },
    { name: 'M', scores: 85 },
    { name: 'J', scores: 100 }, 
]

const score_less_than_80 = scores12.find((user) => user.scores > 80)
console.log ("Ejemplo 12: Name Score found: " + score_less_than_80.name)
