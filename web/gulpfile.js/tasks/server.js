/**
 * @File:      server启动
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 18:30:57
 */
var gulp   = require('gulp');
var config = require('../config');
var mock   = require('../lib/mockLocal');
var server = require('../config/server');
gulp.task('server', ['build'], function () {
    var app = require('lg-server');
    var static_dir = config.distPath;
    // 本地模拟数据和远程服务器数据切换, 1:本地   0:远程服务器
    var mockLocal = server.mockLocal;
    var cab = null;
    if (mockLocal) {
        // 本地mock
        cab = function (req, res) {
            mock.mockLocal(req, res);
        };
    }else {
        // 远程服务器
        cab = function (req, res) {
            mock.mockRemote(req, res);
        }
    }
    app.createServer(static_dir, cab);
});