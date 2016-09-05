var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/web/dist'));
// 站点favicon
app.use(express.favicon(path.join(__dirname, '/web/src/app/public/images/favicon.ico')));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/web/dist')));

//引入mongoose模块
var mongoose = require('mongoose');
var config = require('./db/config');
// 链接数据库
var db = mongoose.connect(config.db.mongodb);
app.set('db', db);
// API接口
var api = require('./api/init');
api.init(app);
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
