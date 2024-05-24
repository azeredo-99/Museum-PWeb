// Lista de eventos
const eventos = [
    { museu: "Louvre Museum", nome: "Exposição de Arte Antiga", descricao: "Uma exposição de arte antiga com peças incríveis de várias civilizações.", imagem: "images/evento1.jpg", data: "2024-05-25" },
    { museu: "British Museum", nome: "Tour Histórico", descricao: "Um tour histórico pelos artefatos mais famosos do British Museum.", imagem: "images/evento2.jpg", data: "2024-06-15" },
    { museu: "Louvre Museum", nome: "Apresentação de Pinturas Famosas", descricao: "Uma apresentação das pinturas mais famosas do mundo, incluindo a Mona Lisa.", imagem: "images/evento3.jpg", data: "2024-07-05" },
    { museu: "British Museum", nome: "Exposição Egípcia", descricao: "Uma exposição única sobre a civilização egípcia e seus mistérios.", imagem: "images/evento4.jpg", data: "2024-07-20" },
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
