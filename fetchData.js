$(document).ready(function() {
	$('#year').change(function() {
		// get the value of the selection within the Year selections
		var year = $('#year option:selected').val();
		$.ajax({
			type : 'GET',
			url : 'http://localhost:8888/yearQuery/' + year,
			useDefaultHxrHeader : false,
			dataType : 'json',
			success : function() {
				console.log("Success");
			},
			error : function(data) {
				console.log("Error.", data);
			}

		});

		$(document).ready(function() {
			$('#year').click(function() {
				$.ajax({
					type : 'GET',
					url : 'http://localhost:8888/',
					dataType : 'json',
					success : function() {

					},
					error : function(data) {
						console.log("Error.", data);
					}
				});
			});
		});
	});
});
