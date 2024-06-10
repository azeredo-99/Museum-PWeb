 // Função para adicionar ao carrinho
 function adicionarAoCarrinho(ticketDetails) {
    // Aqui você pode implementar a lógica para adicionar os bilhetes ao carrinho
    console.log('Ticket added to basket:', ticketDetails);
    // Redireciona para a página do carrinho
    window.location.href = '/pages/ENG/carrinhoEng.html';
}

// Evento de clique no botão "Adicionar ao Carrinho"
document.getElementById('addToCartBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const ticketType = document.getElementById('ticketType').value;
    const visitDate = document.getElementById('visitDate').value;
    const numberOfTickets = document.getElementById('numberOfTickets').value;
    const ticketDetails = {
        type: ticketType,
        date: visitDate,
        quantity: numberOfTickets
    };
    adicionarAoCarrinho(ticketDetails);
});