var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

//set the view engine to use ejs
app.set('view engine', 'ejs');

var igOptions = {
    client_id: 'd200517f5f434f73b6b8b4478f9f7eda',
    client_secret: '82edca82229e4a49a6251c1dc04dbf9d'
}

//the redirect uri we set when registering our application
var redirectUri = 'http://localhost:8080/handleAuth';
