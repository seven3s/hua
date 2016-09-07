/**
 * @File:      登出接口
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-07 16:13:33
 */
module.exports = {
    init: function(app) {
        app.post('/api/logout', function(req, res) {
            req.session.user = null;
            req.session.nickname = null;
            res.send({
                status: 1,
                message: '登出成功',
                data: []
            });
        });
    }
};