
function adicionarProduto(id, nome, valor, quantidade) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ id, nome, valor, quantidade });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho(); 
}

function removerProduto(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho = carrinho.filter(produto => produto.id != id);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

function exibirCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    if (carrinho.length > 0) {
        carrinho.forEach(produto => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${produto.nome} - Quantidade: ${produto.quantidade} - Valor: R$${produto.valor.toFixed(2)}
                <button onclick="removerProduto(${produto.id})">Remover</button>
            `;
            listaProdutos.appendChild(li);
        });
    } else {
        listaProdutos.innerHTML = 'O carrinho está vazio!';
    }
}


function adicionandoManualmente(event) {
    event.preventDefault();
    const id = document.getElementById('produto-id').value;
    const nome = document.getElementById('produto-nome').value;
    const valor = parseFloat(document.getElementById('produto-valor').value);
    const quantidade = parseInt(document.getElementById('produto-quantidade').value);

    adicionarProduto(id, nome, valor, quantidade);
    document.querySelector('form').reset();
}
exibirCarrinho();