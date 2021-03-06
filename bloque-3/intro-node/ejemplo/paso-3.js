var express = require('express');

var app = express();

var lastRes;

app.get('/', function(req, res){
  	res.send('Hello world');
});

app.get('/mensaje/:mensaje', function(req, res){
	if(lastRes){
		lastRes.send('Tu mensaje es '+ req.params.mensaje);
	}

  	lastRes = res;
});

app.listen(3000);
console.log("Express server running at\n  => http://localhost:3000/\nCTRL + C to shutdown");
