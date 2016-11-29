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
        // 诗歌保存接口
        var poem = require('./poem');
        poem.init(app);
        // upload接口
        var upload = require('./upload');
        upload.init(app);
        // deletePic接口
        var deletePic = require('./deletePic');
        deletePic.init(app);
        // 备份诗歌接口
        var backup = require('./backup');
        backup.init(app);
        // 點讚接口
        var likes = require('./likes');
        likes.init(app);
    }
};