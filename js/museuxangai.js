// Função de inicialização do mapa
function initMap() {
    // Coordenadas do Museu de Xangai
    const museuXangai = { lat: 31.239961, lng: 121.499656 };

    // Opções do mapa
    const mapOptions = {
        center: museuXangai,
        zoom: 15,
    };

    // Criar o mapa
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Marcador no mapa para o Museu de Xangai
    const marker = new google.maps.Marker({
        position: museuXangai,
        map: map,
        title: "Museu de Xangai",
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
