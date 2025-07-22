# Projeto 4 - Koru
# 🧪 Aula Prática: Métodos de Array em JavaScript

## 🎯 Objetivos de Aprendizagem

- Relembrar os conceitos de funções, spread e rest
- Utilizar corretamente os métodos de array: `map`, `filter`, `find`, `findIndex`, `forEach`, `every` e `some`
- Resolver problemas do mundo real usando métodos de array
- Combinar diferentes métodos para criar soluções elegantes

---

## 📘 Exercício 1: Relembrando Funções, Spread e Rest

```js
// 1. Função tradicional
function sum(a, b) {
  return a + b;
}

// 2. Arrow function
const multiply = (a, b) => a * b;

// 3. Função com rest parameters
function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// 4. Spread com arrays
const fruits = ["maçã", "banana", "laranja"];
const moreFruits = ["uva", "kiwi"];
const allFruits = [...fruits, ...moreFruits];

// 5. Spread com objetos
const person = { name: "Maria", age: 25 };
const employee = { ...person, id: 1001, department: "Engenharia" };

🧪 Testando as funções

console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(5, 3));
console.log("Média de 3 números:", calculateAverage(4, 6, 8));
console.log("Frutas combinadas:", allFruits);
console.log("Objeto funcionário:", employee);

💡 Desafios

    Crie uma função que recebe um objeto person e retorna um novo objeto com a propriedade isAdult (true se idade ≥ 18).

    Crie uma função que aceita múltiplos arrays como parâmetros e retorna um array combinado com todos os elementos.

🛒 Exercício 2: forEach e map

const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

Exemplos:

// Imprimir produtos com forEach
products.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - R$${product.price}`);
});

// Usar map para nomes
const productNames = products.map(product => product.name);

// Map com desconto
const discountedProducts = products.map(product => ({
  ...product,
  price: product.price * 0.9,
}));

💡 Desafios

    Criar array com "Nome do produto - Categoria"

    Criar array com preços + 15% de imposto

    Usar forEach com acumulador para total geral

🎓 Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

Exemplos:

// Filtrar estudantes com idade ≥ 20
const olderStudents = students.filter(student => student.age >= 20);

// Encontrar estudante com nota > 90
const studentWithHighGrade = students.find(student =>
  student.grades.some(grade => grade > 90)
);

// Estudantes ativos com média > 80
const highPerformingActive = students.filter(student => {
  const avg = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
  return student.active && avg > 80;
});

💡 Desafios

    Filtrar estudantes inativos

    Encontrar estudante com id = 3

    Filtrar estudantes com alguma nota < 70

    Nomes dos estudantes com média > 85

✅ Exercício 4: findIndex, some e every

const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" },
];

Exemplos:

// Índice da tarefa
const meetingIndex = tasks.findIndex(task => task.title === "Participar da reunião");

// Alguma tarefa de alta prioridade?
const hasHighPriority = tasks.some(task => task.priority === "alta");

// Todas as tarefas completas?
const allCompleted = tasks.every(task => task.completed);

// Tarefas incompletas de alta prioridade
const urgentIncomplete = tasks.filter(task => !task.completed && task.priority === "alta");

💡 Desafios

    Índice da primeira tarefa incompleta

    Verificar se alguma tarefa de baixa prioridade foi concluída

    Verificar se TODAS as tarefas de alta prioridade estão incompletas

    Verificar índice de uma tarefa com id = 10 e tratar o caso -1

🛍️ Exercício 5: Desafio Integrador – E-commerce

const inventory = [
  { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
  { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
  { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
  { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
  { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
  { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
  { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];

💡 Desafios

    A) Listar todos os produtos com forEach

    B) Filtrar produtos com stock > 0

    C) Filtrar "Eletrônicos" com price < 1000

    D) Verificar se existe produto sem estoque

    E) Verificar se todos têm pelo menos 1 avaliação (reviews.length > 0)

    F) Índice do produto "Cafeteira"

    G) Primeiro produto da categoria "Vestuário"

    H) Criar função de busca com base no nome

    I) Calcular média das reviews e adicionar averageRating

    J) Encontrar o produto com maior averageRating

💬 Dica: Use e combine os métodos de array para escrever códigos mais limpos e eficientes!
```
