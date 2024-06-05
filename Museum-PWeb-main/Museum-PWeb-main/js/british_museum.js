// Função de inicialização do mapa
function initMap() {
    // Coordenadas do British Museum
    const britishMuseum = { lat: 51.5194, lng: -0.1270 };

    // Opções do mapa
    const mapOptions = {
        center: britishMuseum,
        zoom: 15,
    };

    // Instanciando o mapa
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Marcador do British Museum
    const marker = new google.maps.Marker({
        position: britishMuseum,
        map: map,
        title: "British Museum",
    });
}

// Evento de envio de avaliação
document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("reviewName").value;
    const review = document.getElementById("reviewText").value;
    const reviewContainer = document.getElementById("reviews");

    // Criando elemento de avaliação
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.innerHTML = `<p><strong>${name}</strong>: ${review}</p>`;

    // Adicionando avaliação ao contêiner
    reviewContainer.appendChild(reviewElement);

    // Limpando campos do formulário
    document.getElementById("reviewName").value = "";
    document.getElementById("reviewText").value = "";
});
