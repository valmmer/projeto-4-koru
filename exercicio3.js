// Exercício 3: filter e find

const students = [
  { id: 1, name: "João", age: 20, grades: [85, 90, 78], active: true },
  { id: 2, name: "Maria", age: 19, grades: [92, 95, 89], active: true },
  { id: 3, name: "Pedro", age: 21, grades: [70, 65, 80], active: false },
  { id: 4, name: "Ana", age: 18, grades: [60, 75, 68], active: true },
  { id: 5, name: "Carlos", age: 22, grades: [90, 88, 92], active: false },
];

// 1. Usando filter para encontrar estudantes com idade >= 20
const olderStudents = students.filter((student) => student.age >= 20);
console.log("Estudantes com 20 anos ou mais:", olderStudents);

// 2. Usando find para encontrar o primeiro estudante com nota > 90
const studentWithHighGrade = students.find((student) => {
  return student.grades.some((grade) => grade > 90);
});
console.log("\nPrimeiro estudante com nota acima de 90:\n",studentWithHighGrade.name);


// 3. Usando filter para encontrar estudantes ativos com média acima de 80
const highPerformingActiveStudents = students.filter((student) => {
  // Calculando a média das notas
  const average =
    student.grades.reduce((sum, grade) => sum + grade, 0) /
    student.grades.length;

  return student.active && average > 80;
});

console.log("\nEstudantes ativos com média acima de 80:");
highPerformingActiveStudents.forEach((student) => console.log(student.name));

//Desafios

console.log('\nDesafios\n')

//a. Use filter para encontrar estudantes inativos
console.log('A - Filter Estudantes Inativos\n')
const inactiveStudents = students.filter((student) => student.active == false);
console.log('Estudantes Inativos:');
inactiveStudents.forEach((student) => console.log(student.name));

//b. Use find para encontrar o estudante com id = 3
console.log('\nB - Find Estudante ID\n');
const studentsId3 = students.find((student) => student.id === 3);
console.log('Estudante com ID 3:\n', studentsId3.name);

//c. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
console.log('\nC - Filter Estudantes Nota\n');
const studentsGradeUnder70 = students.filter((student) => student.grades.some((grade) => grade < 70));
console.log('Estudantes com nota abaixo de 70:');
studentsGradeUnder70.forEach((student) => console.log(student.name));

//d. Combine filter e map para obter apenas os nomes dos estudantes com média > 85
console.log('\nD - Filter e Map');
const studentsGradeAbove85 = students.filter((student) => {
  const averageGrades = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
  
  return averageGrades > 85;
})

console.log('Estudantes com Média Maior que 85:');
studentsGradeAbove85.forEach((student) => console.log(student.name));