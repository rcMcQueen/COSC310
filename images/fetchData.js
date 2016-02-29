$(document).ready(function(){
    $('#year').click(function(){
        $.getJSON('http://localhost:8888/', function(data){
            $.each(data, function(key, value){
                $("ul").append("<li>"+value.year+"</li>");
            })
        })
    });
});