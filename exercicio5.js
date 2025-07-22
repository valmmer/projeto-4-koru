//Exercício 5: Desafio Integrador – E-commerce

const inventory = [
  {
    id: 1,
    name: "Smartphone",
    price: 500,
    stock: 10,
    category: "Eletrônicos",
    reviews: [4, 5, 3, 5, 4],
  },
  {
    id: 2,
    name: "Notebook",
    price: 1200,
    stock: 5,
    category: "Eletrônicos",
    reviews: [5, 4, 5, 5, 3],
  },
  {
    id: 3,
    name: "Camiseta",
    price: 25,
    stock: 20,
    category: "Vestuário",
    reviews: [4, 3, 4, 5],
  },
  {
    id: 4,
    name: "Cafeteira",
    price: 100,
    stock: 8,
    category: "Cozinha",
    reviews: [3, 2, 5, 4, 2],
  },
  {
    id: 5,
    name: "Fones de Ouvido",
    price: 80,
    stock: 15,
    category: "Eletrônicos",
    reviews: [4, 4, 5, 5, 5, 4],
  },
  {
    id: 6,
    name: "Calça Jeans",
    price: 45,
    stock: 0,
    category: "Vestuário",
    reviews: [4, 3, 4],
  },
  {
    id: 7,
    name: "Liquidificador",
    price: 70,
    stock: 3,
    category: "Cozinha",
    reviews: [3, 4, 3, 5],
  },
];

//💡 Desafios

//   A) Listar todos os produtos com forEach

inventory.forEach((product, index) => {
  console.log(
    `${index + 1}. ${product.name} - Categoria: ${
      product.category
    } - Preço: R$${product.price} - Estoque: ${product.stock}`
  );
});

// B) Filtrar produtos que estão em estoque (stock > 0)
const produtosEmEstoque = inventory.filter((product) => product.stock > 0);

console.log(produtosEmEstoque);

// C) Filtrar produtos da categoria "Eletrônicos" com preço < 1000

const eletronicosBaratos = inventory.filter(
  (product) => product.category === "Eletrônicos" && product.price < 1000
);

eletronicosBaratos.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - Preço: R$${product.price}`);
});

// D) Verificar se há algum produto sem estoque

const temProdutoSemEstoque = inventory.some((product) => product.stock === 0);

if (temProdutoSemEstoque) {
  console.log("Existe pelo menos um produto sem estoque.");
} else {
  console.log("Todos os produtos estão com estoque disponível.");
}

// E) Verificar se todos os produtos têm pelo menos uma avaliação (review)

const todosTemReview = inventory.every((product) => product.reviews.length > 0);

if (todosTemReview) {
  console.log("Todos os produtos têm pelo menos uma avaliação.");
} else {
  console.log("Nem todos os produtos têm avaliações.");
}

// F) Encontrar o índice do produto "Cafeteira"

const indiceCafeteira = inventory.findIndex(
  (product) => product.name === "Cafeteira"
);

if (indiceCafeteira !== -1) {
  console.log(
    `O produto "Cafeteira" foi encontrado no índice ${indiceCafeteira}.`
  );
} else {
  console.log('Produto "Cafeteira" não encontrado no inventário.');
}

// G) Encontrar o primeiro produto da categoria "Vestuário"

const primeiroVestuário = inventory.find(
  (product) => product.category === "Vestuário"
);

if (primeiroVestuário) {
  console.log("Primeiro produto da categoria Vestuário:");
  console.log(primeiroVestuário);
} else {
  console.log("Nenhum produto encontrado na categoria Vestuário.");
}

// H) Criar uma função de busca que retorna produtos cujo nome contenha um termo específico.

// Função de busca
function buscarProdutosPorNome(term) {
  const termoMinusculo = term.toLowerCase();

  return inventory.filter((product) =>
    product.name.toLowerCase().includes(termoMinusculo)
  );
}

// Criando o termo "note"
const termoDeBusca = "cami";

// Usando a função com o termo "note"
const resultados = buscarProdutosPorNome(termoDeBusca);

// Exibindo os produtos encontrados
console.log(`Produtos que contêm "${termoDeBusca}":`);
resultados.forEach((product, index) => {
  console.log(`${index + 1}. ${product.name} - Preço: R$${product.price}`);
});

// I) Calcular a média de avaliações para cada produto e adicionar como propriedade "averageRating"

const inventoryWithAverage = inventory.map((product) => {
  // Somar todas as avaliações
  const total = product.reviews.reduce((sum, rating) => sum + rating, 0);
  // Calcular a média, prevenindo divisão por zero
  const average =
    product.reviews.length > 0 ? total / product.reviews.length : 0;

  return {
    ...product, // copia as propriedades originais
    averageRating: Number(average.toFixed(2)), // adiciona a média arredondada
  };
});

// Mostrar os produtos com a média formatada
console.log(`Media de avaliações dos produtos:`);
inventoryWithAverage.forEach(({ name, averageRating }) => {
  console.log(`${name} - Avaliação média: ${averageRating}`);
});

// J) Encontrar o produto com a maior média de avaliações

const produtoMelhorAvaliado = inventory.reduce((melhor, atual) => {
  const mediaAtual =
    atual.reviews.length > 0
      ? atual.reviews.reduce((soma, r) => soma + r, 0) / atual.reviews.length
      : 0;

  const mediaMelhor =
    melhor.reviews.length > 0
      ? melhor.reviews.reduce((soma, r) => soma + r, 0) / melhor.reviews.length
      : 0;

  return mediaAtual > mediaMelhor ? atual : melhor;
});

console.log(
  `Produto com melhor avaliação média: ${produtoMelhorAvaliado.name}`
);
