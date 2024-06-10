        // Função para exibir as informações do bilhete no carrinho
        function exibirDetalhesDoBilhete(ticketDetails) {
            const ticketDetailsDiv = document.getElementById('ticketDetails');
            ticketDetailsDiv.innerHTML = `
                <p><strong>Tipo de Bilhete:</strong> ${ticketDetails.type}</p>
                <p><strong>Data da Visita:</strong> ${ticketDetails.date}</p>
                <p><strong>Número de Bilhetes:</strong> ${ticketDetails.quantity}</p>
            `;
        }

        // Obtém os detalhes do bilhete da URL
        const urlParams = new URLSearchParams(window.location.search);
        const type = urlParams.get('type');
        const date = urlParams.get('date');
        const quantity = urlParams.get('quantity');
        const ticketDetails = {
            type: type,
            date: date,
            quantity: quantity
        };
        
        // Exibe os detalhes do bilhete no carrinho
        exibirDetalhesDoBilhete(ticketDetails);
    