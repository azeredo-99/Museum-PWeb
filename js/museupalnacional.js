// museupalnacional.js

function initMap() {
    // Localização do Museu do Palácio Nacional de Taiwan
    const palNacionalTaiwan = { lat: 25.102398, lng: 121.548437 };

    // Criação do mapa centrado na localização do museu
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: palNacionalTaiwan,
    });

    // Adição de um marcador para o museu
    const marker = new google.maps.Marker({
        position: palNacionalTaiwan,
        map: map,
        title: "Museu do Palácio Nacional de Taiwan",
    });
}

// Envio da avaliação
document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta dos dados do formulário
    const name = document.getElementById("reviewName").value;
    const review = document.getElementById("reviewText").value;

    // Criação de um novo elemento de avaliação
    const reviewContainer = document.getElementById("reviews");
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `<p><strong>${name}</strong>: ${review}</p>`;

    // Adição da nova avaliação à lista de avaliações
    reviewContainer.appendChild(newReview);

    // Limpeza do formulário
    document.getElementById("reviewForm").reset();
});
