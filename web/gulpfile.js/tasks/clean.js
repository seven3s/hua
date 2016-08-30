/**
 * @File:      构建项目前clean
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 19:40:19
 */
var gulp   = require('gulp');
var del    = require('del');
var config = require('../config');
gulp.task('clean', function (cb) {
    return del([
        config.publicDirectory
    ], cb);
});