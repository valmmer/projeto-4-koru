const tasks = [
  { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
  { id: 2, title: "Ler emails", completed: true, priority: "média" },
  { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
  { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
  { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// a. Usando findIndex para encontrar a posição da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log("(a) Índice da primeira tarefa incompleta:", firstIncompleteIndex);

// b. Usando some para verificar se existe alguma tarefa de baixa prioridade completa
const hasCompletedLowPriority = tasks.some(
  task => task.completed && task.priority === "baixa"
);
console.log("(b) Existe tarefa de baixa prioridade completa:", hasCompletedLowPriority);

// c. Usando every para verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityIncomplete = tasks
  .filter(task => task.priority === "alta")
  .every(task => !task.completed);
console.log("(c) Todas as tarefas de alta prioridade estão incompletas:", allHighPriorityIncomplete);

// d. Usando findIndex para encontrar a posição de uma tarefa com id = 10
const taskIndexById10 = tasks.findIndex(task => task.id === 10);
if (taskIndexById10 === -1) {
  console.log("(d) Tarefa com id 10 não encontrada.");
} else {
  console.log("(d) Índice da tarefa com id 10:", taskIndexById10);
}
