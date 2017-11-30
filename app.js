var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var config = require('./config');
var mongoose = require('mongoose');
var dbUrl = 'mongodb://127.0.0.1:27017/movie-website';

// var Logger = require('./lib/log');
//---------------------mongoose-----------------------------------//
mongoose.connect(dbUrl,{useMongoClient:true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error',console.error.bind(console,"mongodb connect error"));
db.once('open',function(){
    console.log('Mongodb stared');
});
//----------------------mongoose---------------------------------------------//

var app = express();
app.set('port',config.port);
app.set('env', config.env);
app.set('views',path.join(__dirname,'static/html'));
app.engine('.html',ejs.__express);
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'static')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/**
 * router
 */
app.use('/',require('./routers/index'));
app.use('/',require('./routers/login'));
app.use('/list',require('./routers/list'));
app.use('/',require('./routers/detail'));

app.use('/add_movie',require('./routers/add_movie'));






module.exports = app;
