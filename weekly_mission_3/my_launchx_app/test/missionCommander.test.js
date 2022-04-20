const MissionCommander = require ('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test ('1) Create a mission commander objet', () =>{
    //test ('Caso de prueba 1', () => {
        //Aqui puedes usar el codigo como lo deseas utilizar 
        //const result = 1 + 2
        const myMissioncomander = new MissionCommander("Woopa")

        //Validar el resultado esperado 
        expect (myMissioncomander.name).toBe("Woopa");
    });
})