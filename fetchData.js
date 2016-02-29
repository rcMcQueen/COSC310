$(document).ready(function() {
    $('#year').change(function () {
        //get the value of the selection within the Year selections
        var year = $('#year option:selected').val();
            $.ajax({
                type: 'GET',
                url: 'https://2da0a4bb.ngrok.com/yearQuery/' + year,
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