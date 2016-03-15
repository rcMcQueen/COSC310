var yearObj;
var infowindow =  null;

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
            var address;
            var string;
            infowindow = new google.maps.InfoWindow({
                content : "holding..."
            });
            for(var i = 0; i < 10; i++) {
                string = "<p>" + yearObj[i].TYPE + " " +yearObj[i].MONTH +
                    " " + yearObj[i].MONTH + " " + yearObj[i].HUNDRED_BLOCK +
                    " " + yearObj[i].N_HOOD + "</p>";
                address = yearObj[i].HUNDRED_BLOCK + " vancouver bc canada";
                geocoder.geocode({'address': address}, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                    var result = results[0].geometry.location;
                    var marker = new google.maps.Marker({
                        map: map,
                        position: result
                });
                    ;
                        google.maps.event.addListener(marker, 'click', function(){
                            infowindow.setContent(string);
                            infowindow.open(map,this);
                        });

            } else{
                    window.alert('Geocode was not successful for the following reasons' + status);
                    }
                });
}
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
                window.alert("Success");
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
// Checkbox calls below, need database instructions

                   // if ($('#bnecom').is(":checked"))

//end of checkbox functions