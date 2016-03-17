var yearObj;
var createdMarkers=[];

$(document).ready(function () {
        $('#year').change(function () {                 //get the value of the selection within the Year selections 
           var year = $('#year option:selected').val();
            if (year == 'yr') {
                year = 'fifteen';
            }
            $.ajax({
                type: 'GET',
                url: 'http://localhost:8888/yearQuery/' + year,
                async: false,
                useDefaultHxrHeader: false,
                dataType: 'json',
                success: function (data) {
                    console.log("Success");
                    yearObj = JSON.stringify(data);
                },
                error: function (data) {
                    console.log("Error.", data);
                }
            });
            yearObj = JSON.parse(yearObj);
            var mapOptions = {
                center: {lat: 49.2827, lng: -123.1207},
                zoom: 11
            };
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);
            var geocoder = new google.maps.Geocoder();
            var infoWindow = new google.maps.InfoWindow({
                content : "holding..."
            });
            for(var i = 0; i < 10; i++) {
               var address = yearObj[i].HUNDRED_BLOCK + " vancouver bc canada";
                geocoder.geocode({'address': address}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                       var marker = new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location,
                            info: "<p>" + yearObj[i].TYPE + " " +yearObj[i].MONTH +
                            " " + yearObj[i].MONTH + " " + yearObj[i].HUNDRED_BLOCK +
                            " " + yearObj[i].N_HOOD + "</p>",
                            title: yearObj[i].TYPE
                        });
                        createdMarkers.push({Marker: marker, Type: yearObj[i].TYPE});
                        marker.addListener('click', function(){
                            infoWindow.setContent(marker.info);
                            infoWindow.open(map, marker);
                        })(info);


                    } else {
                        window.alert('Geocode was not successful for the following reasons' + status);
                    }
                });
}
    });
    //When a marker is deselected, closes the info box.
    google.maps.event.addListener(map, 'click', function() {
        infoWindow.close();
    });
});


$(document).ready(function () {
    $('#month').change(function () {
        var month = $('#month option:selected').val();
        window.alert(month);
        var year = $('#year option:selected').val();
        if(year == 'yr'){
            year = 'fifteen';
        }
        //get the value of the selection within the Year selections

        $.ajax({
            type: 'GET',
            url: 'http://localhost:8888/monthQuery/' + month,
            useDefaultHxrHeader: false,
            dataType: 'json',
            success: function () {
            },
            error: function (data) {
                data = JSON.stringify(data);

            }

        });
    });
});


        $(document).ready(function () {
            $('#house_year').change(function () {
                //get the value of the selection within the house data selections
                var house = $('#house_year option:selected').val();
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:8888/houseQuery/' + house,
                    useDefaultHxrHeader: false,
                    dataType: 'json',
                    success: function () {
                        console.log("Success");
                    },
                    error: function (data) {
                        console.log("Error.", data);
                    }

                });
            });
        });

//Check if the boxes are checked, if so, display the appropriate marker based on the Type of crime. Otherwise, hide the marker.
function show(category){
    for(var i = 0; i < createdMarkers.length; i++){
        if(createdMarkers[i].Type === category){
            createdMarkers[i].Marker.setVisible(true);
        }
    }
}

function hide(category){
    for(var i = 0; i < createdMarkers.length; i++){
        if(createdMarkers[i].Type === category){
            createdMarkers[i].Marker.setVisible(false);
        }
    }
}

function checkBox(box, category){
    if(box.checked){
        show(category);
    }   else{
        hide(category);
    }
}
