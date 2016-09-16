/**
 * @File:      上传 使用七牛云储存
 * @Author:    花夏(liubiao@itosx.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-13 15:38:18
 */
var qiniu = require("qiniu");
module.exports = {
    init: function (app) {
        this.upload(app);
    },

    /**
     * upload 文件上传接口
     *
     * @param  {Object} app nodejs启动
     *
     */
    upload: function (app) {
        app.post('/api/upload', function(req, res) {
            var src = req.body.src;
            //需要填写你的 Access Key 和 Secret Key
            // 测试
            var conf = require('../qiniu/_config');
            // var conf = require('../qiniu/config');
            qiniu.conf.ACCESS_KEY = conf.ACCESS_KEY;
            qiniu.conf.SECRET_KEY = conf.SECRET_KEY;

            //要上传的空间
            bucket = conf.QINIUBUCKETNAME;

            //上传到七牛后保存的文件名
            var time =new Date().getTime();
            key = src;

            //构建上传策略函数
            function uptoken(bucket, key) {
                var putPolicy = new qiniu.rs.PutPolicy(bucket + ":" + key);
                return putPolicy.token();
            }

            //生成上传 Token
            token = uptoken(bucket, key);

            //要上传文件的本地路径
            filePath = key;
            //构造上传函数
            function uploadFile(uptoken, key, localFile) {
                var extra = new qiniu.io.PutExtra();
                qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
                    if (!err) {
                        // 上传成功， 处理返回值
                        console.log(ret.hash, ret.key, ret.persistentId);
                    } else {
                        // 上传失败， 处理返回代码
                        console.log(err);
                    }
                });
            };
            //调用uploadFile上传
            uploadFile(token, key, filePath);
        });
    }
};