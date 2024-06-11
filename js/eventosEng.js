// Lista de eventos
const eventos = [
    { museu: "Louvre Museum", nome: "Classical Art Exhibition", descricao: "An exhibition of classical art with renowned works.", imagem: "/images/evento1.jpg", data: "January 15 2025" },
    { museu: "Louvre Museum", nome: "Sculpture Workshop", descricao: "A workshop on sculpture techniques.", imagem: "/images/evento2.jpg", date: "March 5 2025" },
    { museu: "British Museum", nome: "Lecture on Ancient Civilizations", descricao: "A lecture on ancient civilizations and their contributions.", imagem: "/images/evento3.jpg", data: "February 20 2025" },
    { museu: "British Museum", nome: "Modern Art Presentation", descricao: "A presentation on trends in modern art.", imagem: "/images/evento4.jpg", date: "April 10, 2025" },
    { museu: "Museu de Esposende", nome: "Renaissance Conference", descricao: "A conference on the Renaissance and its influence on art.", imagem: "/images/evento5.jpg", data: "May 15 2025" },
    { museu: "Museu de Esposende", nome: "Painting Workshop", descricao: "A practical workshop on painting techniques.", imagem: "/images/evento6.jpg", data: "May 30, 2025" },
    { museu: "Museu do Prado", nome: "Spanish Masters Exhibition", descricao: "An exhibition featuring works by Spanish masters.", imagem: "/images/evento7.jpg", data: "June 1 2025" },
    { museu: "Museu do Prado", nome: "Velázquez Lecture", descricao: "A lecture on the life and work of Velázquez.", imagem: "/images/evento8.jpg", data: "June 15 2025" },
    { museu: "The Met", nome: "Egyptian Art Tour", descricao: "A tour of Egyptian artworks at The Met.", imagem: "/images/evento9.jpg", data: "July 5 2025" },
    { museu: "The Met", nome: "Asian Art Exhibition", descricao: "An exhibition of rare Asian art pieces.", imagem: "/images/evento10.jpg", data: "July 20 2025" },
    { museu: "Museu do Palácio Nacional", nome: "Chinese Art Exhibition", descricao: "An exhibition of ancient and modern Chinese art.", imagem: "/images/evento11.jpg", data: "August 10 2025" },
    { museu: "Museu do Palácio Nacional", nome: "Ming Dynasty Lecture", descricao: "A lecture on art during the Ming Dynasty.", imagem: "/images/evento12.jpg", data: "August 25 2025" },
    { museu: "National Gallery London", nome: "European Art Exhibition", descricao: "An exhibition featuring works by European artists.", imagem: "/images/evento13.jpg", data: "September 1 2025" },
    { museu: "National Gallery London", nome: "Drawing Workshop", descricao: "A workshop on drawing techniques.", imagem: "/images/evento14.jpg", data: "September 15 2025" },
    { museu: "Museu d'Orsay", nome: "Impressionism Exhibition", descricao: "An exhibition of Impressionist works.", imagem: "/images/evento15.jpg", data: "October 1 2025" },
    { museu: "Museu d'Orsay", nome: "Monet Lecture", descricao: "A lecture on the life and work of Monet.", imagem: "/images/evento16.jpg", data: "October 15 2025" },
    { museu: "Reina Sofia", nome: "Contemporary Art Exhibition", descricao: "An exhibition on contemporary art trends.", imagem: "/images/evento17.jpg", data: "November 1 2025" },
    { museu: "Reina Sofia", nome: "Picasso Lecture", descricao: "A lecture on the life and work of Picasso.", imagem: "/images/evento18.jpg", data: "November 15 2025" },
    { museu: "Hermitage", nome: "Russian Art Exhibition", descricao: "An exhibition on Russian art through the centuries.", imagem: "/images/evento19.jpg", data: "December 1 2025" },
    { museu: "Hermitage", nome: "Fabergé Lecture", descricao: "A lecture on the work of Peter Carl Fabergé.", imagem: "/images/evento20.jpg", data: "December 15 2025" },
    { museu: "Museum of Modern Art", nome: "20th Century Art Exhibition", descricao: "An exhibition of 20th century artworks.", imagem: "/images/evento21.jpg", data: "January 5 2026" },
    { museu: "Museum of Modern Art", nome: "Abstract Art Lecture", descricao: "A lecture on the abstract art movement.", imagem: "/images/evento22.jpg", data: "January 20 2026" },
    { museu: "Shanghai Museum", nome: "Contemporary Chinese Art Exhibition", descricao: "An exhibition featuring works by contemporary Chinese artists.", imagem: "/images/evento23.jpg", data: "February 5 2026" },
    { museu: "Shanghai Museum", nome: "Chinese Art Lecture", descricao: "A lecture on the evolution of Chinese art.", imagem: "/images/evento24.jpg", data: "February 20 2026" },
    // Add more events as needed
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
                        <p class="card-text"><small class="text-muted">Date: ${evento.data}</small></p>
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

