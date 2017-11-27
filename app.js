var express = require('express');
var path = require('path')
var bodyParser = require('body-parser')
var ejs = require('ejs');
var session = require('express-session');
var config = require('./config')

// var Logger = require('./lib/log');

var app = express();
app.set('port',config.port);
app.set('env', config.env);
app.set('views',path.join(__dirname,'static/html'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'static')));


/**
 * router
 */
app.use('/',require('./routers/index'));
app.use('/',require('./routers/login'));
app.use('/list',require('./routers/list'));
app.use('/',require('./routers/detail'));






module.exports = app;
