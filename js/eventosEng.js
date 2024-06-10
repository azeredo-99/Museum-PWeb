// Lista de eventos
const eventos = [
    { museu: "Louvre Museum", nome: "Ancient Art Exhibition", descricao: "An exhibition of ancient art with incredible pieces from various civilizations.", imagem: "images/evento1.jpg", date: "2024-05-25" },
    { museu: "British Museum", nome: "Historical Tour", descricao: "A historical tour of the British Museum's most famous artifacts.", imagem: "images/evento2.jpg", date: "2024-06-15" },
    { museu: "Louvre Museum", nome: "Presentation of Famous Paintings", descricao: "A presentation of the world's most famous paintings, including the Mona Lisa.", imagem: "images/evento3.jpg", date: "2024-07-05" },
    { museu: "British Museum", nome: "Egyptian Exhibition", descricao: "A unique exhibition about Egyptian civilization and its mysteries.", imagem: "images/evento4.jpg", date: "2024-07-20" },
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
                        <p class="card-text"><small class="text-muted">Date: ${evento.date}</small></p>
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
