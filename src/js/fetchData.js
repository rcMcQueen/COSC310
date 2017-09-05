var yearObj;
var createdMarkers=[];
var houseData;
var icons = {
    TheftOfVehicle: {
        url: "Icons/theftOfVehicle.png",
        scaledSize: new google.maps.Size(20,20)
    },
    TheftFromVehicle: {
        url: "Icons/theftFromVehicle.jpg",
        scaledSize: new google.maps.Size(20,20)
    },
    Mischief: {
        url: "Icons/mischief.png",
        scaledSize: new google.maps.Size(20,20)
    },
    bneCom: {
        url: "Icons/bneCom.png",
        scaledSize: new google.maps.Size(20,20)
    },
    bneRes: {
        url: "Icons/bneRes.png",
        scaledSize: new google.maps.Size(20,20)
    },
    otherTheft: {
        url: "Icons/otherTheft.png",
        scaledSize: new google.maps.Size(20,20)
    }
};
$(document).ready(function () {
    $('#year').change(function () {
        //get the value of the selection within the Year selections 
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
            //on success, convert the objects to JSON notation
            success: function (data) {
                console.log("Success");
                yearObj = JSON.stringify(data);
            },
            error: function (data) {
                console.log("Error.", data);
            }
        });
        // transform the strings into standable text, ex: "asd" -> asd
        yearObj = JSON.parse(yearObj);
        placeMarkers(yearObj);
        createdMarkers = getMarkerList();
    });
});


$(document).ready(function () {
    $('#month').change(function () {
        //BUG: month selection must be done before year data is loaded in, otherwise is not filtered.
        var month = $('#month option:selected').val();
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
            success: function (data) {
                data = JSON.stringify(data);
            },
            error: function (data) {
                console.log('Error, AJAX call was unsuccessful.' + data);

            }

        });
    });
});
                /*
                    When the house year is selected, load in the appropriate year's data and create average prices based off of it.

                 */

        $(document).ready(function () {
            $('#house_year').change(function () {
                //get the value of the selection within the house data selections
                var house = $('#house_year option:selected').val();
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:8888/houseQuery/' + house,
                    useDefaultHxrHeader: false,
                    dataType: 'json',
                    success: function (data) {
                        houseData = JSON.stringify(data);
                    },
                    error: function (data) {
                        console.log("Error.", data);
                    }

                });
                JSON.parse(house);

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
