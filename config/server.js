var express = require('express');
var path = require('path');
var body = require('body-parser');
//var banco = require('./database');
var load = require('express-load');

app = express();

app.use(body.urlencoded({extended:true}));
app.use(body.json());
app.use(express.static('public'));
app.set('port', 1000);

app.set("view engine", "ejs");

load('models', {cwd: 'app'}).then('Controller').then('Router').into(app);

module.exports = app;