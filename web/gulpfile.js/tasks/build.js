/**
 * @File:      构建项目
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 19:33:24
 */
var gulp         = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('build', function (cb) {
    gulpSequence('clean', ['html'], ['webpack', 'copy'], 'watch', cb);
});