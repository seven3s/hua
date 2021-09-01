/**
 * @File:      登录接口
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-31 11:22:13
 */
var mongoose = require('mongoose');
module.exports = {
    init: function(app) {
        app.post('/api/login', function(req, res) {
            var config = require('../../db/config');
            var db = app.get('db');
            var UsersScheMa = require('../../db/schemas/users');
            var UsersModel = db.model('users', UsersScheMa);
            UsersModel.findbyusername(req.body.userName, function (err, data) {
                if (data === null) {
                    res.send({
                        status: -1,
                        message: '用户名不存在！',
                        data: []
                    });
                }else if (req.body.userName === data.account && req.body.password !== data.passWord) {
                    res.send({
                        status: 0,
                        message: '密码错误！',
                        data: []
                    });
                }else if (req.body.userName === data.account && req.body.password === data.passWord) {
                    req.session.user = data.account;
                    req.session.nickname = data.nickname;
                    res.send({
                        status: 1,
                        message: '登陆成功！',
                        data: []
                    });
                } else {
                    res.send(404);
                }
            });
        });
    }
};