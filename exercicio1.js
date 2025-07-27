 /* Exercício 1 - Relembrando Funções, Spread e Rest - a) Crie uma função que recebe um objeto person e retorna um novo objeto com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18) */

 const person= {
    name: "Paola",
    age: 23
 };

 
function verificador(idades) {
        return {
            ...person,
            isAdult: person.age >= 18
        };
};

console.log("Essas são as caracteristicas do novo objeto:",verificador(person));

/* Exercício 1 - Relembrando Funções, Spread e Rest - b) Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos (use rest e spread)*/


const sala1 = ['A', 'B', 'C'];
const sala2 = ['D', 'E', 'F'];
const sala3 = ['G', 'H', 'I'];


function escola (...salas){

    let colegio = [];

    for (i = 0; i < salas.length; i++) {
        colegio = [...colegio,...salas[i]];
    }
    
    return (colegio) 

};

console.log ("No colégio temos os alunos: ", escola(sala1, sala2, sala3))