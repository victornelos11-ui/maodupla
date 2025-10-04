
// Função para mostrar produtos
function mostrarProdutos() {
  const container = document.getElementById('produtos-container');
  if (!container) return;

  const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
  container.innerHTML = '';

  produtos.forEach((produto) => {
    const div = document.createElement('div');
    div.classList.add('produto');
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
    `;
    container.appendChild(div);
  });
}

// Função para adicionar produto
const form = document.getElementById('produtoForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nomeProduto').value;
    const descricao = document.getElementById('descricaoProduto').value;
    const imagem = document.getElementById('imagemProduto').value;

    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtos.push({ nome, descricao, imagem });
    localStorage.setItem('produtos', JSON.stringify(produtos));

    alert('Produto adicionado!');
    form.reset();
  });
}

// Carregar produtos ao abrir a página
mostrarProdutos();
