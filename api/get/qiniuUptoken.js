/**
 * @File:      获取七牛云uptoken
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-14 11:06:06
 */
var qiniu = require("qiniu");
var moment = require('moment');
module.exports = {
    init: function(app) {
        this.getUptoken(app);
    },

    getUptoken: function(app) {
        //七牛获取uptoken
        //七牛key
        // var conf = require('../qiniu/_config');
        var conf = require('../qiniu/config');
        qiniu.conf.ACCESS_KEY = conf.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = conf.SECRET_KEY;
        app.get('/qiniu/upToken', function(req, res, next) {
            var myUptoken = new qiniu.rs.PutPolicy(conf.QINIUBUCKETNAME);
            var token = myUptoken.token();
            moment.locale('en');
            var currentKey = moment(new Date()).format('YYYY-MM-DD--HH-mm-ss');
            res.header("Cache-Control", "max-age=0, private, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            if (token) {
                res.json({
                    uptoken: token,
                    sava_key: currentKey
                });
            }else {
                res.json({
                    status: 0,
                    message: 'token错误',
                    data: {}
                });
            }
        });
    }
};