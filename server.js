var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var router = require('./controllers/router')

var app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use(express.static('./uploads'));

app.get('/allalbums', router.showIndex);
console.log("start");
app.post('/upload', router.doPost);
app.get('/:albumname',router.showAlbum);

app.listen(5000);