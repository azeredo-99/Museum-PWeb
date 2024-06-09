// Função de inicialização do mapa
function initMap() {
    // Coordenadas do The Met
    var metCoordinates = { lat: 40.779437, lng: -73.963244 };

    // Opções do mapa
    var mapOptions = {
        zoom: 15,
        center: metCoordinates
    };

    // Elemento do mapa
    var mapElement = document.getElementById('map');

    // Mapa
    var map = new google.maps.Map(mapElement, mapOptions);

    // Marcador do The Met
    var marker = new google.maps.Marker({
        position: metCoordinates,
        map: map,
        title: 'The Met'
    });
}
