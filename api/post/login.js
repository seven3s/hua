/**
 * @File:      登录接口
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-31 11:22:13
 */
var mongoose = require('mongoose');
module.exports = {
    init: function(app) {
        app.post('/login', function(req, res) {
            var config = require('../../db/config');
            var db = app.get('db');
            var UsersScheMa = require('../../db/schemas/users');
            var UsersModel = db.model('users', UsersScheMa);
            UsersModel.findbyusername(req.body.userName, function (err, data) {
                if (req.body.userName == data.account && req.body.password == data.passWord) {
                    res.send(200);
                } else {
                    res.send(404);
                }
            });
        });
    }
};