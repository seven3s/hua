/**
 * @File:      登录接口
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-31 11:22:13
 */
module.exports = {
    init: function(app) {
        app.post('/login', function(req, res) {
            var user = {
                userName: 'admin',
                password: 'admin'
            }
            if (req.body.userName == user.userName && req.body.password == user.password) {
                res.send(200);
            } else {
                res.send(404);
            }
        });
    }
};