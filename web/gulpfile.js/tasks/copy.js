/**
 * @File:      文件拷贝任务
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-22 11:10:29
 */
var config = require('../config/copy');
var gulp   = require('gulp');

gulp.task('copy', function () {
    gulp.src(config.seUISrc).pipe(gulp.dest(config.seUiDest));
    gulp.src(config.sweetalertSrc).pipe(gulp.dest(config.sweetalertDest));
    gulp.src(config.laydateSrc).pipe(gulp.dest(config.laydateDest));
    gulp.src(config.qiniujsSrc).pipe(gulp.dest(config.qiniujsDest));
    gulp.src(config.baguetteBoxSrc).pipe(gulp.dest(config.baguetteBoxDest));
});