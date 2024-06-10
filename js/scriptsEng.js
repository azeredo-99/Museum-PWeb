// Função para adicionar um evento de clique ao botão de adicionar ao carrinho
document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }
});

// Função para adicionar itens selecionados ao carrinho
function addToCart(event) {
    event.preventDefault();

    // Obter valores selecionados
    const museumSelect = document.getElementById('museumSelect');
    const selectedMuseum = museumSelect.options[museumSelect.selectedIndex].text;
    const quantityInput = document.getElementById('quantityInput').value;
    const dateInput = document.getElementById('dateInput').value;

    // Validar se foram selecionados um museu e uma data
    if (selectedMuseum && quantityInput && dateInput) {
        // Adicionar item ao carrinho (implementação depende do seu sistema de carrinho)
        // Exemplo: cart.addItem(selectedMuseum, quantityInput, dateInput);
        alert('Ticket added to cart!');
    } else {
        alert('Please select a museum, a number of tickets and a date.');
    }
}
