/**
 * @file 是否已经登录
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-07 15:26:41
 */
module.exports = {
    init: function(app) {
        app.get('/api/isLogin', function(req, res) {
            if (req.session.user) {
                res.jsonp({
                    status: 1,
                    message: '',
                    data: []
                });
            }
        });
    }
};