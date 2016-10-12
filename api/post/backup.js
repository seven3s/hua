/**
 * @File:      定时保存诗歌
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-10-12 16:00:23
 */
var qiniu = require("qiniu");
var moment = require('moment');
module.exports = {
    init: function (app) {
        this.backup(app);
    },

    /**
     * backup 备份诗歌json到七牛云具体逻辑
     *
     * @param  {Object} app nodejs
     *
     */
    backup: function (app) {
        app.post('/api/backup', function(req, res) {
            //需要填写你的 Access Key 和 Secret Key
            var conf = require('../qiniu/config');
            qiniu.conf.ACCESS_KEY = conf.ACCESS_KEY;
            qiniu.conf.SECRET_KEY = conf.SECRET_KEY;
            var id = req.body.id;
            //要上传的空间
            bucket = conf.QINIUBUCKETNAME;

            //上传到七牛后保存的文件名
            var time = new Date().getTime();

            //构建上传策略函数
            function uptoken(bucket, key) {
                var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
                return putPolicy.token();
            }

            //构造上传函数
            function uploadFile(uptoken, key, body) {
                var extra = new qiniu.io.PutExtra();
                qiniu.io.put(uptoken, key, body, extra, function(err, ret) {
                    if (!err) {
                        // 上传成功， 处理返回值
                        // console.log(ret.hash, ret.key, ret.persistentId);
                        res.send({
                            'status': 1,
                            'message': '备份成功',
                            data: []
                        });
                    } else {
                        // 上传失败， 处理返回代码
                        console.log(err);
                        res.send(err);
                    }
                });
            }
            //调用uploadFile上传
            var db = app.get('db');
            var PoemsScheMa = require('../../db/schemas/poems');
            var PoemsModel = db.model('poems', PoemsScheMa);
            PoemsModel.findById(id, function(err, poems) {
                var time  = moment().year()
                            + '-' + moment().month()
                            + '-' + moment().date()
                            + '-' + moment().hour()
                            + ':' + moment().minute()
                            + ':' + (moment().second() + Math.ceil(Math.random()*10));
                key = 'poem_' + time + '_' + poems.poem_title + '.json';
                //生成上传 Token
                token = uptoken(bucket, key);
                var body = JSON.stringify(poems);
                uploadFile(token, key, body);
            });
        });
    }
};