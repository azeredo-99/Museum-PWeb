function initMap() {
    const louvre = { lat: 48.8606, lng: 2.3376 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: louvre,
    });
    const marker = new google.maps.Marker({
        position: louvre,
        map: map,
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
