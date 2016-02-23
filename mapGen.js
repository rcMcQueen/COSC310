function initMap()
{
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {center: {lat: 49.2827, lng: -123.1207}, zoom: 11 });
}