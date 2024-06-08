// Lista de eventos
const eventos = [
    { museu: "Louvre Museum", nome: "Exposição de Arte Antiga", descricao: "Uma exposição de arte antiga com peças incríveis de várias civilizações.", imagem: "images/evento1.jpg", data: "15 de janeiro de 2025" },
    { museu: "British Museum", nome: "Tour Histórico", descricao: "Um tour histórico pelos artefatos mais famosos do Museu Britânico.", imagem: "images/evento2.jpg", data: "20 de fevereiro de 2025" },
    { museu: "Louvre Museum", nome: "Apresentação de Pinturas Famosas", descricao: "Uma apresentação das pinturas mais famosas do mundo, incluindo a Mona Lisa.", imagem: "images/evento3.jpg", data: "5 de março de 2025" },
    { museu: "British Museum", nome: "Exposição Egípcia", descricao: "Uma exposição única sobre a civilização egípcia e seus mistérios.", imagem: "images/evento4.jpg", data: "10 de abril de 2025" },
    { museu: "Museu de Esposende", nome: "Conferência sobre Renascimento", descricao: "Uma conferência sobre o período do Renascimento e seu impacto na arte e cultura.", imagem: "images/evento5.jpg", data: "15 de maio de 2025" },
    { museu: "British Museum", nome: "Sessão de Cinema Clássico", descricao: "Uma sessão com obras-primas do cinema clássico de todo o mundo.", imagem: "images/evento6.jpg", data: "20 de junho de 2025" },
    { museu: "Louvre Museum", nome: "Workshop de Pintura em Aquarela", descricao: "Um workshop ensinando as técnicas de pintura em aquarela.", imagem: "images/evento7.jpg", data: "25 de julho de 2025" },
    { museu: "British Museum", nome: "Exibição de Arte Contemporânea", descricao: "Uma exposição mostrando as últimas tendências da arte contemporânea.", imagem: "images/evento8.jpg", data: "30 de agosto de 2025" },
    { museu: "Louvre Museum", nome: "Apresentação de Dança Clássica", descricao: "Uma apresentação de rotinas de dança clássica de diferentes culturas.", imagem: "images/evento9.jpg", data: "5 de setembro de 2025" },
    { museu: "British Museum", nome: "Concerto de Música Antiga", descricao: "Um concerto apresentando composições musicais antigas executadas com instrumentos da época.", imagem: "images/evento10.jpg", data: "10 de outubro de 2025" },
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
