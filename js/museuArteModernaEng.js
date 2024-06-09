// Script para manipulação de funcionalidades específicas do Museu de Arte Moderna

// Função para inicializar o mapa
function initMap() {
    // Coordenadas do Museu de Arte Moderna
    var museuArteModerna = { lat: 40.7614, lng: -73.9776 };

    // Opções do mapa
    var mapOptions = {
        zoom: 15, // Nível de zoom
        center: museuArteModerna // Centro do mapa
    };

    // Instanciando o mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Marcador do Museu de Arte Moderna
    var marker = new google.maps.Marker({
        position: museuArteModerna,
        map: map,
        title: 'Museu de Arte Moderna'
    });
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('reviewName').value;
    const text = document.getElementById('reviewText').value;
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `<p><strong>${name}</strong>: ${text}</p>`;
    document.getElementById('reviews').appendChild(review);
    document.getElementById('reviewForm').reset();
});
