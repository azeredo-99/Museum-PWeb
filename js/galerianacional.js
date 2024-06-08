// Inicializar o mapa
function initMap() {
    var location = { lat: 51.508929, lng: -0.128299 }; // Coordenadas da Galeria Nacional de Londres
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Lidar com o envio do formulário de avaliação
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var reviewName = document.getElementById('reviewName').value;
    var reviewText = document.getElementById('reviewText').value;
    
    if (reviewName && reviewText) {
        var newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `<p><strong>${reviewName}</strong>: ${reviewText}</p>`;
        
        document.getElementById('reviews').appendChild(newReview);
        
        // Limpar os campos do formulário
        document.getElementById('reviewName').value = '';
        document.getElementById('reviewText').value = '';
    } else {
        alert('Por favor, preencha ambos os campos.');
    }
});
