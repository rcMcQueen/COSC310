$(document).ready(function(){
    $('#year').click(function() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8888/',
            dataType: 'json',
            success: function () {

            },
            error: function(data){
                console.log("Error.", data);
            }
        });
    });
});