var express = require('express');
var path = require('path');
var engine = require('ejs-locals');



var app = express();

app.engine('ejs', engine);


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.set('port', process.env.PORT || 3000);


app.get('/', function(req, res){
	res.render('main');
});

app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('About sendWitch');
});


app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});


app.use(function(ree, req , res , next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Servr Error');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to teminate.');
});

