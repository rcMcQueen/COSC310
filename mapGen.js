function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center : {
			lat : 49.2827,
			lng : -123.1207
		},
		zoom : 11
	});
	var geocoder = new google.maps.Geocoder();
}
function getAddress() {
	searchAddress(geocoder, map);
	// when get address is called from the search bar send the geocoder and map
	// to the proper function
}