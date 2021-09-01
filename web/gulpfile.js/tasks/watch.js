/**
 * @File:      开发时监听变化
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 21:18:29
 */
var gulp   = require('gulp');
var path   = require('path');
var watch  = require('gulp-watch');
var config = require('../config');
gulp.task('watch', function () {
    var file = config.sourceDirectory + '/**/*';
    watch(file, function () {
        gulp.start('build');
    });
});