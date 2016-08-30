var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var ejs = require('ejs');
// var routes = require('./routes');
// var users = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/web/dist'));
// 将ejs模板引擎更换为.html后缀名
// app.engine('.html', ejs.__express);
// app.set('view engine', 'html');
// app.set('view engine', 'ejs');
// 站点favicon
app.use(express.favicon(path.join(__dirname, '/web/src/app/public/images/favicon.ico')));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/web/dist')));
// app.use(app.router);

// app.get('/', routes.index);
// app.get('/users', users.list);

// API接口
var api = require('./api/init');
api.init(app);
/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
