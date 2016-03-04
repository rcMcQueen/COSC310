function initMap()
{
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {center: {lat: 49.2827, lng: -123.1207}, zoom: 11 });
}
google.maps.event.addDomListener(window, 'load', initMap);

 function areaSearch(){
	 document.getElementById('write').innerHTML="";
	 var name = document.getElementById('area').value.toString();
	    if ((name.toLowerCase())==("sunset")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.221667, lng: -123.080049}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("central business district")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.271214, lng: -123.098854}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("mount pleasant")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.258266, lng: -123.108180}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("hastings-sunrise")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.281126, lng: -123.044077}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("strathcona")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.273752, lng: -123.088475}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("kensington-cedar cottage")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.248402, lng: -123.070127}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("west end")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.285646, lng: -123.130621}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("kerrisdale")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.234133, lng: -123.155351}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("west point grey")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.260966, lng: -123.200093}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("renfrew-collingwood")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.241066, lng: -123.038755}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("fairview")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.266031, lng: -123.128940}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("shaughnessy")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.245337, lng: -123.141324}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("stanley park")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.301705, lng: -123.141700}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("kitsilano")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.270937, lng: -123.162142}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("south cambie")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.245160, lng: -123.120786}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("marpole")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.210724, lng: -123.130187}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("grandview-woodland")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.269723, lng: -123.069708}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("victoria-fraserview")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.218530, lng: -123.065873}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("oakridge")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.229786, lng: -123.116200}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("killarney")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.224704, lng: -123.041063}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("arbutus ridge")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.253611, lng: -123.160431}, zoom: 15 });
	       }
	    else if ((name.toLowerCase())==("musqueam")) {
	    	 var mapDiv = document.getElementById('map');
	    	 var map = new google.maps.Map(mapDiv, {center: {lat: 49.225587, lng: -123.201438}, zoom: 15 });
	       }    

	    else{ 
	    	document.getElementById('write').innerHTML=("Sorry that search did not work, try: Sunset, Central Business District, Mount Pleasant, Hastings-Sunrise, Strathcona, Kensington-Cedar Cottage, West End, Kerrisdale, West Point Grey, Renfrew-Collingwood, Fairview, Shaughnessy, Stanley Park, Kitsilano, South Cambie, Marpole, Grandview-Woodland, Victoria-Fraserview, Oakridge, Killarney, Arbutus Ridge, Musqueam");	    	
	    };
	     
	    	}
	    	
google.maps.event.addDomListener(document.getElementById('on'), 'click', areasearch());