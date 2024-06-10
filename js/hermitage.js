function initMap() {
    var hermitage = {lat: 59.9398, lng: 30.3146}; // Coordenadas do Museu Hermitage
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: hermitage
    });
    var marker = new google.maps.Marker({
        position: hermitage,
        map: map
    });
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('reviewName').value;
    var text = document.getElementById('reviewText').value;

    if (name && text) {
        var reviewSection = document.getElementById('reviews');
        var newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `<p><strong>${name}</strong>: ${text}</p>`;
        reviewSection.appendChild(newReview);

        // Limpar o formulário
        document.getElementById('reviewForm').reset();
    }
});
