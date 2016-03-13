var mysql = require('mysql');
var express = require("express");
var app = express();
var router = express.Router();
var year;
var month;
var pool = mysql.createPool({
	connectionLimit : 50, // sets maximum # of connections
	host : 'localhost',
	user : 'root',
	password : 'null',
	database : 'VanCrime',
	debug : 'false'
});

// Begin connection to database

function handleDatabase(request, response, year) {
	pool.getConnection(function(err, connection) {
		// Check if there's an error, if so, stop connection and print error
		if (err) {
			connection.release();
			response.json({
				"code" : 50,
				"status" : "Error in connection to database"
			});
			return;
		}
		connection.query("select * from " + year, function(err, rows) {
			connection.release();
			// creates a JSON object of the rows if there is no error
			if (!err) {
				response.json(rows);
			}
		});
		// If there is an error, stop and return the error JSON message
		connection.on('error', function(err) {
			response.json({
				"code" : 50,
				"status" : "Error in connection to database"
			});
			return;
		});
	});
}
function checkAddressExists(request, response, address, year){
    pool.getConnection(function(err, connection) {
        // Check if there's an error, if so, stop connection and print error
        if (err) {
            connection.release();
            response.json({
                "code" : 50,
                "status" : "Error in connection to database"
            });
            return;
        }
        connection.query("SELECT * FROM " + year + " WHERE HUNDRED_BLOCK = " + "'" + address + "'", function(err, rows) {
            connection.release();
            // creates a JSON object of the rows if there is no error
            if (!err) {
                response.json(rows);
            }
        });
        // If there is an error, stop and return the error JSON message
        connection.on('error', function(err) {
            response.json({
                "code" : 50,
                "status" : "Error in connection to database"
            });
            return;
        });
    });
}

function getMonth(request, response, year, month){
	pool.getConnection(function(err, connection) {
		// Check if there's an error, if so, stop connection and print error
		if (err) {
			connection.release();
			response.json({
				"code" : 50,
				"status" : "Error in connection to database"
			});
			return;
		}
		connection.query("SELECT * FROM " + year + " WHERE MONTH = " + "'" + month + "'", function(err, rows) {
			connection.release();
			// creates a JSON object of the rows if there is no error
			if (!err) {
				response.json(rows);
			}
		});
		// If there is an error, stop and return the error JSON message
		connection.on('error', function(err) {
			response.json({
				"code" : 50,
				"status" : "Error in connection to database"
			});
			return;
		});
	});
}

app.use(function(request, response, next) {
	response.setHeader('Access-Control-Allow-Origin', "http://"
			+ request.headers.host + ':8888');
	response.setHeader('Access-Control-Allow-Methods',
			'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	response.setHeader('Access-Control-Allow-Headers',
			'X-Requested-With,content-type');
	next();
});
app.get("/", function(request, response) {
	// Uses CORS (Cross Origin Resource Sharing) to allow us to fetch data from
	// another webpage
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept");
});
router.get('/yearQuery/:year', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	year = request.params.year;
	console.log(month);
	if(month == undefined) {
		handleDatabase(request, response, year);
	}
	else{
		getMonth(request, response, year, month)
	}
});
router.get('/addressSearch/:address', function(request, response){
	response.header("Access-Control-Allow-Origin","*");
	var address = request.params.address;
    checkAddressExists(request,response, address, year);

});
router.get('/monthQuery/:month', function(request, response){
	response.header("Access-Control-Allow-Origin","*");
	month = request.params.month;
});
app.use('/', router);

app.listen(8888);
