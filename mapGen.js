var map;

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
	    	document.getElementById('write').innerHTML=("Sorry that search did not work, try:\n Sunset, Central Business District, Mount Pleasant, Hastings-Sunrise, Strathcona, Kensington-Cedar Cottage, West End, Kerrisdale, West Point Grey, Renfrew-Collingwood, Fairview, Shaughnessy, Stanley Park, Kitsilano, South Cambie, Marpole, Grandview-Woodland, Victoria-Fraserview, Oakridge, Killarney, Arbutus Ridge, Musqueam");
	    };

	    	}

function initOverlay(){
    var x = {
        lat: 49.248,
        lng: -123.1207
    };
    //Variables for neighborhoods in Vancouver and lat/long values to make a border around them for the overlay
    //SPRINT 3: Instead of declaring all of the variables, put the coordinates in an object array to reduce space taken up and readability of code
    var marpole1 = new google.maps.LatLng(49.205083, -123.10309); //bottom left
    var marpole2 = new google.maps.LatLng(49.206242, -123.14954); //bottom right
    var marpole3 = new google.maps.LatLng(49.219443, -123.14826); //top left
    var marpole4 = new google.maps.LatLng(49.218507,-123.104290); //top right
    var marpole5 = new google.maps.LatLng(49.200169, -123.135510);//between marpole 1 & 2
    var marpole6 = new google.maps.LatLng(49.204095, -123.117606); //between marpole 5 & 2

    var sunset1 = new google.maps.LatLng(49.205002,-123.102967); //bottom left
    var sunset2 = new google.maps.LatLng(49.233182,-123.10566); //top left
    var sunset3 = new google.maps.LatLng(49.232700,-123.07698); //top right
    var sunset4 = new google.maps.LatLng(49.208557,-123.07726); //bottom right
    var sunset5 = new google.maps.LatLng(49.205770, -123.091238); //between sunset4 & 1

    var oakridge1 = new google.maps.LatLng(49.218507,-123.104290); //bottom right
    var oakridge2 = new google.maps.LatLng(49.219394,-123.14009); //bottom left
    var oakridge3 = new google.maps.LatLng(49.234281,-123.13954); //top left
    var oakridge4 = new google.maps.LatLng(49.233182,-123.10566); //top right

    var kessidale1 = new google.maps.LatLng(49.217121,-123.17918); // bottom left
    var kessidale3 = new google.maps.LatLng(49.234728,-123.17869); // top left
    var kessidale4 = new google.maps.LatLng(49.234281,-123.13954); // top right
    var kessidale5 = new google.maps.LatLng(49.219394,-123.14009); // bottom bottom right
    var kessidale6 = new google.maps.LatLng(49.205733,-123.149837); //bottom right corner
    var kessidale7 = new google.maps.LatLng(49.206366,-123.149362); //bottom rightmost corner
    var kessidale8 = new google.maps.LatLng(49.214218,-123.163644); //between kessidale 1 & 6
    var kessidale9 = new google.maps.LatLng(49.219463,-123.148264); //between kessidale5 and kessidale6

    var kensington1 = new google.maps.LatLng(49.232997,-123.09038); // bottom left
    var kensington2 = new google.maps.LatLng(49.232899,-123.05888); // bottom right
    var kensington3 = new google.maps.LatLng(49.256417,-123.08975); // top left
    var kensington4 = new google.maps.LatLng(49.262135,-123.05678); // top right
    var kensington5 = new google.maps.LatLng(49.262298,-123.07741); // top top left
    var kensington6 = new google.maps.LatLng(49.240468,-123.058735); // above bottom right
    var kensington7 = new google.maps.LatLng(49.240895,-123.058787); // above kensington6
    var kensington8 = new google.maps.LatLng(49.243406,-123.056794); // above kensington7
    var kensington9 = new google.maps.LatLng(49.256261,-123.077566); // corner between kensington5 & 3


    var victoria1 = new google.maps.LatLng(49.208487,-123.07743); // bottom left
    var victoria2 = new google.maps.LatLng(49.205305,-123.05693); // bottom right
    var victoria3 = new google.maps.LatLng(49.232631,-123.07699); // top left
    var victoria4 = new google.maps.LatLng(49.232735,-123.04884); // top right

    var killarney1 = new google.maps.LatLng(49.205257,-123.05678); // bottom left
    var killarney2 = new google.maps.LatLng(49.201242,-123.02349); // bottom right
    var killarney3 = new google.maps.LatLng(49.232765,-123.04876); // top left
    var killarney4 = new google.maps.LatLng(49.232210,-123.02367); // top right

    var renfrew1 = new google.maps.LatLng(49.232874,-123.058824); // bottom left
    var renfrew2 = new google.maps.LatLng(49.232384,-123.023616); // bottom right
    var renfrew3 = new google.maps.LatLng(49.265453,-123.023791); // top right
    var renfrew4 = new google.maps.LatLng(49.262068,-123.056457); // top left
    var renfrew5 = new google.maps.LatLng(49.243357,-123.056626); // below top left
    var renfrew6 = new google.maps.LatLng(49.240802,-123.058646); // above bottom left
    var renfrew7 = new google.maps.LatLng(49.261801,-123.032318); // between top left and top right
    var renfrew8 = new google.maps.LatLng(49.261919,-123.031395); // between renfrew 7 and renfrew 9
    var renfrew9 = new google.maps.LatLng(49.262039,-123.030923); // between renfrew 8 and top right
    var renfrew10 = new google.maps.LatLng(49.262164,-123.030441); //
    var renfrew11 = new google.maps.LatLng(49.264687,-123.026206); //
    var renfrew12 = new google.maps.LatLng(49.264856,-123.025881); //
    var renfrew13 = new google.maps.LatLng(49.265290,-123.024503); //

    var hastings1 = new google.maps.LatLng(49.26212,-123.05644); // bottom left
    var hastings2 = new google.maps.LatLng(49.265631,-123.023772); // bottom right
    var hastings3 = new google.maps.LatLng(49.293426,-123.023526); // top right
    var hastings5 = new google.maps.LatLng(49.265455,-123.02456); // top left
    var hastings6 = new google.maps.LatLng(49.265036,-123.025911); //
    var hastings7 = new google.maps.LatLng(49.264926,-123.026184); //
    var hastings8 = new google.maps.LatLng(49.264397,-123.027214); //
    var hastings9 = new google.maps.LatLng(49.263616,-123.028375); //
    var hastings10 = new google.maps.LatLng(49.262596,-123.029912); //
    var hastings11 = new google.maps.LatLng(49.262349,-123.030415); //
    var hastings12 = new google.maps.LatLng(49.262155,-123.030957); //
    var hastings13 = new google.maps.LatLng(49.262001,-123.031883); //
    var hastings14 = new google.maps.LatLng(49.261992,-123.032968); //
    var hastings15 = new google.maps.LatLng(49.291904,-123.056579); // after bottom left
    var hastings16 = new google.maps.LatLng(49.293955,-123.050082); //
    var hastings17 = new google.maps.LatLng(49.292074,-123.040143); //
    var hastings18 = new google.maps.LatLng(49.290546,-123.035302); //
    var hastings19 = new google.maps.LatLng(49.293426,-123.023526); //

    var grand1 = new google.maps.LatLng(49.262457,-123.077404); // bottom left
    var grand2 = new google.maps.LatLng(49.262166,-123.056757); // bottom right
    var grand3 = new google.maps.LatLng(49.291916,-123.056661); // top right
    var grand4 = new google.maps.LatLng(49.289489,-123.076901); // top left
    var grand5 = new google.maps.LatLng(49.2866873,-123.064853); // left of top right
    var grand6 = new google.maps.LatLng(49.2896400,-123.064853); // ""
    var grand7 = new google.maps.LatLng(49.28964,-123.069743); // ""
    var grand8 = new google.maps.LatLng(49.288001,-123.069826); // ""

    var strat1 = new google.maps.LatLng(49.290234,-123.100033); //
    var strat3 = new google.maps.LatLng(49.289514,-123.076977); // top right
    var strat4 = new google.maps.LatLng(49.285532,-123.100611); // top left
    var strat9 = new google.maps.LatLng(49.266792,-123.089845); //
    var strat10 = new google.maps.LatLng(49.266746,-123.089294); //
    var strat11 = new google.maps.LatLng(49.270823,-123.100436); // above bottom left
    var strat12 = new google.maps.LatLng(49.271031,-123.100397); //
    var strat13 = new google.maps.LatLng(49.271806,-123.099986); //
    var strat14 = new google.maps.LatLng(49.272072,-123.099917); //
    var strat15 = new google.maps.LatLng(49.278097,-123.099664); //
    var strat16 = new google.maps.LatLng(49.278310,-123.099733); //
    var strat17 = new google.maps.LatLng(49.284070,-123.099471); //
    var strat18 = new google.maps.LatLng(49.284116,-123.099469); //
    var strat19 = new google.maps.LatLng(49.284308,-123.099371); //
    var strat20 = new google.maps.LatLng(49.284502,-123.099181); //
    var strat21 = new google.maps.LatLng(49.284575,-123.099134); //
    var strat22 = new google.maps.LatLng(49.284681,-123.099107); //
    var strat23 = new google.maps.LatLng(49.284787,-123.099111); //
    var strat24 = new google.maps.LatLng(49.284918,-123.099166); //
    var strat25 = new google.maps.LatLng(49.285043,-123.099278); //
    var strat26 = new google.maps.LatLng(49.285150,-123.09944); //
    var strat27 = new google.maps.LatLng(49.285215,-123.099609); //
    var strat28 = new google.maps.LatLng(49.285251,-123.099791); //
    var strat29 = new google.maps.LatLng(49.285260,-123.099978); //
    var strat30 = new google.maps.LatLng(49.285225,-123.10022); //
    var strat32 = new google.maps.LatLng(49.2652040,-123.077544); // bottom right
    var strat34 = new google.maps.LatLng(49.265281,-123.081391); //
    var strat35 = new google.maps.LatLng(49.266922,-123.096215); //
    var strat36 = new google.maps.LatLng(49.268127,-123.098741); //
    var strat37 = new google.maps.LatLng(49.268357,-123.099014); //
    var strat38 = new google.maps.LatLng(49.269015,-123.100186); //
    var strat39 = new google.maps.LatLng(49.269151,-123.100558); //

    var dunbar1 = new google.maps.LatLng(49.236834,-123.221578); // bottom left
    var dunbar2 = new google.maps.LatLng(49.234775,-123.170351); // bottom right
    var dunbar4 = new google.maps.LatLng(49.257569,-123.170390); // top right
    var dunbar5 = new google.maps.LatLng(49.236834,-123.221578); // up from bottom left
    var dunbar6 = new google.maps.LatLng(49.239437,-123.219831); //
    var dunbar7 = new google.maps.LatLng(49.239511,-123.219695); //
    var dunbar8 = new google.maps.LatLng(49.239521,-123.219585); //
    var dunbar9 = new google.maps.LatLng(49.239513,-123.219526); //
    var dunbar10 = new google.maps.LatLng(49.235249,-123.208494); //
    var dunbar11 = new google.maps.LatLng(49.237351,-123.205381); //
    var dunbar12 = new google.maps.LatLng(49.235094,-123.197082); //
    var dunbar13 = new google.maps.LatLng(49.235378,-123.196912); //
    var dunbar14 = new google.maps.LatLng(49.235535,-123.196859); //
    var dunbar15 = new google.maps.LatLng(49.235602,-123.196857); //
    var dunbar16 = new google.maps.LatLng(49.236613,-123.196886); //
    var dunbar17 = new google.maps.LatLng(49.236616,-123.198568); //
    var dunbar18 = new google.maps.LatLng(49.238555,-123.198537); //
    var dunbar19 = new google.maps.LatLng(49.238537,-123.196848); //
    var dunbar20 = new google.maps.LatLng(49.246035,-123.196762); //
    var dunbar21 = new google.maps.LatLng(49.246143,-123.196771); //
    var dunbar22 = new google.maps.LatLng(49.246203,-123.196791); //
    var dunbar23 = new google.maps.LatLng(49.246206,-123.198412); //
    var dunbar24 = new google.maps.LatLng(49.246223,-123.198729); //
    var dunbar25 = new google.maps.LatLng(49.246268,-123.198939); //
    var dunbar26 = new google.maps.LatLng(49.246310,-123.199072); //
    var dunbar27 = new google.maps.LatLng(49.249117,-123.20461); //
    var dunbar28 = new google.maps.LatLng(49.249150,-123.20459); //
    var dunbar29 = new google.maps.LatLng(49.249301,-123.204442); //
    var dunbar30 = new google.maps.LatLng(49.249373,-123.204346); //
    var dunbar31 = new google.maps.LatLng(49.249400,-123.204272); //
    var dunbar32 = new google.maps.LatLng(49.249433,-123.204135); //
    var dunbar33 = new google.maps.LatLng(49.250071,-123.20044); //
    var dunbar34 = new google.maps.LatLng(49.250091,-123.199081); //
    var dunbar35 = new google.maps.LatLng(49.250164,-123.198873); //
    var dunbar36 = new google.maps.LatLng(49.250151,-123.193645); //
    var dunbar37 = new google.maps.LatLng(49.253334,-123.193625); //
    var dunbar38 = new google.maps.LatLng(49.253342,-123.195979); //
    var dunbar39 = new google.maps.LatLng(49.253378,-123.196014); //
    var dunbar40 = new google.maps.LatLng(49.253427,-123.196036); //
    var dunbar41 = new google.maps.LatLng(49.253745,-123.196035); //
    var dunbar42 = new google.maps.LatLng(49.255148,-123.196047); //
    var dunbar43 = new google.maps.LatLng(49.255156,-123.196592); //
    var dunbar44 = new google.maps.LatLng(49.257993,-123.196598); //
    var dunbar45 = new google.maps.LatLng(49.257335,-123.170281); // below top right
    var dunbar46 = new google.maps.LatLng(49.257152,-123.170147); //
    var dunbar47 = new google.maps.LatLng(49.257108,-123.170123); //
    var dunbar48 = new google.maps.LatLng(49.257079,-123.170104); //
    var dunbar49 = new google.maps.LatLng(49.255495,-123.170108); //
    var dunbar50 = new google.maps.LatLng(49.255089,-123.170135); //
    var dunbar51 = new google.maps.LatLng(49.25104,-123.170217); //
    var dunbar52 = new google.maps.LatLng(49.251023,-123.171114); //
    var dunbar53 = new google.maps.LatLng(49.250998,-123.171328); //
    var dunbar54 = new google.maps.LatLng(49.25099,-123.171368); //
    var dunbar55 = new google.maps.LatLng(49.250427,-123.170881); //
    var dunbar56 = new google.maps.LatLng(49.249633,-123.170174); //
    var dunbar57 = new google.maps.LatLng(49.249519,-123.170077); //
    var dunbar58 = new google.maps.LatLng(49.249471,-123.170057); //
    var dunbar59 = new google.maps.LatLng(49.24945,-123.170057); //
    var dunbar60 = new google.maps.LatLng(49.249422,-123.170067); //
    var dunbar61 = new google.maps.LatLng(49.249806,-123.17074); //
    var dunbar62 = new google.maps.LatLng(49.250028,-123.171299); //
    var dunbar63 = new google.maps.LatLng(49.250135,-123.171778); //
    var dunbar64 = new google.maps.LatLng(49.250152,-123.172197); //
    var dunbar65 = new google.maps.LatLng(49.248323,-123.170786); //
    var dunbar66 = new google.maps.LatLng(49.248098,-123.17046); //
    var dunbar67 = new google.maps.LatLng(49.247872,-123.170249); //
    var dunbar68 = new google.maps.LatLng(49.247566,-123.170201); //
    var dunbar69 = new google.maps.LatLng(49.234758,-123.170334); //
    var dunbar70 = new google.maps.LatLng(49.217168,-123.179298); //
    var dunbar71 = new google.maps.LatLng(49.234738,-123.178732); //

    var grey1 = new google.maps.LatLng(49.258095,-123.203164); // bottom left
    var grey2 = new google.maps.LatLng(49.267371,-123.215108);
    var grey3 = new google.maps.LatLng(49.267349,-123.217019); //
    var grey4 = new google.maps.LatLng(49.267321,-123.217605);//
    var grey5 = new google.maps.LatLng(49.267186,-123.219526); //
    var grey6 = new google.maps.LatLng(49.267177,-123.219589); //
    var grey7 = new google.maps.LatLng(49.268818,-123.219598); //
    var grey8 = new google.maps.LatLng(49.268898,-123.219635); //
    var grey15 = new google.maps.LatLng(49.268723,-123.221226); //
    var grey16 = new google.maps.LatLng(49.268862,-123.221269); //
    var grey17 = new google.maps.LatLng(49.269982,-123.221926); //
    var grey18 = new google.maps.LatLng(49.270872,-123.222251); //
    var grey19 = new google.maps.LatLng(49.271148,-123.222429); //
    var grey20 = new google.maps.LatLng(49.27136,-123.22259); //
    var grey21 = new google.maps.LatLng(49.27224,-123.224352); //
    var grey22 = new google.maps.LatLng(49.272798,-123.224696); //
    var grey23 = new google.maps.LatLng(49.273296,-123.224825); //
    var grey24 = new google.maps.LatLng(49.278201,-123.223829); //
    var grey25 = new google.maps.LatLng(49.273392,-123.185554); // top right
    var grey26 = new google.maps.LatLng(); // below top right
    var grey27 = new google.maps.LatLng(49.261361,-123.186004); //
    var grey28 = new google.maps.LatLng(49.261083,-123.185855); //
    var grey29 = new google.maps.LatLng(49.259953,-123.184212); //
    var grey30 = new google.maps.LatLng(49.259836,-123.184085); //
    var grey31 = new google.maps.LatLng(49.259786,-123.184047); //
    var grey32 = new google.maps.LatLng(49.259675,-123.183999); //
    var grey33 = new google.maps.LatLng(49.259378,-123.183985); //
    var grey34 = new google.maps.LatLng(49.257838,-123.184048); //

    var kits1 = new google.maps.LatLng(49.257836,-123.183995); // bottom left
    var kits2 = new google.maps.LatLng(49.259672,-123.1839); // above bottom left
    var kits3 = new google.maps.LatLng(49.259781,-123.183942); //
    var kits4 = new google.maps.LatLng(49.259820,-123.184000); //
    var kits5 = new google.maps.LatLng(49.259994,-123.184141); //
    var kits6 = new google.maps.LatLng(49.261115,-123.185777); //
    var kits7 = new google.maps.LatLng(49.261311,-123.185904); //
    var kits8 = new google.maps.LatLng(49.273400,-123.185494); // top left
    var kits9 = new google.maps.LatLng(49.257196,-123.146036); // bottom right
    var kits10 = new google.maps.LatLng(49.266975,-123.145674); // above bottom right
    var kits11 = new google.maps.LatLng(49.267148,-123.145719); //
    var kits12 = new google.maps.LatLng(49.267176,-123.145724); //
    var kits13 = new google.maps.LatLng(49.272141,-123.145532); //
    var kits14 = new google.maps.LatLng(49.272476,-123.145351); //
    var kits15 = new google.maps.LatLng(49.273030,-123.1447310); //
    var kits16 = new google.maps.LatLng(49.273293,-123.143890); //
    var kits17 = new google.maps.LatLng(49.274915,-123.138900); //
    var kits18 = new google.maps.LatLng(49.279147,-123.14728); // between top right and top left
    var kits19 = new google.maps.LatLng(49.274312,-123.162752); //
    var kits20 = new google.maps.LatLng(49.278393,-123.142278); //between top right and kits19


    var west1 = new google.maps.LatLng(49.275763,-123.136238); // bottom left
    var west2 = new google.maps.LatLng(49.276243,-123.136083); //
    var west3 = new google.maps.LatLng(49.276556,-123.136739); //
    var west4 = new google.maps.LatLng(49.279742,-123.140468); //
    var west5 = new google.maps.LatLng(49.284306,-123.144221); //
    var west6 = new google.maps.LatLng(49.288433,-123.143664); //
    var west7 = new google.maps.LatLng(49.289959,-123.146425); //
    var west8 = new google.maps.LatLng(49.2929632,-123.141828); //
    var west9 = new google.maps.LatLng(49.294238,-123.139481); //
    var west10 = new google.maps.LatLng(49.294548,-123.137511); //
    var west11 = new google.maps.LatLng(49.294833,-123.136915); //top right;
    var west12 = new google.maps.LatLng(49.284448,-123.121165); // bottom right

    var dt1 = new google.maps.LatLng(49.284467,-123.121129); //top right
    var dt2 = new google.maps.LatLng(49.294047,-123.135938); //above top right
    var dt3 = new google.maps.LatLng(49.294095,-123.135952);
    var dt4 = new google.maps.LatLng(49.294114,-123.135966);
    var dt5 = new google.maps.LatLng(49.2944539,-123.136528);
    var dt6 = new google.maps.LatLng(49.29483,-123.136679);
    var dt7 = new google.maps.LatLng(49.295355,-123.135748);
    var dt8 = new google.maps.LatLng(49.295355,-123.134569);
    var dt9 = new google.maps.LatLng(49.294738,-123.133567);
    var dt10 = new google.maps.LatLng(49.29376,-123.12969);
    var dt11 = new google.maps.LatLng(49.289543,-123.114073);
    var dt12 = new google.maps.LatLng(49.289831,-123.106764);
    var dt13 = new google.maps.LatLng(49.290199,-123.100062); //top right corner
    var dt14 = new google.maps.LatLng(49.275728,-123.136208); // bottom left
    var dt15 = new google.maps.LatLng(49.271504,-123.130072);
    var dt16 = new google.maps.LatLng(49.270491,-123.125209);
    var dt17 = new google.maps.LatLng(49.270789,-123.125502);
    var dt18 = new google.maps.LatLng(49.271017,-123.125848);
    var dt19 = new google.maps.LatLng(49.271863,-123.124733);
    var dt20 = new google.maps.LatLng(49.271831,-123.124626);
    var dt21 = new google.maps.LatLng(49.271878,-123.124544);
    var dt22 = new google.maps.LatLng(49.271800,-123.124413);
    var dt23 = new google.maps.LatLng(49.271802,-123.123731);
    var dt24 = new google.maps.LatLng(49.271856,-123.12357);
    var dt25 = new google.maps.LatLng(49.271233,-123.122603);
    var dt26 = new google.maps.LatLng(49.271216,-123.122626);
    var dt27 = new google.maps.LatLng(49.271067,-123.122401);
    var dt28 = new google.maps.LatLng(49.271224,-123.122169);
    var dt29 = new google.maps.LatLng(49.270869,-123.121624);
    var dt30 = new google.maps.LatLng(49.270871,-123.121106);
    var dt31 = new google.maps.LatLng(49.271163,-123.120089);
    var dt32 = new google.maps.LatLng(49.272945,-123.102912);
    var dt33 = new google.maps.LatLng(49.2729631,-123.102928);
    var dt34 = new google.maps.LatLng(49.272722,-123.100175); // bottom right

    var riley1 = new google.maps.LatLng(49.233636,-123.116006); // bottom left going UP
    var riley2 = new google.maps.LatLng(49.238205,-123.115799); //
    var riley3 = new google.maps.LatLng(49.238594,-123.115979); //
    var riley4 = new google.maps.LatLng(49.239128,-123.116544); //
    var riley5 = new google.maps.LatLng(49.24047,-123.118035); //
    var riley6 = new google.maps.LatLng(49.240847,-123.11821); //
    var riley7 = new google.maps.LatLng(49.242584,-123.118096); //
    var riley8 = new google.maps.LatLng(49.243186,-123.117732); //
    var riley9 = new google.maps.LatLng(49.243557,-123.117197); //
    var riley10 = new google.maps.LatLng(49.244365,-123.115844); //
    var riley11 = new google.maps.LatLng(49.245139,-123.1153); //
    var riley12 = new google.maps.LatLng(49.245193,-123.115312); //
    var riley13 = new google.maps.LatLng(49.247981,-123.115184); //
    var riley14 = new google.maps.LatLng(49.248882,-123.115227); //
    var riley15 = new google.maps.LatLng(49.256871,-123.114967); // top left going to top right
    var riley16 = new google.maps.LatLng(49.256414,-123.089994); // top right going to bottom right
    var riley17 = new google.maps.LatLng(49.255507,-123.090026); //
    var riley18 = new google.maps.LatLng(49.255387,-123.089973); //
    var riley19 = new google.maps.LatLng(49.233915,-123.090556); //
    var riley20 = new google.maps.LatLng(49.233734,-123.090657); //
    var riley21 = new google.maps.LatLng(49.232969,-123.090655); // bottom right going to bottom left
    var riley22 = new google.maps.LatLng(49.233029,-123.098365); //
    var riley23 = new google.maps.LatLng(49.233064,-123.098577); //

    var arb1 = new google.maps.LatLng(49.25725,-123.152438); // top right going down to bottom right
    var arb2 = new google.maps.LatLng(49.251636,-123.152411); //
    var arb4 = new google.maps.LatLng(49.251497,-123.152482); //
    var arb5 = new google.maps.LatLng(49.25098,-123.151406); //
    var arb6 = new google.maps.LatLng(49.250183,-123.151821); //
    var arb7 = new google.maps.LatLng(49.243786,-123.147111); //
    var arb8 = new google.maps.LatLng(49.243476,-123.146954); //
    var arb9 = new google.maps.LatLng(49.242021,-123.146841); //
    var arb10 = new google.maps.LatLng(49.241955,-123.146854); //
    var arb11 = new google.maps.LatLng(49.241105,-123.147342); //
    var arb12 = new google.maps.LatLng(49.240556,-123.148233); //
    var arb13 = new google.maps.LatLng(49.240372,-123.149149); //
    var arb14 = new google.maps.LatLng(49.240797,-123.152713); //
    var arb15 = new google.maps.LatLng(49.240642,-123.153755); //
    var arb16 = new google.maps.LatLng(49.24013,-123.154657); //
    var arb17 = new google.maps.LatLng(49.23932,-123.155054); //
    var arb18 = new google.maps.LatLng(49.234668,-123.155282); // bottom right going to bottom left
    var arb19 = new google.maps.LatLng(49.234671,-123.156377); //
    var arb20 = new google.maps.LatLng(49.234632,-123.156474); //
    var arb21 = new google.maps.LatLng(49.234752,-123.17027); // bottom left going to top left
    var arb22 = new google.maps.LatLng(49.247858,-123.170219); //
    var arb23 = new google.maps.LatLng(49.247906,-123.170261); //
    var arb24 = new google.maps.LatLng(49.249013,-123.17132); //
    var arb25 = new google.maps.LatLng(49.249063,-123.171354); //
    var arb26 = new google.maps.LatLng(49.250104,-123.172135); //
    var arb27 = new google.maps.LatLng(49.250169,-123.172192); //
    var arb28 = new google.maps.LatLng(49.25006,-123.171399); //
    var arb29 = new google.maps.LatLng(49.249452,-123.170076); //
    var arb30 = new google.maps.LatLng(49.249954,-123.170466); //
    var arb31 = new google.maps.LatLng(49.250965,-123.171346); //
    var arb32 = new google.maps.LatLng(49.250965,-123.171275); //
    var arb33 = new google.maps.LatLng(49.250986,-123.170139); //
    var arb34 = new google.maps.LatLng(49.257087,-123.170041); //
    var arb35 = new google.maps.LatLng(49.257577,-123.170308); // top left going to top right
    var arb36 = new google.maps.LatLng(49.257491,-123.164902); //
    var arb37 = new google.maps.LatLng(49.257436,-123.164283); //
    var arb38 = new google.maps.LatLng(49.257461,-123.164093); //


    var shaugh1 = new google.maps.LatLng(49.257254,-123.152373); //top left to bottom left
    var shaugh2 = new google.maps.LatLng(49.252052,-123.152507); //
    var shaugh3 = new google.maps.LatLng(49.251629,-123.152326); //
    var shaugh4 = new google.maps.LatLng(49.251516,-123.152409); //
    var shaugh5 = new google.maps.LatLng(49.251004,-123.1513); //
    var shaugh6 = new google.maps.LatLng(49.250198,-123.15174); //
    var shaugh7 = new google.maps.LatLng(49.243672,-123.146949); //
    var shaugh8 = new google.maps.LatLng(49.243091,-123.146776); //
    var shaugh9 = new google.maps.LatLng(49.242031,-123.146771); //
    var shaugh10 = new google.maps.LatLng(49.241334,-123.146966); //
    var shaugh11 = new google.maps.LatLng(49.240506,-123.147813); //
    var shaugh12 = new google.maps.LatLng(49.240294,-123.148494); //
    var shaugh13 = new google.maps.LatLng(49.240488,-123.151006); //
    var shaugh14 = new google.maps.LatLng(49.240685,-123.153035); //
    var shaugh15 = new google.maps.LatLng(49.240597,-123.153631); //
    var shaugh16 = new google.maps.LatLng(49.240315,-123.154275); //
    var shaugh17 = new google.maps.LatLng(49.239837,-123.154628); //
    var shaugh18 = new google.maps.LatLng(49.23832,-123.154839); //
    var shaugh19 = new google.maps.LatLng(49.234642,-123.15499); // bottom left to bottom right
    var shaugh20 = new google.maps.LatLng(49.234578,-123.151807); //
    var shaugh21 = new google.maps.LatLng(49.234536,-123.151747); //
    var shaugh22 = new google.maps.LatLng(49.234079,-123.130588); //
    var shaugh23 = new google.maps.LatLng(49.234115,-123.130402); //
    var shaugh24 = new google.maps.LatLng(49.234024,-123.128172); // bottom right to top right
    var shaugh25 = new google.maps.LatLng(49.235093,-123.128116); //
    var shaugh26 = new google.maps.LatLng(49.235273,-123.128035); //
    var shaugh27 = new google.maps.LatLng(49.243438,-123.127805); //
    var shaugh28 = new google.maps.LatLng(49.243504,-123.127853); //
    var shaugh29 = new google.maps.LatLng(49.245729,-123.127823); //
    var shaugh30 = new google.maps.LatLng(49.245871,-123.127755); //
    var shaugh31 = new google.maps.LatLng(49.247651,-123.127699); //
    var shaugh32 = new google.maps.LatLng(49.247832,-123.127764); //
    var shaugh33 = new google.maps.LatLng(49.250826,-123.127602); //
    var shaugh34 = new google.maps.LatLng(49.250919,-123.127532); //
    var shaugh35 = new google.maps.LatLng(49.257054,-123.127271); //top right

    var fair1 = new google.maps.LatLng(49.257188,-123.145981); // bottom left to top left
    var fair2 = new google.maps.LatLng(49.266975,-123.145601); //
    var fair3 = new google.maps.LatLng(49.26714,-123.145536); //
    var fair4 = new google.maps.LatLng(49.271975,-123.145298); //
    var fair5 = new google.maps.LatLng(49.272215,-123.145202); //
    var fair6 = new google.maps.LatLng(49.272767,-123.144646); //
    var fair7 = new google.maps.LatLng(49.273217,-123.143872); //
    var fair8 = new google.maps.LatLng(49.274874,-123.138856); // top left to top right
    var fair9 = new google.maps.LatLng(49.273216,-123.134822); //
    var fair10 = new google.maps.LatLng(49.269667,-123.130277); //
    var fair11 = new google.maps.LatLng(49.268013,-123.13046); //
    var fair12 = new google.maps.LatLng(49.256916,-123.115214); //bottom right
    var fair14 = new google.maps.LatLng(49.271108,-123.115012); // top right to bottom right
    var fair15 = new google.maps.LatLng(49.26656,-123.114978); //

    var mount1 = new google.maps.LatLng(49.271257,-123.114736); // top left to bottom left
    var mount2 = new google.maps.LatLng(49.267121,-123.11465); //
    var mount3 = new google.maps.LatLng(49.26666,-123.114599); //
    var mount4 = new google.maps.LatLng(49.265403,-123.114636); //
    var mount5 = new google.maps.LatLng(49.265347,-123.114686); //
    var mount6 = new google.maps.LatLng(49.256917,-123.114981); //bottom left to bottom right
    var mount7 = new google.maps.LatLng(49.25646,-123.090025); //
    var mount8 = new google.maps.LatLng(49.256402,-123.08976); //
    var mount9 = new google.maps.LatLng(49.256388,-123.085662); //
    var mount10 = new google.maps.LatLng(49.256441,-123.085565); //
    var mount11 = new google.maps.LatLng(49.256432,-123.085506); //
    var mount12 = new google.maps.LatLng(49.256379,-123.085435); //
    var mount13 = new google.maps.LatLng(49.256251,-123.077555); // bottom right to top right
    var mount14 = new google.maps.LatLng(49.2582,-123.077613); //
    var mount15 = new google.maps.LatLng(49.263927,-123.077637); //
    var mount16 = new google.maps.LatLng(49.264026,-123.07758); //
    var mount17 = new google.maps.LatLng(49.265147,-123.077517); // top left to bottom left
    var mount18 = new google.maps.LatLng(49.265211,-123.081313); //
    var mount19 = new google.maps.LatLng(49.266674,-123.089293); //
    var mount20 = new google.maps.LatLng(49.266728,-123.0899); //
    var mount21 = new google.maps.LatLng(49.266826,-123.096176); //
    var mount22 = new google.maps.LatLng(49.266843,-123.096286); //
    var mount23 = new google.maps.LatLng(49.26807,-123.09883); //
    var mount24 = new google.maps.LatLng(49.268216,-123.09923); //
    var mount25 = new google.maps.LatLng(49.268911,-123.100542); //
    var mount26 = new google.maps.LatLng(49.26901,-123.100878); //
    var mount27 = new google.maps.LatLng(49.270918,-123.10075); //
    var mount28 = new google.maps.LatLng(49.271952,-123.100238); //
    var mount29 = new google.maps.LatLng(49.272719,-123.100198); //


    var cam1 = new google.maps.LatLng(49.256872,-123.115253); // top right to bottom right
    var cam2 = new google.maps.LatLng(49.249106,-123.115562); //
    var cam3 = new google.maps.LatLng(49.248897,-123.115575); //
    var cam4 = new google.maps.LatLng(49.247989,-123.115728); //
    var cam5 = new google.maps.LatLng(49.245661,-123.115828); //
    var cam6 = new google.maps.LatLng(49.245177,-123.115881); //
    var cam7 = new google.maps.LatLng(49.244897,-123.11602); //
    var cam8 = new google.maps.LatLng(49.244279,-123.116665); //
    var cam9 = new google.maps.LatLng(49.243607,-123.117757); //
    var cam10 = new google.maps.LatLng(49.243233,-123.118173); //
    var cam11 = new google.maps.LatLng(49.242582,-123.118536); //
    var cam12 = new google.maps.LatLng(49.241054,-123.118632); //
    var cam13 = new google.maps.LatLng(49.240702,-123.118617); //
    var cam14 = new google.maps.LatLng(49.240344,-123.118398); //
    var cam15 = new google.maps.LatLng(49.238452,-123.116334); //
    var cam16 = new google.maps.LatLng(49.238139,-123.11621); //
    var cam17 = new google.maps.LatLng(49.233654,-123.11643); // bottom right to bottom left
    var cam18 = new google.maps.LatLng(49.234022,-123.127954); // bottom left to top left
    var cam19 = new google.maps.LatLng(49.235219,-123.127924); //
    var cam20 = new google.maps.LatLng(49.23528,-123.127959); //
    var cam21 = new google.maps.LatLng(49.243437,-123.127696); //
    var cam22 = new google.maps.LatLng(49.243502,-123.127658); //
    var cam23 = new google.maps.LatLng(49.243554,-123.127623); //
    var cam24 = new google.maps.LatLng(49.245815,-123.127599); //
    var cam25 = new google.maps.LatLng(49.245874,-123.127644); //
    var cam26 = new google.maps.LatLng(49.247668,-123.127586); //
    var cam27 = new google.maps.LatLng(49.247812,-123.127521); //
    var cam28 = new google.maps.LatLng(49.250836,-123.12738); //
    var cam29 = new google.maps.LatLng(49.250913,-123.127466); //
    var cam30 = new google.maps.LatLng(49.257069,-123.12722); // top left



	var mapOptions = {
		center: x,
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.HYDRA
	};
	map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //SPRINT 3: pass the arrays defined above to reduce the eye sore of var inputs

	var myTrip = [marpole3, marpole4, marpole1, marpole6, marpole5,marpole2];
    var myTrip2 = [sunset2, sunset1, sunset5, sunset4, sunset3];
	var myTrip3 = [oakridge1, oakridge2,oakridge3, oakridge4];
    var myTrip4 = [kessidale3,kessidale4,kessidale5,kessidale9,kessidale7,kessidale6,kessidale6,kessidale8,kessidale1];
    var myTrip5 = [kensington2,kensington6,kensington7,kensington8,kensington4,kensington5,kensington9, kensington3,kensington1];
    var myTrip6 = [victoria1,victoria3,victoria4,victoria2];
    var myTrip7 = [killarney1,killarney3,killarney4,killarney2];
    var myTrip8 = [renfrew4,renfrew7,renfrew8,renfrew9,renfrew10,renfrew11,renfrew12,renfrew13, renfrew3,renfrew2, renfrew1, renfrew6, renfrew5];
    var myTrip9 = [hastings3,hastings2,hastings5,hastings6,hastings7,hastings8,hastings9,hastings10,hastings11,hastings12,hastings13,hastings14,hastings1,hastings15,hastings16,hastings17,hastings18,hastings19];
    var myTrip10 = [grand3,grand5,grand6,grand7,grand8,grand4,grand1,grand2];
    var myTrip11 = [strat32,strat34,strat9,strat10,strat35,strat36,strat37,strat38,strat39,strat11,strat12,strat13,strat14,strat15,strat16,strat17,strat18,strat19,strat20,strat21,strat22,strat23,strat24,strat25,strat26,
    strat27,strat28,strat29,strat30,strat4,strat1,strat3];
    var myTrip12 = [dunbar70,dunbar1,dunbar5,dunbar6,dunbar7,dunbar8,dunbar9,dunbar10,dunbar11,dunbar12,dunbar13,dunbar14,dunbar15,dunbar16,dunbar17,dunbar18,dunbar19,dunbar20,dunbar21,dunbar22,
        dunbar23,dunbar24,dunbar25,dunbar26,dunbar27,dunbar28,dunbar29,dunbar30,dunbar31,dunbar32,dunbar33,dunbar34,dunbar35,dunbar36,dunbar37,dunbar38,dunbar39,dunbar40,dunbar41,dunbar42,dunbar43,dunbar44,dunbar4,dunbar45,
        dunbar46,dunbar47,dunbar48,dunbar49,dunbar50,dunbar51,dunbar52,dunbar53,dunbar54,dunbar55,dunbar56,dunbar57,dunbar58,dunbar59,dunbar60,dunbar61,dunbar62,dunbar63,dunbar64,dunbar65,dunbar66,dunbar67,dunbar68,dunbar69,
        dunbar2,dunbar71];
    var myTrip13 = [grey1,grey2,grey3,grey4,grey5,grey6,grey7,grey8,grey15,grey16,grey17,grey18,grey19,grey20,grey21,grey22,grey23,grey24,grey25,grey26,grey27,grey28,grey29,grey30,grey31,grey32,grey33,grey34];
    var myTrip14 = [kits19,kits18,kits20,kits17,kits16,kits15,kits14,kits13,kits12,kits11,kits10,kits9,kits1,kits2,kits3,kits4,kits5,kits6,kits7,kits8];
    var myTrip15 = [west1,west2,west3,west4,west5,west6,west7,west8,west9,west10,west11,west12];
    var myTrip16 = [dt34,dt33,dt32,dt31,dt30,dt29,dt28,dt27,dt26,dt25,dt24,dt23,dt22,dt21,dt20,dt19,dt18,dt17,dt16,dt15,dt14,dt1,dt2,dt3,dt4,dt5,dt6,dt7,dt8,dt9,dt10,dt11,dt12,dt13];
    var myTrip17 = [riley1,riley2,riley3,riley4,riley5,riley6,riley7,riley8,riley9,riley10,riley11,riley12,riley13,riley14,riley15,riley16,riley17,riley18,riley19,riley20,riley21,riley22,riley23];
    var myTrip18 = [arb1,arb2,arb4,arb5,arb6,arb7,arb8,arb9,arb10,arb11,arb12,arb13,arb14,arb15,arb16,arb17,arb18,arb19,arb20,arb21,arb22,arb23,arb24,arb25,arb26,arb27,arb28,arb29,arb30,arb31,arb32,arb33,arb34,
        arb35,arb36,arb37,arb38];
    var myTrip19 = [shaugh1,shaugh2,shaugh3,shaugh4,shaugh5,shaugh6,shaugh7,shaugh8,shaugh9,shaugh10,shaugh11,shaugh12,shaugh13,shaugh14,shaugh15,shaugh16,shaugh17,shaugh18,shaugh19,shaugh20,shaugh21,shaugh22,shaugh23,shaugh24,
        shaugh25,shaugh26,shaugh27,shaugh28,shaugh29,shaugh30,shaugh31,shaugh32,shaugh33,shaugh34,shaugh35];
    var myTrip20 = [fair12,fair15,fair14,fair11,fair10,fair9,fair8,fair7,fair6,fair5,fair4,fair3,fair2,fair1];
    var myTrip21 = [mount1,mount2,mount3,mount4,mount5,mount6,mount7,mount8,mount9,mount10,mount11,mount12,mount13,mount14,mount15,mount16,mount17,mount18,mount19,mount20,mount21,mount22,mount23,mount24,mount25,mount26,
        mount27,mount28,mount29];
    var myTrip22 = [cam1,cam2,cam3,cam4,cam5,cam6,cam7,cam8,cam9,cam10,cam11,cam12,cam13,cam14,cam15,cam16,cam17,cam18,cam19,cam20,cam21,cam22,cam23,cam24,cam25,cam26,cam27,cam28,cam29,cam30];

    //SPRINT 3: append var names to allow for a for loop to reduce amount of declarations
    var flightPath = new google.maps.Polygon({
		path: myTrip,
		strokeColor: "#0066CC",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#0066CC",
		fillOpacity: 0.4
	});
    var flightPath2 = new google.maps.Polygon({
        path: myTrip2,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath3 = new google.maps.Polygon({
        path: myTrip3,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath4 = new google.maps.Polygon({
        path: myTrip4,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath5 = new google.maps.Polygon({
        path: myTrip5,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath6 = new google.maps.Polygon({
        path: myTrip6,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath7 = new google.maps.Polygon({
        path: myTrip7,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath8 = new google.maps.Polygon({
        path: myTrip8,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath9 = new google.maps.Polygon({
        path: myTrip9,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath10 = new google.maps.Polygon({
        path: myTrip10,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath11 = new google.maps.Polygon({
        path: myTrip11,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath12 = new google.maps.Polygon({
        path: myTrip12,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath13 = new google.maps.Polygon({
        path: myTrip13,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath14 = new google.maps.Polygon({
        path: myTrip14,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath15 = new google.maps.Polygon({
        path: myTrip15,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath16 = new google.maps.Polygon({
        path: myTrip16,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath17 = new google.maps.Polygon({
        path: myTrip17,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath18 = new google.maps.Polygon({
        path: myTrip18,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath19 = new google.maps.Polygon({
        path: myTrip19,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath20 = new google.maps.Polygon({
        path: myTrip20,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath21 = new google.maps.Polygon({
        path: myTrip21,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    var flightPath22 = new google.maps.Polygon({
        path: myTrip22,
        strokeColor: "#0066CC",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#0066CC",
        fillOpacity: 0.4
    });
    flightPath.setMap(map);
    flightPath2.setMap(map);
    flightPath3.setMap(map);
    flightPath4.setMap(map);
    flightPath5.setMap(map);
    flightPath6.setMap(map);
    flightPath7.setMap(map);
    flightPath8.setMap(map);
    flightPath9.setMap(map);
    flightPath10.setMap(map);
    flightPath11.setMap(map);
    flightPath12.setMap(map);
    flightPath13.setMap(map);
    flightPath14.setMap(map);
    flightPath15.setMap(map);
    flightPath16.setMap(map);
    flightPath17.setMap(map);
    flightPath18.setMap(map);
    flightPath19.setMap(map);
    flightPath20.setMap(map);
    flightPath21.setMap(map);
    flightPath22.setMap(map);

    //SPRINT 3: use housing data we have in the database
var infowindow = new google.maps.InfoWindow({		    //info windows for each overlay section house and rent prices from 2011 censusfrom
     position: {lat: 49.210724, lng:-123.130187},
     content:"This is Marpole the average house price here is $520 937 and the average rent is $893/month"	   
    });
var infowindow2 = new google.maps.InfoWindow({
    position: {lat: 49.224486, lng: - 123.090788},
    content:"This is Sunset the average house price here is $610 360 and the average rent is $746/month"
    });
var infowindow3 = new google.maps.InfoWindow({
    position: {lat:49.229786 , lng:-123.116200},
    content: "This is Oakridge the average house price here is $823 641 and the average rent is $893/month"
    });
var infowindow4 = new google.maps.InfoWindow({     
    position: {lat: 49.234133, lng: -123.155351},
    content:"This is Kerrisdale the average house price here is $892 971 and the average rent is $1140/month"
    });
var infowindow5 = new google.maps.InfoWindow({
    position: {lat: 49.248402, lng: -123.070127 },
    content:"This is Kensington-cedar cottage the average house price here is $549 605 and the average rent is $839/month"
    });
var infowindow6 = new google.maps.InfoWindow({
    position: {lat: 49.218530, lng:-123.065873},
    content:"This is Victoria-Fraserview the average house price here is $631 938 and the average rent is $907/month"
    });
var infowindow7 = new google.maps.InfoWindow({  
    position: {lat:49.224704 , lng:-123.041063},   
    content:"This is Killarney the average house price here is $622 103 and the average rent is $1145/month"
    });
var infowindow8 = new google.maps.InfoWindow({
    position: {lat: 49.241066, lng: -123.038755},
    content:"This is Renfrew-Collingwood the average house price here is $489 073 and the average rent is $863/month"
    });
var infowindow9 = new google.maps.InfoWindow({
    position: {lat: 49.281126, lng: -123.044077 },
    content:"This is Hestings-Sunrise the average house price here is $558 230 and the average rent is $967/month"
    });
var infowindow10 = new google.maps.InfoWindow({
    position: {lat: 49.269723, lng:-123.069708},
    content:"This is Grandview-Woodland the average house price here is $543 295 and the average rent is $850/month"
    });
var infowindow11 = new google.maps.InfoWindow({
    position: {lat: 49.273752, lng: -123.088475 },
    content:"This is Strathcona the average house price here is $433 846 and the average rent is $608/month"
    });
var infowindow12 = new google.maps.InfoWindow({   
    position: {lat:49.225586 , lng:-123.201438},
    content:"This is Dunbar-Southlands (Musqueam) the average house price here is $1 203 707 and the average rent is $1521/month"
    });
var infowindow13 = new google.maps.InfoWindow({
    position: {lat: 49.260966, lng: -123.200093},
    content:"This is West Point Grey the average house price here is $1 042 693 and the average rent is $1330/month"
    });
var infowindow14 = new google.maps.InfoWindow({
    position: {lat: 49.270937, lng:-123.162142 },
    content:"This is Kitsilano the average house price here is $990 401 and the average rent is $1196/month"
    });
var infowindow15 = new google.maps.InfoWindow({
    position: {lat: 49.285646, lng: -123.130621},
    content:"This is West End the average house price here is $677 516 and the average rent is $1278/month"
    });
var infowindow16 = new google.maps.InfoWindow({   
    position: {lat: 49.271404, lng: -123.099632},
    content:"This is Central Business District the average house price here is $494 459 and the average rent is $758/month"
    });
var infowindow17 = new google.maps.InfoWindow({  
    position: {lat:49.240486, lng:-123.101472},
    content:"This is Riley Park the average house price here is $623 525 and the average rent is $872/month"
    });
var infowindow18 = new google.maps.InfoWindow({
    position: {lat:49.253611 , lng:-123.160431},
    content:"This is Arbutus Ridge the average house price here is $916 210 and the average rent is $1464/month"
    });
var infowindow19 = new google.maps.InfoWindow({
    position: {lat: 49.245337, lng: -123.141323},
    content:"This is Shaughnessy the average house price here is $1 667 072 and the average rent is $1590/month"
    });
var infowindow20 = new google.maps.InfoWindow({
    position: {lat: 49.266031, lng: -123.128940},
    content:"This is Fairview the average house price here is $483 231 and the average rent is $1029/month"
    });
var infowindow21 = new google.maps.InfoWindow({
    position: {lat: 49.258266, lng: -123.108180},
    content:"This is Mount Pleasant the average house price here is $720 114 and the average rent is $981/month"
    });
var infowindow22 = new google.maps.InfoWindow({
    position: {lat: 49.245160, lng:-123.120786},
    content:"This is South Cambie the average house price here is $710 693 and the average rent is $1067/month"
    });

    //SPRINT 3: for loop to reduce the amount of redundant declarations
    flightPath.addListener('click', function() {  //make the info windows pop up when overlay clicked on
        infowindow.open(map,flightPath);
    });
    flightPath2.addListener('click', function() {
        infowindow2.open(map,flightPath2);
    });
    flightPath3.addListener('click', function() {
        infowindow3.open(map,flightPath3);
    });
    flightPath4.addListener('click', function() {
        infowindow4.open(map,flightPath4);
    });
    flightPath5.addListener('click', function() {
        infowindow5.open(map,flightPath5);
    });
    flightPath6.addListener('click', function() {
        infowindow6.open(map,flightPath6);
    });
    flightPath7.addListener('click', function() {
        infowindow7.open(map,flightPath7);
    });
    flightPath8.addListener('click', function() {
        infowindow8.open(map,flightPath8);
    });
    flightPath9.addListener('click', function() {
        infowindow9.open(map,flightPath9);
    });
    flightPath10.addListener('click', function() {
        infowindow10.open(map,flightPath10);
    });
    flightPath11.addListener('click', function() {
        infowindow11.open(map,flightPath11);
    });
    flightPath12.addListener('click', function() {
        infowindow12.open(map,flightPath12);
    });
    flightPath13.addListener('click', function() {
        infowindow13.open(map,flightPath13);
    });
    flightPath14.addListener('click', function() {
        infowindow14.open(map,flightPath14);
    });
    flightPath15.addListener('click', function() {
        infowindow15.open(map,flightPath15);
    });
    flightPath16.addListener('click', function() {
        infowindow16.open(map,flightPath16);
    });
    flightPath17.addListener('click', function() {
        infowindow17.open(map,flightPath17);
    });
    flightPath18.addListener('click', function() {
        infowindow18.open(map,flightPath18);
    });
    flightPath19.addListener('click', function() {
        infowindow19.open(map,flightPath19);
    });
    flightPath20.addListener('click', function() {
        infowindow20.open(map,flightPath20);
    });
    flightPath21.addListener('click', function() {
        infowindow21.open(map,flightPath21);
    });
    flightPath22.addListener('click', function() {
        infowindow22.open(map,flightPath22);
    });

}
//http://www.vancouversun.com/business/vanmap/6235770/story.html?__lsa=c6a3-24c3
//http://www.vancouversun.com/news/vanmap/6236004/story.html and