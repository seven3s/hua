/**
 * @File:      文件拷贝任务配置
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-22 11:11:27
 */
var config = require('./');

module.exports = {
    root: config.sourceDirectory,
    seUISrc: config.sourceDirectory + '/common/semantic-ui/**/*',
    seUiDest: config.publicDirectory + '/lib/semantic-ui/',

    sweetalertSrc: config.sourceDirectory + '/common/sweetalert/**/*',
    sweetalertDest: config.publicDirectory + '/lib/sweetalert/',

    laydateSrc: config.sourceDirectory + '/common/laydate/**/*',
    laydateDest: config.publicDirectory + '/lib/laydate/'
};