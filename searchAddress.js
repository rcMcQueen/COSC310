function searchAddress(geocoder, resultsMap) {
	var address = $('#addressBar').val();
	var year = $('#year option:selected').val();
	if (year = "yr") {
		year = "fifteen";
		// if option isn't selected, default to 2015
	}
	$.ajax({
		type : 'GET',
		url : 'http://localhost:8888/yearQuery/' + year,
		useDefaultHxrHeader : false,
		dataType : 'json',
		success : function() {
			var rows = checkAddressExists(request, response, address, year);
		},
		error : function(data) {
			window.alert("No address found");
			return;
		}
	// check if the address exists and if it does get the infomartion, if not
	// send a pop up to let the user know

	});
	var contentString = rows;

	geocoder.geocode({
		'address' : address
	}, function(results, status) {
		if (status === google.maps.GeocoderStatus.OK) {
			resultsMap.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map : resultsMap,
				position : results[0].geometry.location
			});
			var infowindow = new google.maps.InfoWindow({
				content : contentString
			});
			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		} else {
			alert('Geocode was not successful for the following reason: '
					+ status);
		}
	});
	// use the geocode to find the lat and long variables and create a marker
	// with the information about the crime at that address
}