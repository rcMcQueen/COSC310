var yearObj;
$(document).ready(function () {
        $('#year').change(function () {                 //get the value of the selection within the Year selections 
           var year = $('#year option:selected').val();
            if (year = 'yr') {
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
            window.alert(yearObj);
        });
    });


$(document).ready(function () {
    $('#month').change(function () {
        //get the value of the selection within the Year selections
        var year = $('#month option:selected').val();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8888/monthQuery/' + month,
            useDefaultHxrHeader: false,
            dataType: 'json',
            success: function () {
                console.log("Success");
            },
            error: function (data) {
                console.log("Error.", data);
            }

        });
        $(document).ready(function () {
            $('#year').click(function () {
                $.ajax({
                    type: 'GET',
                    url: 'http://localhost:8888/',
                    dataType: 'json',
                    success: function () {

                    },
                    error: function (data) {
                        console.log("Error.", data);
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
// Checkbox calls below, need database instructions

                $(document).ready(function () {
                    if ($(bnecom).is(":checked")) {
                        $.ajax({
                            //Database stuff here

                            url: 'on_off.aspx',
                            type: 'POST',
                            data: {strID: $(this).attr("id"), strState: "1"}

                        });
                    } else {
                        $.ajax({
                            //database stuff here

                            url: 'on_off.aspx',
                            type: 'POST',
                            data: {strID: $(this).attr("id"), strState: "0"}

                        });
                    }
                });
            });

            $(document).ready(function () {
                if ($(bneres).is(":checked")) {
                    $.ajax({
                        //Database stuff here

                        url: 'on_off.aspx',
                        type: 'POST',
                        data: {strID: $(this).attr("id"), strState: "1"}

                    });
                } else {
                    $.ajax({
                        //database stuff here

                        url: 'on_off.aspx',
                        type: 'POST',
                        data: {strID: $(this).attr("id"), strState: "0"}

                    });
                }
            });
        });


        $(document).ready(function () {
            if ($(mschf).is(":checked")) {
                $.ajax({
                    //Database stuff here

                    url: 'on_off.aspx',
                    type: 'POST',
                    data: {strID: $(this).attr("id"), strState: "1"}

                });
            } else {
                $.ajax({
                    //database stuff here

                    url: 'on_off.aspx',
                    type: 'POST',
                    data: {strID: $(this).attr("id"), strState: "0"}

                });
            }
        });
    });

    $(document).ready(function () {
        if ($(ot).is(":checked")) {
            $.ajax({
                //Database stuff here

                url: 'on_off.aspx',
                type: 'POST',
                data: {strID: $(this).attr("id"), strState: "1"}

            });
        } else {
            $.ajax({
                //database stuff here

                url: 'on_off.aspx',
                type: 'POST',
                data: {strID: $(this).attr("id"), strState: "0"}

            });
        }
    });
});

$(document).ready(function () {
    if ($(tfv).is(":checked")) {
        $.ajax({
            //Database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "1"}

        });
    } else {
        $.ajax({
            //database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "0"}

        });
    }
});


$(document).ready(function () {
    if ($(tov).is(":checked")) {
        $.ajax({
            //Database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "1"}

        });
    } else {
        $.ajax({
            //database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "0"}

        });
    }
});

$(document).ready(function () {
    if ($(armrob).is(":checked")) {
        $.ajax({
            //Database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "1"}

        });
    } else {
        $.ajax({
            //database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "0"}

        });
    }
});

$(document).ready(function () {
    if ($(van).is(":checked")) {
        $.ajax({
            //Database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "1"}

        });
    } else {
        $.ajax({
            //database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "0"}

        });
    }
});


$(document).ready(function () {
    if ($(aslt).is(":checked")) {
        $.ajax({
            //Database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "1"}

        });
    } else {
        $.ajax({
            //database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "0"}

        });
    }
});


$(document).ready(function () {
    if ($(dmvlnc).is(":checked")) {
        $.ajax({
            //Database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "1"}

        });
    } else {
        $.ajax({
            //database stuff here

            url: 'on_off.aspx',
            type: 'POST',
            data: {strID: $(this).attr("id"), strState: "0"}

        });
    }
});


//end of checkbox functions