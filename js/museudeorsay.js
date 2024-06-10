// Inicialização do mapa do Google Maps
function initMap() {
    var orsay = {lat: 48.859961, lng: 2.326561}; // Coordenadas do Museu d'Orsay
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: orsay
    });
    var marker = new google.maps.Marker({
        position: orsay,
        map: map
    });
}

// Adicionar avaliações dinamicamente
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('reviewName').value;
    var text = document.getElementById('reviewText').value;

    if (name && text) {
        var reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');

        var reviewContent = document.createElement('p');
        reviewContent.innerHTML = `<strong>${name}</strong>: ${text}`;

        reviewContainer.appendChild(reviewContent);

        document.getElementById('reviews').appendChild(reviewContainer);

        // Limpar o formulário após o envio
        document.getElementById('reviewForm').reset();
    } else {
        alert('Por favor, preencha todos os campos antes de enviar sua avaliação.');
    }
});
