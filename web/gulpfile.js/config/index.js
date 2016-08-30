/**
 * @File:      全局通用配置
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-14 19:14:11
 */
var path        = require('path');
var config      = {};
var base        = path.join(__dirname, '../../');
config.basePath = '';
// 上线目录也是最终起作用目录
config.distPath        = 'dist';
config.publicDirectory = base + config.distPath + '/' + config.basePath;
// html+css+js 开发目录
config.sourceDirectory = base + 'src/app';
config.root            = base + 'src';
// node包目录
config.devModulesPath  = base + 'node_modules';

module.exports = config;
