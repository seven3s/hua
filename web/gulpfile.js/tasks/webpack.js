/**
 * @File:      webpack打包任务
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 20:00:56
 */
var gulp          = require('gulp');
var webpack       = require('webpack');
var webpackConfig = require('../../webpack.config.js');
gulp.task('webpack', function (callback) {
var myConfig = Object.create(webpackConfig);
// run webpack
webpack(
    myConfig,
    function(err, stats) {
        callback && callback();
    });
});