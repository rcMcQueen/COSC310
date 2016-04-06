var map;
var flightPath = [];
var marpole = new Array(6);
var sunset = new Array(5);
var oakridge = new Array(4);
var kessidale = new Array(9);
var kensington = new Array(9);
var victoria = new Array(4);
var killarney = new Array(4);
var renfrew = new Array(13);
var hastings = new Array(19);
var grand = new Array(8);
var strat = new Array(39);
var dunbar = new Array(71);
var grey = new Array(34);
var kits = new Array(20);
var west = new Array(12);
var dt = new Array(34);
var riley = new Array(23);
var arb = new Array(38);
var shaugh = new Array(35);
var fair = new Array(15);
var mount = new Array(29);
var cam = new Array(30);
var markers = [];
var currentIcon;
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

function initMap() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {center: {lat: 49.26, lng: -123.1207}, zoom: 12});
}

google.maps.event.addDomListener(window, 'load', initMap);

function areaSearch() {
    document.getElementById('write').innerHTML = "";
    var name = document.getElementById('area').value.toString();
    if ((name.toLowerCase()) == ("sunset")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.221667, lng: -123.080049}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("central business district")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.271214, lng: -123.098854}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("mount pleasant")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.258266, lng: -123.108180}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("hastings-sunrise")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.281126, lng: -123.044077}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("strathcona")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.273752, lng: -123.088475}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("kensington-cedar cottage")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.248402, lng: -123.070127}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("west end")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.285646, lng: -123.130621}, zoom: 15});
    }

    else if ((name.toLowerCase()) == ("kerrisdale")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.234133, lng: -123.155351}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("west point grey")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.260966, lng: -123.200093}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("renfrew-collingwood")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.241066, lng: -123.038755}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("fairview")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.266031, lng: -123.128940}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("shaughnessy")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.245337, lng: -123.141324}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("stanley park")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.301705, lng: -123.141700}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("kitsilano")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.270937, lng: -123.162142}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("south cambie")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.245160, lng: -123.120786}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("marpole")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.210724, lng: -123.130187}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("grandview-woodland")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.269723, lng: -123.069708}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("victoria-fraserview")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.218530, lng: -123.065873}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("oakridge")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.229786, lng: -123.116200}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("killarney")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.224704, lng: -123.041063}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("arbutus ridge")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.253611, lng: -123.160431}, zoom: 15});
    }
    else if ((name.toLowerCase()) == ("musqueam")) {
        var mapDiv = document.getElementById('map');
        map = new google.maps.Map(mapDiv, {center: {lat: 49.225587, lng: -123.201438}, zoom: 15});
    }

    else {
        document.getElementById('write').innerHTML = ("Invalid Entry, Try:\n Sunset, Central Business District, Mount Pleasant, Hastings-Sunrise, Strathcona, Kensington-Cedar Cottage, West End, Kerrisdale, West Point Grey, Renfrew-Collingwood, Fairview, Shaughnessy, Stanley Park, Kitsilano, South Cambie, Marpole, Grandview-Woodland, Victoria-Fraserview, Oakridge, Killarney, Arbutus Ridge, Musqueam");
    }
    ;

}

