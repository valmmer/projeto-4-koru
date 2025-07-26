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