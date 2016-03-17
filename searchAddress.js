
function searchAddress() {
    var geocoder = new google.maps.Geocoder();
    var rows;
    var address = $('#addressSearch').val();
    var year = $('#year option:selected').val();
    if (year === "yr") {
        year = "fifteen";
        // if option isn't selected, default to 2015
    }
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8888/addressSearch/' + address,
        async: false,
        dataType: 'json',
        useDefaultHxrHeader: false,
        success: function (data) {
            rows = JSON.stringify(data);
        },
        error: function (data) {
            window.alert('No data found' + data)
        },
        // check if the address exists and if it does get the information, if not
        // send a pop up to let the user know
    });
    var addressObj = JSON.parse(rows);
    var infoString = '<p>';
    for (var i = 0; i < addressObj.length; i++) {
        infoString += addressObj[i].TYPE + " " + addressObj[i].YEAR + " "
            + addressObj[i].MONTH + " " + address + " "
            + addressObj[i].N_HOOD + "<br>";
    }
    infoString += "</p>"
    address +=" vancouver bc canada";
    geocoder.geocode({address: address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var result = results[0].geometry.location;
            var mapOptions = {
                center: result,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.TERRAIN
            }
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                map: map,
                position: result
            });
            var infowindow = new google.maps.InfoWindow({
                content: infoString
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        } else {
            alert('Geocode was not successful for the following reason: '
                + status);
        }
        // use the geocode to find the lat and long variables and create a marker
        // with the information about the crime at that address
    });
}