function initOverlay() {
//document.getElementById("ins").innerHTML="Prices go from most expensive to least from red to yellow to blue, darker to lighter.";
    var x = {
        lat: 49.248,
        lng: -123.1207
    };
    //Stores each independent coordinate in their respective arrays.

    marpole[0] = new google.maps.LatLng(49.205083, -123.10309); //bottom left
    marpole[1] = new google.maps.LatLng(49.206242, -123.14954); //bottom right
    marpole[2] = new google.maps.LatLng(49.219443, -123.14826); //top left
    marpole[3] = new google.maps.LatLng(49.218507, -123.104290); //top right
    marpole[4] = new google.maps.LatLng(49.200169, -123.135510);//between marpole 1 & 2
    marpole[5] = new google.maps.LatLng(49.204095, -123.117606); //between marpole 5 & 2

    sunset[0] = new google.maps.LatLng(49.205002, -123.102967); //bottom left
    sunset[1] = new google.maps.LatLng(49.233182, -123.10566); //top left
    sunset[2] = new google.maps.LatLng(49.232700, -123.07698); //top right
    sunset[3] = new google.maps.LatLng(49.208557, -123.07726); //bottom right
    sunset[4] = new google.maps.LatLng(49.205770, -123.091238); //between sunset4 & 1

    oakridge[0] = new google.maps.LatLng(49.218507, -123.104290); //bottom right
    oakridge[1] = new google.maps.LatLng(49.219394, -123.14009); //bottom left
    oakridge[2] = new google.maps.LatLng(49.234281, -123.13954); //top left
    oakridge[3] = new google.maps.LatLng(49.233182, -123.10566); //top right

    kessidale[0] = new google.maps.LatLng(49.217121, -123.17918); // bottom left
    kessidale[1] = new google.maps.LatLng(49.234728, -123.17869); // top left
    kessidale[2] = new google.maps.LatLng(49.234281, -123.13954); // top right
    kessidale[3] = new google.maps.LatLng(49.219394, -123.14009); // bottom bottom right
    kessidale[4] = new google.maps.LatLng(49.205733, -123.149837); //bottom right corner
    kessidale[5] = new google.maps.LatLng(49.206366, -123.149362); //bottom rightmost corner
    kessidale[6] = new google.maps.LatLng(49.214218, -123.163644); //between kessidale 1 & 6
    kessidale[7] = new google.maps.LatLng(49.219463, -123.148264); //between kessidale5 and kessidale6

    kensington[0] = new google.maps.LatLng(49.232997, -123.09038); // bottom left
    kensington[1] = new google.maps.LatLng(49.232899, -123.05888); // bottom right
    kensington[2] = new google.maps.LatLng(49.256417, -123.08975); // top left
    kensington[3] = new google.maps.LatLng(49.262135, -123.05678); // top right
    kensington[4] = new google.maps.LatLng(49.262298, -123.07741); // top top left
    kensington[5] = new google.maps.LatLng(49.240468, -123.058735); // above bottom right
    kensington[6] = new google.maps.LatLng(49.240895, -123.058787); // above kensington6
    kensington[7] = new google.maps.LatLng(49.243406, -123.056794); // above kensington7
    kensington[8] = new google.maps.LatLng(49.256261, -123.077566); // corner between kensington5 & 3


    victoria[0] = new google.maps.LatLng(49.208487, -123.07743); // bottom left
    victoria[1] = new google.maps.LatLng(49.205305, -123.05693); // bottom right
    victoria[2] = new google.maps.LatLng(49.232631, -123.07699); // top left
    victoria[3] = new google.maps.LatLng(49.232735, -123.04884); // top right

    killarney[0] = new google.maps.LatLng(49.205257, -123.05678); // bottom left
    killarney[1] = new google.maps.LatLng(49.201242, -123.02349); // bottom right
    killarney[2] = new google.maps.LatLng(49.232765, -123.04876); // top left
    killarney[3] = new google.maps.LatLng(49.232210, -123.02367); // top right

    renfrew[0] = new google.maps.LatLng(49.232874, -123.058824); // bottom left
    renfrew[1] = new google.maps.LatLng(49.232384, -123.023616); // bottom right
    renfrew[2] = new google.maps.LatLng(49.265453, -123.023791); // top right
    renfrew[3] = new google.maps.LatLng(49.262068, -123.056457); // top left
    renfrew[4] = new google.maps.LatLng(49.243357, -123.056626); // below top left
    renfrew[5] = new google.maps.LatLng(49.240802, -123.058646); // above bottom left
    renfrew[6] = new google.maps.LatLng(49.261801, -123.032318); // between top left and top right
    renfrew[7] = new google.maps.LatLng(49.261919, -123.031395); // between renfrew 7 and renfrew 9
    renfrew[8] = new google.maps.LatLng(49.262039, -123.030923); // between renfrew 8 and top right
    renfrew[9] = new google.maps.LatLng(49.262164, -123.030441); //
    renfrew[10] = new google.maps.LatLng(49.264687, -123.026206); //
    renfrew[11] = new google.maps.LatLng(49.264856, -123.025881); //
    renfrew[12] = new google.maps.LatLng(49.265290, -123.024503); //

    hastings[0] = new google.maps.LatLng(49.26212, -123.05644); // bottom left
    hastings[1] = new google.maps.LatLng(49.265631, -123.023772); // bottom right
    hastings[2] = new google.maps.LatLng(49.293426, -123.023526); // top right
    hastings[3] = new google.maps.LatLng(49.265455, -123.02456); // top left
    hastings[4] = new google.maps.LatLng(49.265036, -123.025911); //
    hastings[5] = new google.maps.LatLng(49.264926, -123.026184); //
    hastings[6] = new google.maps.LatLng(49.264397, -123.027214); //
    hastings[7] = new google.maps.LatLng(49.263616, -123.028375); //
    hastings[8] = new google.maps.LatLng(49.262596, -123.029912); //
    hastings[9] = new google.maps.LatLng(49.262349, -123.030415); //
    hastings[10] = new google.maps.LatLng(49.262155, -123.030957); //
    hastings[11] = new google.maps.LatLng(49.262001, -123.031883); //
    hastings[12] = new google.maps.LatLng(49.261992, -123.032968); //
    hastings[13] = new google.maps.LatLng(49.291904, -123.056579); // after bottom left
    hastings[14] = new google.maps.LatLng(49.293955, -123.050082); //
    hastings[15] = new google.maps.LatLng(49.292074, -123.040143); //
    hastings[16] = new google.maps.LatLng(49.290546, -123.035302); //
    hastings[17] = new google.maps.LatLng(49.293426, -123.023526); //

    grand[0] = new google.maps.LatLng(49.262457, -123.077404); // bottom left
    grand[1] = new google.maps.LatLng(49.262166, -123.056757); // bottom right
    grand[2] = new google.maps.LatLng(49.291916, -123.056661); // top right
    grand[3] = new google.maps.LatLng(49.289489, -123.076901); // top left
    grand[4] = new google.maps.LatLng(49.2866873, -123.064853); // left of top right
    grand[5] = new google.maps.LatLng(49.2896400, -123.064853); // ""
    grand[6] = new google.maps.LatLng(49.28964, -123.069743); // ""
    grand[7] = new google.maps.LatLng(49.288001, -123.069826); // ""

    strat[0] = new google.maps.LatLng(49.290234, -123.100033); //
    strat[1] = new google.maps.LatLng(49.289514, -123.076977); // top right
    strat[2] = new google.maps.LatLng(49.285532, -123.100611); // top left
    strat[3] = new google.maps.LatLng(49.266792, -123.089845); //
    strat[4] = new google.maps.LatLng(49.266746, -123.089294); //
    strat[5] = new google.maps.LatLng(49.270823, -123.100436); // above bottom left
    strat[6] = new google.maps.LatLng(49.271031, -123.100397); //
    strat[7] = new google.maps.LatLng(49.271806, -123.099986); //
    strat[8] = new google.maps.LatLng(49.272072, -123.099917); //
    strat[9] = new google.maps.LatLng(49.278097, -123.099664); //
    strat[10] = new google.maps.LatLng(49.278310, -123.099733); //
    strat[11] = new google.maps.LatLng(49.284070, -123.099471); //
    strat[12] = new google.maps.LatLng(49.284116, -123.099469); //
    strat[13] = new google.maps.LatLng(49.284308, -123.099371); //
    strat[14] = new google.maps.LatLng(49.284502, -123.099181); //
    strat[15] = new google.maps.LatLng(49.284575, -123.099134); //
    strat[16] = new google.maps.LatLng(49.284681, -123.099107); //
    strat[17] = new google.maps.LatLng(49.284787, -123.099111); //
    strat[18] = new google.maps.LatLng(49.284918, -123.099166); //
    strat[19] = new google.maps.LatLng(49.285043, -123.099278); //
    strat[20] = new google.maps.LatLng(49.285150, -123.09944); //
    strat[21] = new google.maps.LatLng(49.285215, -123.099609); //
    strat[22] = new google.maps.LatLng(49.285251, -123.099791); //
    strat[23] = new google.maps.LatLng(49.285260, -123.099978); //
    strat[24] = new google.maps.LatLng(49.285225, -123.10022); //
    strat[25] = new google.maps.LatLng(49.2652040, -123.077544); // bottom right
    strat[26] = new google.maps.LatLng(49.265281, -123.081391); //
    strat[27] = new google.maps.LatLng(49.266922, -123.096215); //
    strat[28] = new google.maps.LatLng(49.268127, -123.098741); //
    strat[29] = new google.maps.LatLng(49.268357, -123.099014); //
    strat[30] = new google.maps.LatLng(49.269015, -123.100186); //
    strat[31] = new google.maps.LatLng(49.269151, -123.100558); //

    dunbar[0] = new google.maps.LatLng(49.236834, -123.221578); // bottom left
    dunbar[1] = new google.maps.LatLng(49.234775, -123.170351); // bottom right
    dunbar[2] = new google.maps.LatLng(49.257569, -123.170390); // top right
    dunbar[3] = new google.maps.LatLng(49.236834, -123.221578); // up from bottom left
    dunbar[4] = new google.maps.LatLng(49.239437, -123.219831); //
    dunbar[5] = new google.maps.LatLng(49.239511, -123.219695); //
    dunbar[6] = new google.maps.LatLng(49.239521, -123.219585); //
    dunbar[7] = new google.maps.LatLng(49.239513, -123.219526); //
    dunbar[8] = new google.maps.LatLng(49.235249, -123.208494); //
    dunbar[9] = new google.maps.LatLng(49.237351, -123.205381); //
    dunbar[10] = new google.maps.LatLng(49.235094, -123.197082); //
    dunbar[11] = new google.maps.LatLng(49.235378, -123.196912); //
    dunbar[12] = new google.maps.LatLng(49.235535, -123.196859); //
    dunbar[13] = new google.maps.LatLng(49.235602, -123.196857); //
    dunbar[14] = new google.maps.LatLng(49.236613, -123.196886); //
    dunbar[15] = new google.maps.LatLng(49.236616, -123.198568); //
    dunbar[16] = new google.maps.LatLng(49.238555, -123.198537); //
    dunbar[17] = new google.maps.LatLng(49.238537, -123.196848); //
    dunbar[18] = new google.maps.LatLng(49.246035, -123.196762); //
    dunbar[19] = new google.maps.LatLng(49.246143, -123.196771); //
    dunbar[20] = new google.maps.LatLng(49.246203, -123.196791); //
    dunbar[21] = new google.maps.LatLng(49.246206, -123.198412); //
    dunbar[22] = new google.maps.LatLng(49.246223, -123.198729); //
    dunbar[23] = new google.maps.LatLng(49.246268, -123.198939); //
    dunbar[24] = new google.maps.LatLng(49.246310, -123.199072); //
    dunbar[25] = new google.maps.LatLng(49.249117, -123.20461); //
    dunbar[26] = new google.maps.LatLng(49.249150, -123.20459); //
    dunbar[27] = new google.maps.LatLng(49.249301, -123.204442); //
    dunbar[28] = new google.maps.LatLng(49.249373, -123.204346); //
    dunbar[29] = new google.maps.LatLng(49.249400, -123.204272); //
    dunbar[30] = new google.maps.LatLng(49.249433, -123.204135); //
    dunbar[31] = new google.maps.LatLng(49.250071, -123.20044); //
    dunbar[32] = new google.maps.LatLng(49.250091, -123.199081); //
    dunbar[33] = new google.maps.LatLng(49.250164, -123.198873); //
    dunbar[34] = new google.maps.LatLng(49.250151, -123.193645); //
    dunbar[35] = new google.maps.LatLng(49.253334, -123.193625); //
    dunbar[36] = new google.maps.LatLng(49.253342, -123.195979); //
    dunbar[37] = new google.maps.LatLng(49.253378, -123.196014); //
    dunbar[38] = new google.maps.LatLng(49.253427, -123.196036); //
    dunbar[39] = new google.maps.LatLng(49.253745, -123.196035); //
    dunbar[40] = new google.maps.LatLng(49.255148, -123.196047); //
    dunbar[41] = new google.maps.LatLng(49.255156, -123.196592); //
    dunbar[42] = new google.maps.LatLng(49.257993, -123.196598); //
    dunbar[43] = new google.maps.LatLng(49.257335, -123.170281); // below top right
    dunbar[44] = new google.maps.LatLng(49.257152, -123.170147); //
    dunbar[45] = new google.maps.LatLng(49.257108, -123.170123); //
    dunbar[46] = new google.maps.LatLng(49.257079, -123.170104); //
    dunbar[47] = new google.maps.LatLng(49.255495, -123.170108); //
    dunbar[48] = new google.maps.LatLng(49.255089, -123.170135); //
    dunbar[49] = new google.maps.LatLng(49.25104, -123.170217); //
    dunbar[50] = new google.maps.LatLng(49.251023, -123.171114); //
    dunbar[51] = new google.maps.LatLng(49.250998, -123.171328); //
    dunbar[52] = new google.maps.LatLng(49.25099, -123.171368); //
    dunbar[53] = new google.maps.LatLng(49.250427, -123.170881); //
    dunbar[54] = new google.maps.LatLng(49.249633, -123.170174); //
    dunbar[55] = new google.maps.LatLng(49.249519, -123.170077); //
    dunbar[56] = new google.maps.LatLng(49.249471, -123.170057); //
    dunbar[57] = new google.maps.LatLng(49.24945, -123.170057); //
    dunbar[58] = new google.maps.LatLng(49.249422, -123.170067); //
    dunbar[59] = new google.maps.LatLng(49.249806, -123.17074); //
    dunbar[60] = new google.maps.LatLng(49.250028, -123.171299); //
    dunbar[61] = new google.maps.LatLng(49.250135, -123.171778); //
    dunbar[62] = new google.maps.LatLng(49.250152, -123.172197); //
    dunbar[63] = new google.maps.LatLng(49.248323, -123.170786); //
    dunbar[64] = new google.maps.LatLng(49.248098, -123.17046); //
    dunbar[65] = new google.maps.LatLng(49.247872, -123.170249); //
    dunbar[66] = new google.maps.LatLng(49.247566, -123.170201); //
    dunbar[67] = new google.maps.LatLng(49.234758, -123.170334); //
    dunbar[68] = new google.maps.LatLng(49.217168, -123.179298); //
    dunbar[69] = new google.maps.LatLng(49.234738, -123.178732); //

    grey[0] = new google.maps.LatLng(49.258095, -123.203164); // bottom left
    grey[1] = new google.maps.LatLng(49.267371, -123.215108);
    grey[2] = new google.maps.LatLng(49.267349, -123.217019); //
    grey[3] = new google.maps.LatLng(49.267321, -123.217605);//
    grey[4] = new google.maps.LatLng(49.267186, -123.219526); //
    grey[5] = new google.maps.LatLng(49.267177, -123.219589); //
    grey[6] = new google.maps.LatLng(49.268818, -123.219598); //
    grey[7] = new google.maps.LatLng(49.268898, -123.219635); //
    grey[8] = new google.maps.LatLng(49.268723, -123.221226); //
    grey[9] = new google.maps.LatLng(49.268862, -123.221269); //
    grey[10] = new google.maps.LatLng(49.269982, -123.221926); //
    grey[11] = new google.maps.LatLng(49.270872, -123.222251); //
    grey[12] = new google.maps.LatLng(49.271148, -123.222429); //
    grey[13] = new google.maps.LatLng(49.27136, -123.22259); //
    grey[14] = new google.maps.LatLng(49.27224, -123.224352); //
    grey[15] = new google.maps.LatLng(49.272798, -123.224696); //
    grey[16] = new google.maps.LatLng(49.273296, -123.224825); //
    grey[17] = new google.maps.LatLng(49.278201, -123.223829); //
    grey[18] = new google.maps.LatLng(49.273392, -123.185554); // top right
    grey[19] = new google.maps.LatLng(); // below top right
    grey[20] = new google.maps.LatLng(49.261361, -123.186004); //
    grey[21] = new google.maps.LatLng(49.261083, -123.185855); //
    grey[22] = new google.maps.LatLng(49.259953, -123.184212); //
    grey[23] = new google.maps.LatLng(49.259836, -123.184085); //
    grey[24] = new google.maps.LatLng(49.259786, -123.184047); //
    grey[25] = new google.maps.LatLng(49.259675, -123.183999); //
    grey[26] = new google.maps.LatLng(49.259378, -123.183985); //
    grey[27] = new google.maps.LatLng(49.257838, -123.184048); //

    kits[0] = new google.maps.LatLng(49.257836, -123.183995); // bottom left
    kits[1] = new google.maps.LatLng(49.259672, -123.1839); // above bottom left
    kits[2] = new google.maps.LatLng(49.259781, -123.183942); //
    kits[3] = new google.maps.LatLng(49.259820, -123.184000); //
    kits[4] = new google.maps.LatLng(49.259994, -123.184141); //
    kits[5] = new google.maps.LatLng(49.261115, -123.185777); //
    kits[6] = new google.maps.LatLng(49.261311, -123.185904); //
    kits[7] = new google.maps.LatLng(49.273400, -123.185494); // top left
    kits[8] = new google.maps.LatLng(49.257196, -123.146036); // bottom right
    kits[9] = new google.maps.LatLng(49.266975, -123.145674); // above bottom right
    kits[10] = new google.maps.LatLng(49.267148, -123.145719); //
    kits[11] = new google.maps.LatLng(49.267176, -123.145724); //
    kits[12] = new google.maps.LatLng(49.272141, -123.145532); //
    kits[13] = new google.maps.LatLng(49.272476, -123.145351); //
    kits[14] = new google.maps.LatLng(49.273030, -123.1447310); //
    kits[15] = new google.maps.LatLng(49.273293, -123.143890); //
    kits[16] = new google.maps.LatLng(49.274915, -123.138900); //
    kits[17] = new google.maps.LatLng(49.279147, -123.14728); // between top right and top left
    kits[18] = new google.maps.LatLng(49.274312, -123.162752); //
    kits[19] = new google.maps.LatLng(49.278393, -123.142278); //between top right and kits19


    west[0] = new google.maps.LatLng(49.275763, -123.136238); // bottom left
    west[1] = new google.maps.LatLng(49.276243, -123.136083); //
    west[2] = new google.maps.LatLng(49.276556, -123.136739); //
    west[3] = new google.maps.LatLng(49.279742, -123.140468); //
    west[4] = new google.maps.LatLng(49.284306, -123.144221); //
    west[5] = new google.maps.LatLng(49.288433, -123.143664); //
    west[6] = new google.maps.LatLng(49.289959, -123.146425); //
    west[7] = new google.maps.LatLng(49.2929632, -123.141828); //
    west[8] = new google.maps.LatLng(49.294238, -123.139481); //
    west[9] = new google.maps.LatLng(49.294548, -123.137511); //
    west[10] = new google.maps.LatLng(49.294833, -123.136915); //top right;
    west[11] = new google.maps.LatLng(49.284448, -123.121165); // bottom right

    dt[0] = new google.maps.LatLng(49.284467, -123.121129); //top right
    dt[1] = new google.maps.LatLng(49.294047, -123.135938); //above top right
    dt[2] = new google.maps.LatLng(49.294095, -123.135952);
    dt[3] = new google.maps.LatLng(49.294114, -123.135966);
    dt[4] = new google.maps.LatLng(49.2944539, -123.136528);
    dt[5] = new google.maps.LatLng(49.29483, -123.136679);
    dt[6] = new google.maps.LatLng(49.295355, -123.135748);
    dt[7] = new google.maps.LatLng(49.295355, -123.134569);
    dt[8] = new google.maps.LatLng(49.294738, -123.133567);
    dt[9] = new google.maps.LatLng(49.29376, -123.12969);
    dt[10] = new google.maps.LatLng(49.289543, -123.114073);
    dt[11] = new google.maps.LatLng(49.289831, -123.106764);
    dt[12] = new google.maps.LatLng(49.290199, -123.100062); //top right corner
    dt[13] = new google.maps.LatLng(49.275728, -123.136208); // bottom left
    dt[14] = new google.maps.LatLng(49.271504, -123.130072);
    dt[15] = new google.maps.LatLng(49.270491, -123.125209);
    dt[16] = new google.maps.LatLng(49.270789, -123.125502);
    dt[17] = new google.maps.LatLng(49.271017, -123.125848);
    dt[18] = new google.maps.LatLng(49.271863, -123.124733);
    dt[19] = new google.maps.LatLng(49.271831, -123.124626);
    dt[20] = new google.maps.LatLng(49.271878, -123.124544);
    dt[21] = new google.maps.LatLng(49.271800, -123.124413);
    dt[22] = new google.maps.LatLng(49.271802, -123.123731);
    dt[23] = new google.maps.LatLng(49.271856, -123.12357);
    dt[24] = new google.maps.LatLng(49.271233, -123.122603);
    dt[25] = new google.maps.LatLng(49.271216, -123.122626);
    dt[26] = new google.maps.LatLng(49.271067, -123.122401);
    dt[27] = new google.maps.LatLng(49.271224, -123.122169);
    dt[28] = new google.maps.LatLng(49.270869, -123.121624);
    dt[29] = new google.maps.LatLng(49.270871, -123.121106);
    dt[30] = new google.maps.LatLng(49.271163, -123.120089);
    dt[31] = new google.maps.LatLng(49.272945, -123.102912);
    dt[32] = new google.maps.LatLng(49.2729631, -123.102928);
    dt[33] = new google.maps.LatLng(49.272722, -123.100175); // bottom right

    riley[0] = new google.maps.LatLng(49.233636, -123.116006); // bottom left going UP
    riley[1] = new google.maps.LatLng(49.238205, -123.115799); //
    riley[2] = new google.maps.LatLng(49.238594, -123.115979); //
    riley[3] = new google.maps.LatLng(49.239128, -123.116544); //
    riley[4] = new google.maps.LatLng(49.24047, -123.118035); //
    riley[5] = new google.maps.LatLng(49.240847, -123.11821); //
    riley[6] = new google.maps.LatLng(49.242584, -123.118096); //
    riley[7] = new google.maps.LatLng(49.243186, -123.117732); //
    riley[8] = new google.maps.LatLng(49.243557, -123.117197); //
    riley[9] = new google.maps.LatLng(49.244365, -123.115844); //
    riley[10] = new google.maps.LatLng(49.245139, -123.1153); //
    riley[11] = new google.maps.LatLng(49.245193, -123.115312); //
    riley[12] = new google.maps.LatLng(49.247981, -123.115184); //
    riley[13] = new google.maps.LatLng(49.248882, -123.115227); //
    riley[14] = new google.maps.LatLng(49.256871, -123.114967); // top left going to top right
    riley[15] = new google.maps.LatLng(49.256414, -123.089994); // top right going to bottom right
    riley[16] = new google.maps.LatLng(49.255507, -123.090026); //
    riley[17] = new google.maps.LatLng(49.255387, -123.089973); //
    riley[18] = new google.maps.LatLng(49.233915, -123.090556); //
    riley[19] = new google.maps.LatLng(49.233734, -123.090657); //
    riley[20] = new google.maps.LatLng(49.232969, -123.090655); // bottom right going to bottom left
    riley[21] = new google.maps.LatLng(49.233029, -123.098365); //
    riley[22] = new google.maps.LatLng(49.233064, -123.098577); //

    arb[0] = new google.maps.LatLng(49.25725, -123.152438); // top right going down to bottom right
    arb[1] = new google.maps.LatLng(49.251636, -123.152411); //
    arb[2] = new google.maps.LatLng(49.251497, -123.152482); //
    arb[3] = new google.maps.LatLng(49.25098, -123.151406); //
    arb[4] = new google.maps.LatLng(49.250183, -123.151821); //
    arb[5] = new google.maps.LatLng(49.243786, -123.147111); //
    arb[6] = new google.maps.LatLng(49.243476, -123.146954); //
    arb[7] = new google.maps.LatLng(49.242021, -123.146841); //
    arb[8] = new google.maps.LatLng(49.241955, -123.146854); //
    arb[9] = new google.maps.LatLng(49.241105, -123.147342); //
    arb[10] = new google.maps.LatLng(49.240556, -123.148233); //
    arb[11] = new google.maps.LatLng(49.240372, -123.149149); //
    arb[12] = new google.maps.LatLng(49.240797, -123.152713); //
    arb[13] = new google.maps.LatLng(49.240642, -123.153755); //
    arb[14] = new google.maps.LatLng(49.24013, -123.154657); //
    arb[15] = new google.maps.LatLng(49.23932, -123.155054); //
    arb[16] = new google.maps.LatLng(49.234668, -123.155282); // bottom right going to bottom left
    arb[17] = new google.maps.LatLng(49.234671, -123.156377); //
    arb[18] = new google.maps.LatLng(49.234632, -123.156474); //
    arb[19] = new google.maps.LatLng(49.234752, -123.17027); // bottom left going to top left
    arb[20] = new google.maps.LatLng(49.247858, -123.170219); //
    arb[21] = new google.maps.LatLng(49.247906, -123.170261); //
    arb[22] = new google.maps.LatLng(49.249013, -123.17132); //
    arb[23] = new google.maps.LatLng(49.249063, -123.171354); //
    arb[24] = new google.maps.LatLng(49.250104, -123.172135); //
    arb[25] = new google.maps.LatLng(49.250169, -123.172192); //
    arb[26] = new google.maps.LatLng(49.25006, -123.171399); //
    arb[27] = new google.maps.LatLng(49.249452, -123.170076); //
    arb[28] = new google.maps.LatLng(49.249954, -123.170466); //
    arb[29] = new google.maps.LatLng(49.250965, -123.171346); //
    arb[30] = new google.maps.LatLng(49.250965, -123.171275); //
    arb[31] = new google.maps.LatLng(49.250986, -123.170139); //
    arb[32] = new google.maps.LatLng(49.257087, -123.170041); //
    arb[33] = new google.maps.LatLng(49.257577, -123.170308); // top left going to top right
    arb[34] = new google.maps.LatLng(49.257491, -123.164902); //
    arb[35] = new google.maps.LatLng(49.257436, -123.164283); //
    arb[36] = new google.maps.LatLng(49.257461, -123.164093); //


    shaugh[0] = new google.maps.LatLng(49.257254, -123.152373); //top left to bottom left
    shaugh[1] = new google.maps.LatLng(49.252052, -123.152507); //
    shaugh[2] = new google.maps.LatLng(49.251629, -123.152326); //
    shaugh[3] = new google.maps.LatLng(49.251516, -123.152409); //
    shaugh[4] = new google.maps.LatLng(49.251004, -123.1513); //
    shaugh[5] = new google.maps.LatLng(49.250198, -123.15174); //
    shaugh[6] = new google.maps.LatLng(49.243672, -123.146949); //
    shaugh[7] = new google.maps.LatLng(49.243091, -123.146776); //
    shaugh[8] = new google.maps.LatLng(49.242031, -123.146771); //
    shaugh[9] = new google.maps.LatLng(49.241334, -123.146966); //
    shaugh[10] = new google.maps.LatLng(49.240506, -123.147813); //
    shaugh[11] = new google.maps.LatLng(49.240294, -123.148494); //
    shaugh[12] = new google.maps.LatLng(49.240488, -123.151006); //
    shaugh[13] = new google.maps.LatLng(49.240685, -123.153035); //
    shaugh[14] = new google.maps.LatLng(49.240597, -123.153631); //
    shaugh[15] = new google.maps.LatLng(49.240315, -123.154275); //
    shaugh[16] = new google.maps.LatLng(49.239837, -123.154628); //
    shaugh[17] = new google.maps.LatLng(49.23832, -123.154839); //
    shaugh[18] = new google.maps.LatLng(49.234642, -123.15499); // bottom left to bottom right
    shaugh[19] = new google.maps.LatLng(49.234578, -123.151807); //
    shaugh[20] = new google.maps.LatLng(49.234536, -123.151747); //
    shaugh[21] = new google.maps.LatLng(49.234079, -123.130588); //
    shaugh[22] = new google.maps.LatLng(49.234115, -123.130402); //
    shaugh[23] = new google.maps.LatLng(49.234024, -123.128172); // bottom right to top right
    shaugh[24] = new google.maps.LatLng(49.235093, -123.128116); //
    shaugh[25] = new google.maps.LatLng(49.235273, -123.128035); //
    shaugh[26] = new google.maps.LatLng(49.243438, -123.127805); //
    shaugh[27] = new google.maps.LatLng(49.243504, -123.127853); //
    shaugh[28] = new google.maps.LatLng(49.245729, -123.127823); //
    shaugh[29] = new google.maps.LatLng(49.245871, -123.127755); //
    shaugh[30] = new google.maps.LatLng(49.247651, -123.127699); //
    shaugh[31] = new google.maps.LatLng(49.247832, -123.127764); //
    shaugh[32] = new google.maps.LatLng(49.250826, -123.127602); //
    shaugh[33] = new google.maps.LatLng(49.250919, -123.127532); //
    shaugh[34] = new google.maps.LatLng(49.257054, -123.127271); //top right

    fair[0] = new google.maps.LatLng(49.257188, -123.145981); // bottom left to top left
    fair[1] = new google.maps.LatLng(49.266975, -123.145601); //
    fair[2] = new google.maps.LatLng(49.26714, -123.145536); //
    fair[3] = new google.maps.LatLng(49.271975, -123.145298); //
    fair[4] = new google.maps.LatLng(49.272215, -123.145202); //
    fair[5] = new google.maps.LatLng(49.272767, -123.144646); //
    fair[6] = new google.maps.LatLng(49.273217, -123.143872); //
    fair[7] = new google.maps.LatLng(49.274874, -123.138856); // top left to top right
    fair[8] = new google.maps.LatLng(49.273216, -123.134822); //
    fair[9] = new google.maps.LatLng(49.269667, -123.130277); //
    fair[10] = new google.maps.LatLng(49.268013, -123.13046); //
    fair[11] = new google.maps.LatLng(49.256916, -123.115214); //bottom right
    fair[12] = new google.maps.LatLng(49.271108, -123.115012); // top right to bottom right
    fair[13] = new google.maps.LatLng(49.26656, -123.114978); //

    mount[0] = new google.maps.LatLng(49.271257, -123.114736); // top left to bottom left
    mount[1] = new google.maps.LatLng(49.267121, -123.11465); //
    mount[2] = new google.maps.LatLng(49.26666, -123.114599); //
    mount[3] = new google.maps.LatLng(49.265403, -123.114636); //
    mount[4] = new google.maps.LatLng(49.265347, -123.114686); //
    mount[5] = new google.maps.LatLng(49.256917, -123.114981); //bottom left to bottom right
    mount[6] = new google.maps.LatLng(49.25646, -123.090025); //
    mount[7] = new google.maps.LatLng(49.256402, -123.08976); //
    mount[8] = new google.maps.LatLng(49.256388, -123.085662); //
    mount[9] = new google.maps.LatLng(49.256441, -123.085565); //
    mount[10] = new google.maps.LatLng(49.256432, -123.085506); //
    mount[11] = new google.maps.LatLng(49.256379, -123.085435); //
    mount[12] = new google.maps.LatLng(49.256251, -123.077555); // bottom right to top right
    mount[13] = new google.maps.LatLng(49.2582, -123.077613); //
    mount[14] = new google.maps.LatLng(49.263927, -123.077637); //
    mount[15] = new google.maps.LatLng(49.264026, -123.07758); //
    mount[16] = new google.maps.LatLng(49.265147, -123.077517); // top left to bottom left
    mount[17] = new google.maps.LatLng(49.265211, -123.081313); //
    mount[18] = new google.maps.LatLng(49.266674, -123.089293); //
    mount[19] = new google.maps.LatLng(49.266728, -123.0899); //
    mount[20] = new google.maps.LatLng(49.266826, -123.096176); //
    mount[21] = new google.maps.LatLng(49.266843, -123.096286); //
    mount[22] = new google.maps.LatLng(49.26807, -123.09883); //
    mount[23] = new google.maps.LatLng(49.268216, -123.09923); //
    mount[24] = new google.maps.LatLng(49.268911, -123.100542); //
    mount[25] = new google.maps.LatLng(49.26901, -123.100878); //
    mount[26] = new google.maps.LatLng(49.270918, -123.10075); //
    mount[27] = new google.maps.LatLng(49.271952, -123.100238); //
    mount[28] = new google.maps.LatLng(49.272719, -123.100198); //


    cam[0] = new google.maps.LatLng(49.256872, -123.115253); // top right to bottom right
    cam[1] = new google.maps.LatLng(49.249106, -123.115562); //
    cam[2] = new google.maps.LatLng(49.248897, -123.115575); //
    cam[3] = new google.maps.LatLng(49.247989, -123.115728); //
    cam[4] = new google.maps.LatLng(49.245661, -123.115828); //
    cam[5] = new google.maps.LatLng(49.245177, -123.115881); //
    cam[6] = new google.maps.LatLng(49.244897, -123.11602); //
    cam[7] = new google.maps.LatLng(49.244279, -123.116665); //
    cam[8] = new google.maps.LatLng(49.243607, -123.117757); //
    cam[9] = new google.maps.LatLng(49.243233, -123.118173); //
    cam[10] = new google.maps.LatLng(49.242582, -123.118536); //
    cam[11] = new google.maps.LatLng(49.241054, -123.118632); //
    cam[12] = new google.maps.LatLng(49.240702, -123.118617); //
    cam[13] = new google.maps.LatLng(49.240344, -123.118398); //
    cam[14] = new google.maps.LatLng(49.238452, -123.116334); //
    cam[15] = new google.maps.LatLng(49.238139, -123.11621); //
    cam[16] = new google.maps.LatLng(49.233654, -123.11643); // bottom right to bottom left
    cam[17] = new google.maps.LatLng(49.234022, -123.127954); // bottom left to top left
    cam[18] = new google.maps.LatLng(49.235219, -123.127924); //
    cam[19] = new google.maps.LatLng(49.23528, -123.127959); //
    cam[20] = new google.maps.LatLng(49.243437, -123.127696); //
    cam[21] = new google.maps.LatLng(49.243502, -123.127658); //
    cam[22] = new google.maps.LatLng(49.243554, -123.127623); //
    cam[23] = new google.maps.LatLng(49.245815, -123.127599); //
    cam[24] = new google.maps.LatLng(49.245874, -123.127644); //
    cam[25] = new google.maps.LatLng(49.247668, -123.127586); //
    cam[26] = new google.maps.LatLng(49.247812, -123.127521); //
    cam[27] = new google.maps.LatLng(49.250836, -123.12738); //
    cam[28] = new google.maps.LatLng(49.250913, -123.127466); //
    cam[29] = new google.maps.LatLng(49.257069, -123.12722); // top left


    var mapOptions = {
        center: x,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.HYDRA
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
//dunbar
    var marpoleTrip = [marpole[2], marpole[3], marpole[0], marpole[5], marpole[4], marpole[1]];
    var sunsetTrip = [sunset[1], sunset[0], sunset[4], sunset[3], sunset[2]];
    var oakridgeTrip = [oakridge[0], oakridge[1], oakridge[2], oakridge[3]];
    var kessidaleTrip = [kessidale[1], kessidale[2], kessidale[3], kessidale[7], kessidale[4], kessidale[6], kessidale[0]];
    var kensingtonTrip = [kensington[1], kensington[5], kensington[6], kensington[7], kensington[3],
        kensington[4], kensington[8], kensington[2], kensington[0]];
    var victoriaTrip = [victoria[0], victoria[2], victoria[3], victoria[1]];
    var killarneyTrip = [killarney[0], killarney[2], killarney[3], killarney[1]];
    var renfrewTrip = [renfrew[3], renfrew[6], renfrew[7], renfrew[8], renfrew[9], renfrew[10], renfrew[11],
        renfrew[12], renfrew[2], renfrew[1], renfrew[0]];
    var hastingsTrip = [hastings[2], hastings[1], hastings[3], hastings[4], hastings[5], hastings[6], hastings[7], hastings[8], hastings[9], hastings[10], hastings[11], hastings[12], hastings[0], hastings[13], hastings[14], hastings[15], hastings[16], hastings[17]];
    var grandTrip = [grand[2], grand[4], grand[5], grand[6], grand[7], grand[3], grand[0], grand[1]];
    var stratTrip = [strat[25], strat[26], strat[3], strat[4], strat[27], strat[28], strat[29], strat[30], strat[31], strat[5], strat[6], strat[7], strat[8], strat[9], strat[10], strat[11], strat[12], strat[13], strat[14], strat[15], strat[16], strat[17], strat[18], strat[19], strat[20], strat[21], strat[22], strat[23], strat[24], strat[2], strat[0], strat[1]];
    var dunbarTrip = [dunbar[68], dunbar[0], dunbar[3], dunbar[4], dunbar[5], dunbar[6], dunbar[7], dunbar[8], dunbar[9], dunbar[10], dunbar[11], dunbar[12], dunbar[13], dunbar[14], dunbar[15], dunbar[16], dunbar[17], dunbar[18], dunbar[19], dunbar[20], dunbar[21], dunbar[22], dunbar[23], dunbar[24],
        dunbar[25], dunbar[26], dunbar[27], dunbar[28], dunbar[29], dunbar[30], dunbar[31], dunbar[32], dunbar[33], dunbar[34], dunbar[35], dunbar[36], dunbar[37], dunbar[38], dunbar[39], dunbar[40], dunbar[41], dunbar[42], dunbar[2], dunbar[43], dunbar[44], dunbar[45], dunbar[46], dunbar[47],
        dunbar[48], dunbar[49], dunbar[50], dunbar[51], dunbar[52], dunbar[53], dunbar[54], dunbar[55], dunbar[56], dunbar[57], dunbar[58], dunbar[59], dunbar[60], dunbar[61], dunbar[62], dunbar[63], dunbar[64], dunbar[65], dunbar[66], dunbar[67], dunbar[1], dunbar[69]];
    var greyTrip = [grey[0], grey[1], grey[2], grey[3], grey[4], grey[5], grey[6], grey[7], grey[8], grey[9], grey[10], grey[11], grey[12], grey[13], grey[14], grey[15], grey[16], grey[17], grey[18], grey[19], grey[20], grey[21], grey[22], grey[23], grey[24], grey[25], grey[26], grey[27]];
    var kitsTrip = [kits[18], kits[17], kits[19], kits[16], kits[14], kits[13], kits[12], kits[11], kits[10], kits[9], kits[8], kits[0], kits[1], kits[2], kits[3], kits[4], kits[5], kits[6], kits[7]];
    var westTrip = [west[0], west[1], west[2], west[3], west[4], west[5], west[6], west[7], west[8], west[9], west[10], west[11]];
    var dtTrip = [dt[33], dt[32], dt[31], dt[30], dt[29], dt[28], dt[27], dt[26], dt[25], dt[24], dt[23], dt[22], dt[21], dt[20], dt[19], dt[18], dt[17], dt[16], dt[15], dt[14], dt[13], dt[0], dt[1], dt[2], dt[3], dt[4], dt[5], dt[6], dt[7], dt[8], dt[9], dt[10], dt[11], dt[12]];
    var rileyTrip = [riley[0], riley[1], riley[2], riley[3], riley[4], riley[5], riley[6], riley[7], riley[8], riley[9], riley[10], riley[11], riley[12], riley[13], riley[14], riley[15], riley[16], riley[17], riley[18], riley[19], riley[20], riley[21], riley[22]];
    var arbTrip = [arb[0], arb[1], arb[2], arb[3], arb[4], arb[5], arb[6], arb[7], arb[8], arb[9], arb[10], arb[11], arb[12], arb[13], arb[14], arb[15], arb[16], arb[17], arb[18], arb[19], arb[20], arb[21], arb[22], arb[23], arb[24], arb[25], arb[26], arb[27], arb[28], arb[29], arb[30], arb[31], arb[32], arb[33], arb[34], arb[35], arb[36]];
    var shaughTrip = [shaugh[0], shaugh[1], shaugh[2], shaugh[3], shaugh[4], shaugh[5], shaugh[6], shaugh[7], shaugh[8], shaugh[9], shaugh[10], shaugh[11], shaugh[12], shaugh[13], shaugh[14], shaugh[15], shaugh[16], shaugh[17], shaugh[18], shaugh[19], shaugh[20], shaugh[21], shaugh[22],
        shaugh[23], shaugh[24], shaugh[25], shaugh[26], shaugh[27], shaugh[28], shaugh[29], shaugh[30], shaugh[31], shaugh[32], shaugh[33], shaugh[34]];
    var fairTrip = [fair[11], fair[13], fair[12], fair[10], fair[9], fair[8], fair[7], fair[6], fair[5], fair[4], fair[3], fair[2], fair[1], fair[0]];
    var mountTrip = [];

    for (var i = 0; i < 29; i++) {
        mountTrip[i] = mount[i];
    }

    var camTrip = [];

    for (var i = 0; i < 30; i++) {
        camTrip[i] = cam[i];
    }

    var myTrip = [marpoleTrip, sunsetTrip, oakridgeTrip, kessidaleTrip, kensingtonTrip, victoriaTrip, killarneyTrip, renfrewTrip, hastingsTrip, grandTrip, stratTrip, dunbarTrip, greyTrip, kitsTrip, westTrip, dtTrip, rileyTrip, arbTrip, shaughTrip, fairTrip, mountTrip, camTrip];


    flightPath[0] = new google.maps.Polygon({
        path: myTrip[0],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#2e2eb8",
        fillOpacity: 0.4
    });
    flightPath[1] = new google.maps.Polygon({
        path: myTrip[1],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#9fff80",
        fillOpacity: 0.4
    });
    flightPath[2] = new google.maps.Polygon({
        path: myTrip[2],
        strokeColor: "##D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff1a",
        fillOpacity: 0.4
    });
    flightPath[3] = new google.maps.Polygon({
        path: myTrip[3],
        strokeColor: "##D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#e6e600",
        fillOpacity: 0.4
    });
    flightPath[4] = new google.maps.Polygon({
        path: myTrip[4],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#191966",
        fillOpacity: 0.4
    });
    flightPath[5] = new google.maps.Polygon({
        path: myTrip[5],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#39e600",
        fillOpacity: 0.4
    });
    flightPath[6] = new google.maps.Polygon({
        path: myTrip[6],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#79ff4d",
        fillOpacity: 0.4
    });
    flightPath[7] = new google.maps.Polygon({
        path: myTrip[7],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#7070db",
        fillOpacity: 0.4
    });
    flightPath[8] = new google.maps.Polygon({
        path: myTrip[8],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c6ffb3",
        fillOpacity: 0.4
    });
    flightPath[9] = new google.maps.Polygon({
        path: myTrip[9],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#24248f",
        fillOpacity: 0.4
    });
    flightPath[10] = new google.maps.Polygon({
        path: myTrip[10],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#c2c2f0",
        fillOpacity: 0.4
    });
    flightPath[11] = new google.maps.Polygon({
        path: myTrip[11],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff1a1a",
        fillOpacity: 0.4
    });
    flightPath[12] = new google.maps.Polygon({
        path: myTrip[12],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff4d4d",
        fillOpacity: 0.4
    });
    flightPath[13] = new google.maps.Polygon({
        path: myTrip[13],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff8080",
        fillOpacity: 0.4
    });
    flightPath[14] = new google.maps.Polygon({
        path: myTrip[14],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffffb3",
        fillOpacity: 0.4
    });
    flightPath[15] = new google.maps.Polygon({
        path: myTrip[15],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#4747d1",
        fillOpacity: 0.4
    });
    flightPath[16] = new google.maps.Polygon({
        path: myTrip[16],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#53ff1a",
        fillOpacity: 0.4
    });
    flightPath[17] = new google.maps.Polygon({
        path: myTrip[17],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffb3b3",
        fillOpacity: 0.4
    });
    flightPath[18] = new google.maps.Polygon({
        path: myTrip[18],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#e60000",
        fillOpacity: 0.4
    });
    flightPath[19] = new google.maps.Polygon({
        path: myTrip[19],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#9999e6",
        fillOpacity: 0.4
    });
    flightPath[20] = new google.maps.Polygon({
        path: myTrip[20],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff4d",
        fillOpacity: 0.4
    });
    flightPath[21] = new google.maps.Polygon({
        path: myTrip[21],
        strokeColor: "#D1D0CE",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ffff80",
        fillOpacity: 0.4
    });


    for (var i = 0; i < 22; i++) {
        flightPath[i].setMap(map);
    }

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

    flightPath[0].addListener('click', function() {  //make the info windows pop up when overley clicked on
        infowindow.open(map,flightPath[0]);
    });
    flightPath[1].addListener('click', function() {
        infowindow2.open(map,flightPath[1]);
    });
    flightPath[2].addListener('click', function() {
        infowindow3.open(map,flightPath[2]);
    });
    flightPath[3].addListener('click', function() {
        infowindow4.open(map,flightPath[3]);
    });
    flightPath[4].addListener('click', function() {
        infowindow5.open(map,flightPath[4]);
    });
    flightPath[5].addListener('click', function() {
        infowindow6.open(map,flightPath[5]);
    });
    flightPath[6].addListener('click', function() {
        infowindow7.open(map,flightPath[6]);
    });
    flightPath[7].addListener('click', function() {
        infowindow8.open(map,flightPath[7]);
    });
    flightPath[8].addListener('click', function() {
        infowindow9.open(map,flightPath[8]);
    });
    flightPath[9].addListener('click', function() {
        infowindow10.open(map,flightPath[9]);
    });
    flightPath[10].addListener('click', function() {
        infowindow11.open(map,flightPath[10]);
    });
    flightPath[11].addListener('click', function() {
        infowindow12.open(map,flightPath[11]);
    });
    flightPath[12].addListener('click', function() {
        infowindow13.open(map,flightPath[12]);
    });
    flightPath[13].addListener('click', function() {
        infowindow14.open(map,flightPath[13]);
    });
    flightPath[14].addListener('click', function() {
        infowindow15.open(map,flightPath[14]);
    });
    flightPath[15].addListener('click', function() {
        infowindow16.open(map,flightPath[15]);
    });
    flightPath[16].addListener('click', function() {
        infowindow17.open(map,flightPath[16]);
    });
    flightPath[17].addListener('click', function() {
        infowindow18.open(map,flightPath[17]);
    });
    flightPath[18].addListener('click', function() {
        infowindow19.open(map,flightPath[18]);
    });
    flightPath[19].addListener('click', function() {
        infowindow20.open(map,flightPath[19]);
    });
    flightPath[20].addListener('click', function() {
        infowindow21.open(map,flightPath[20]);
    });
    flightPath[21].addListener('click', function() {
        infowindow22.open(map,flightPath[21]);
    });
}

function stat() {
    document.getElementById('stat').innerHTML = "";
    var work = document.getElementById('ye').value.toString();
    if(work== "2006"){
        document.getElementById("stat").innerHTML="Average house price in 2006 is $722,603.44";}
    else if(work== "2007"){
        document.getElementById("stat").innerHTML="Average house price in 2007 is $881,971.39";}
    else if(work=="2008"){
        document.getElementById("stat").innerHTML="Average house price in 2008 is $1,011,046.14";}
    else if(work== "2009"){
        document.getElementById("stat").innerHTML="Average house price in 2009 is $1,003,140.04";}
    else if(work== "2010"){
        document.getElementById("stat").innerHTML="Average house price in 2010 is $1,004,851.47";}
    else if(work== "2011"){
        document.getElementById("stat").innerHTML="Average house price in 2011 is $1,121,884.62";}
    else if(work== "2012"){
        document.getElementById("stat").innerHTML="Average house price in 2012 is $1,261,141.86";}
    else if(work== "2013"){
        document.getElementById("stat").innerHTML="Average house price in 2013 is $1,277,472.36";}
    else if(work== "2014"){
        document.getElementById("stat").innerHTML="Average house price in 2014 is $1,293,579.93";}
    else if(work== "2015"){
        document.getElementById("stat").innerHTML="Average house price in 2015 is $1,398,866.98";}
    else{document.getElementById("stat").innerHTML=" ";}
}
function placeMarkers(yearObj){
    //deletes any current markers from the map
    deleteMarkers();
    var i = 0;
    var j = Math.random()*(yearObj.length - 1);
    //to keep map unclustered limit data to 2500 icons
    //set infowindow to the information about the current crime at the state of the for loop
    //BUG: infowindow not displaying the correct information, instead displaying information about last window only
    var infowindow = new google.maps.InfoWindow({
        content: ''
    });
    while(i < 250){
        j = parseInt(j);
        var type = yearObj[j].TYPE;
        var content = "<p>" + yearObj[j].TYPE + " " + yearObj[j].MONTH +
            " " + yearObj[j].HUNDRED_BLOCK +
            " " + yearObj[j].N_HOOD + "</p>";
        var lat= yearObj[j].LAT;
        var lng= yearObj[j].LONG;
        var position = new google.maps.LatLng(lat, lng);
        var icon = findIcon(type);
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: icon
        });

        google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){
            return function() {
                infowindow.close();
                infowindow.setContent(content);
                infowindow.open(map,marker);
            };
        })(marker,content,infowindow));
        markers.push({Marker: marker, Type: type});
        i++;
        var j = Math.random()*(yearObj.length - 1);
    }

}
// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    for (var i = 0; i < createdMarkers.length; i++) {
        markers[i].Marker.setMap(null);
    }
    markers = [];
}

function getMarkerList(){
    return markers;
}

function findIcon(type){
    if(type == "Theft from Vehicle"){
        currentIcon = icons.TheftFromVehicle
    }
    else if(type == "Theft of Vehicle"){
        currentIcon = icons.TheftOfVehicle
    }
    else if(type == "Mischief"){
        currentIcon = icons.Mischief
    }
    else if(type == "BNE Commercial"){
        currentIcon = icons.bneCom
    }
    else if(type == "BNE Residential/Commercial"){
        currentIcon = icons.bneRes
    }
    else if(type == "Other Theft"){
        currentIcon = icons.otherTheft
    }
    return currentIcon;
}


//http://www.vancouversun.com/business/vanmap/6235770/story.html?__lsa=c6a3-24c3
//http://www.vancouversun.com/news/vanmap/6236004/story.html and