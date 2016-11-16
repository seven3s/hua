/**
 * @file 是否已经登录
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-07 15:26:41
 */
module.exports = {
    init: function(app) {
        app.get('/api/isLogin', function(req, res) {
            var userName = req.session.user;
            if (userName) {
                res.jsonp({
                    status: 1,
                    message: '',
                    data: {
                        userName: req.session.nickname
                    }
                });
            }else {
                res.jsonp({
                    status: 0,
                    message: '',
                    data: []
                });
            }
        });
    }
};