/**
 * @file get接口入口文件
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-30
 */
module.exports = {
    init: function(app) {
        var test = require('./test');
        test.init(app);

        // 检查登陆状态
        var isLogin = require('./isLogin');
        isLogin.init(app);
        // 获取诗歌详情
        var poem = require('./poem');
        poem.init(app);
        // 获取七牛云uptoken接口
        var uptoken = require('./qiniuUptoken');
        uptoken.init(app);
    }
};