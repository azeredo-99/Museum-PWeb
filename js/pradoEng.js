// Função para inicialização do mapa
function initMap() {
    // Coordenadas do Museu do Prado
    var prado = { lat: 40.4139, lng: -3.6925 };
    
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: prado
    });
    
    // Marcador para o Museu do Prado
    var marker = new google.maps.Marker({
        position: prado,
        map: map
    });
}
