var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var app = express();
var router = express.Router();
// view engine setup
app.set('views', path.join(__dirname, '/web/dist'));
app.set('port', process.env.PORT || 3000);
// 站点favicon
app.use(express.favicon(path.join(__dirname, '/web/src/app/public/images/favicon.ico')));

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '/web/dist')));
app.use(express.cookieParser('manager_花夏'));
app.use(express.session({
  resave: true, // don't save session if unmodified  
  saveUninitialized: false, // don't create session until something stored  
  secret: 'love'
}));
//引入mongoose模块
var mongoose = require('mongoose');
var config = require('./db/config');
// 链接数据库
var db = mongoose.connect(config.db.mongodb);
app.set('db', db);
// API接口
var api = require('./api/init');
api.init(app);
// 登陆验证
routes.init(app);
// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// 启动及端口
http.createServer(app).listen(app.get('port'), function(){
    console.log('启动成功，端口为' + app.get('port'));
    console.log('主页地址：http://localhost:' + app.get('port'));
});
module.exports = app;
