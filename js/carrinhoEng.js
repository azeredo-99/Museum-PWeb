// carrinho.js

// Array para armazenar os itens do carrinho
let carrinhoItens = [];

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(item) {
    carrinhoItens.push(item);
    console.log("Item added to cart:", item);
}

// Função para exibir o carrinho
function exibirCarrinho() {
    console.log("Items in cart:", carrinhoItens);
}
