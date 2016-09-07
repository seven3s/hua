/**
 * @file post接口入口文件
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-30
 */
module.exports = {
    init: function(app) {
        var test = require('./test');
        test.init(app);

        // 登录接口
        var login = require('./login');
        login.init(app);
        // 登出接口
        var logout = require('./logout');
        logout.init(app);
    }
};