// Lista de eventos
const eventos = [
    { museu: "Louvre Museum", nome: "Exposição de Arte Clássica", descricao: "Uma exposição de arte clássica com obras renomadas.", imagem: "images/evento1.jpg", data: "15 de janeiro de 2025" },
    { museu: "Louvre Museum", nome: "Workshop de Escultura", descricao: "Um workshop sobre técnicas de escultura.", imagem: "images/evento2.jpg", data: "5 de março de 2025" },
    { museu: "British Museum", nome: "Palestra sobre Civilizações Antigas", descricao: "Uma palestra sobre as civilizações antigas e suas contribuições.", imagem: "images/evento3.jpg", data: "20 de fevereiro de 2025" },
    { museu: "British Museum", nome: "Apresentação de Arte Moderna", descricao: "Uma apresentação sobre as tendências na arte moderna.", imagem: "images/evento4.jpg", data: "10 de abril de 2025" },
    { museu: "Museu de Esposende", nome: "Conferência sobre Renascimento", descricao: "Uma conferência sobre o Renascimento e sua influência na arte.", imagem: "images/evento5.jpg", data: "15 de maio de 2025" },
    { museu: "Museu de Esposende", nome: "Workshop de Pintura", descricao: "Um workshop prático de técnicas de pintura.", imagem: "images/evento6.jpg", data: "30 de maio de 2025" },
    { museu: "Museu do Prado", nome: "Exposição de Mestres Espanhóis", descricao: "Uma exposição com obras de mestres espanhóis.", imagem: "images/evento7.jpg", data: "1 de junho de 2025" },
    { museu: "Museu do Prado", nome: "Palestra sobre Velázquez", descricao: "Uma palestra sobre a vida e obra de Velázquez.", imagem: "images/evento8.jpg", data: "15 de junho de 2025" },
    { museu: "The Met", nome: "Tour de Arte Egípcia", descricao: "Um tour pelas obras de arte egípcia no The Met.", imagem: "images/evento9.jpg", data: "5 de julho de 2025" },
    { museu: "The Met", nome: "Exposição de Arte Asiática", descricao: "Uma exposição de arte asiática com peças raras.", imagem: "images/evento10.jpg", data: "20 de julho de 2025" },
    { museu: "Museu do Palácio Nacional", nome: "Exposição de Arte Chinesa", descricao: "Uma exposição de arte chinesa antiga e moderna.", imagem: "images/evento11.jpg", data: "10 de agosto de 2025" },
    { museu: "Museu do Palácio Nacional", nome: "Palestra sobre a Dinastia Ming", descricao: "Uma palestra sobre a arte durante a Dinastia Ming.", imagem: "images/evento12.jpg", data: "25 de agosto de 2025" },
    { museu: "Galeria Nacional de Londres", nome: "Exposição de Arte Europeia", descricao: "Uma exposição com obras de artistas europeus.", imagem: "images/evento13.jpg", data: "1 de setembro de 2025" },
    { museu: "Galeria Nacional de Londres", nome: "Workshop de Desenho", descricao: "Um workshop sobre técnicas de desenho.", imagem: "images/evento14.jpg", data: "15 de setembro de 2025" },
    { museu: "Museu d'Orsay", nome: "Exposição de Impressionismo", descricao: "Uma exposição de obras impressionistas.", imagem: "images/evento15.jpg", data: "1 de outubro de 2025" },
    { museu: "Museu d'Orsay", nome: "Palestra sobre Monet", descricao: "Uma palestra sobre a vida e obra de Monet.", imagem: "images/evento16.jpg", data: "15 de outubro de 2025" },
    { museu: "Reina Sofia", nome: "Exposição de Arte Contemporânea", descricao: "Uma exposição sobre as tendências da arte contemporânea.", imagem: "images/evento17.jpg", data: "1 de novembro de 2025" },
    { museu: "Reina Sofia", nome: "Palestra sobre Picasso", descricao: "Uma palestra sobre a vida e obra de Picasso.", imagem: "images/evento18.jpg", data: "15 de novembro de 2025" },
    { museu: "Hermitage", nome: "Exposição de Arte Russa", descricao: "Uma exposição sobre a arte russa ao longo dos séculos.", imagem: "images/evento19.jpg", data: "1 de dezembro de 2025" },
    { museu: "Hermitage", nome: "Palestra sobre Fabergé", descricao: "Uma palestra sobre a obra de Peter Carl Fabergé.", imagem: "images/evento20.jpg", data: "15 de dezembro de 2025" },
    { museu: "Museu de Arte Moderna", nome: "Exposição de Arte do Século XX", descricao: "Uma exposição com obras do século XX.", imagem: "images/evento21.jpg", data: "5 de janeiro de 2026" },
    { museu: "Museu de Arte Moderna", nome: "Palestra sobre Arte Abstrata", descricao: "Uma palestra sobre o movimento de arte abstrata.", imagem: "images/evento22.jpg", data: "20 de janeiro de 2026" },
    { museu: "Museu de Xangai", nome: "Exposição de Arte Chinesa Contemporânea", descricao: "Uma exposição com obras de artistas chineses contemporâneos.", imagem: "images/evento23.jpg", data: "5 de fevereiro de 2026" },
    { museu: "Museu de Xangai", nome: "Palestra sobre Arte Chinesa", descricao: "Uma palestra sobre a evolução da arte chinesa.", imagem: "images/evento24.jpg", data: "20 de fevereiro de 2026" },
    // Adicione mais eventos conforme necessário
];

// Função para renderizar os eventos na página
function renderEventos(eventos) {
    const eventList = document.getElementById("event-list");
    eventList.innerHTML = ""; // Limpa a lista antes de adicionar os eventos

    eventos.forEach(evento => {
        const eventCard = `
            <div class="col-md-4 mb-4">
                <div class="card event-card">
                    <img src="${evento.imagem}" class="card-img-top" alt="${evento.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${evento.nome}</h5>
                        <p class="card-text">${evento.descricao}</p>
                        <p class="card-text"><small class="text-muted">Data: ${evento.data}</small></p>
                    </div>
                </div>
            </div>
        `;
        eventList.innerHTML += eventCard;
    });
}

// Função para filtrar os eventos por museu
document.getElementById("museum-filter").addEventListener("change", function() {
    const selectedMuseum = this.value;
    if (selectedMuseum === "all") {
        renderEventos(eventos); // Mostra todos os eventos
    } else {
        const filteredEventos = eventos.filter(evento => evento.museu === selectedMuseum);
        renderEventos(filteredEventos); // Mostra apenas os eventos do museu selecionado
    }
});

// Renderiza os eventos ao carregar a página
window.onload = function() {
    renderEventos(eventos);
};

