/**
 * @File:      处理html文件任务
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 18:39:10
 */
var gulp   = require('gulp');
var config = require('../config');
gulp.task('html', function () {
    gulp.src(config.sourceDirectory + '/*.html') //该任务针对的文件
        .pipe(gulp.dest(config.distPath)); //将会在dist下生成*.html
});