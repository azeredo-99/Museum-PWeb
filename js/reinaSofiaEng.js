function initMap() {
    var reinaSofia = { lat: 40.408735, lng: -3.694512 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: reinaSofia
    });
    var marker = new google.maps.Marker({
        position: reinaSofia,
        map: map
    });
}

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('reviewName').value;
    var reviewText = document.getElementById('reviewText').value;

    if (name && reviewText) {
        var reviewSection = document.getElementById('reviews');
        var newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `<p><strong>${name}</strong>: ${reviewText} 5/5</p>`;

        reviewSection.appendChild(newReview);

        document.getElementById('reviewForm').reset();
    }
});
