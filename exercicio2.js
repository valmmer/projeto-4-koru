const products = [
  { id: 1, name: "Notebook", price: 1200, category: "Eletrônicos" },
  { id: 2, name: "Camiseta", price: 25, category: "Vestuário" },
  { id: 3, name: "Cafeteira", price: 100, category: "Cozinha" },
  { id: 4, name: "Fones de Ouvido", price: 80, category: "Eletrônicos" },
  { id: 5, name: "Calça Jeans", price: 45, category: "Vestuário" },
];

// 1. Criar array com "Nome do produto - Categoria"
const nomeCategoria = products.map(product => `${product.name} - ${product.category}`);
console.log("Nome - Categoria:");
console.log(nomeCategoria);
console.log("\n");

// 2. Criar array com preços + 15% de imposto
const comImposto = products.map(product => ({
  ...product,
  price: +(product.price * 1.15).toFixed(2)
}));
console.log("Produtos com 15% de imposto:");
console.log(comImposto);
console.log("\n");

// 3. Usar forEach com acumulador para total geral
let total = 0;
products.forEach(product => {
  total += product.price;
});
console.log("Total geral dos preços originais:R$" + total.toFixed(2));