var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser')
var fs = require('fs');

app.set('views', __dirname + '/pug')
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var SystemInfo = {
    info: {}
}

app.get('/', function(req, res) {
    res.render('index', {SystemInfo:SystemInfo});
});

app.get('/health-check', function(req, res) {
    res.end('True');
});


http.listen(process.env.NODE_PORT || 3000, function(){
  console.log('listening on *:80');
});


app.use(express.static('public'));

module.exports = app;