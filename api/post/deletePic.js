/**
 * @File:      删除图片
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-14 18:41:49
 */
var qiniu = require("qiniu");
module.exports = {
    init: function (app) {
        this.deletePic(app);
    },

    deletePic: function (app) {
        // var conf = require('../qiniu/_config');
        var conf = require('../qiniu/config');
        qiniu.conf.ACCESS_KEY = conf.ACCESS_KEY;
        qiniu.conf.SECRET_KEY = conf.SECRET_KEY;

        //构建bucketmanager对象
        var client = new qiniu.rs.Client();

        //你要测试的空间， 并且这个key在你空间中存在
        bucket = conf.QINIUBUCKETNAME;
        app.post('/qiniu/delete', function(req, res, next) {
            console.log(req.body);
            key = req.body.src;
            key = key.split('-glistening')[0];
            key = key.split('http://odflit039.bkt.clouddn.com/')[1];
            // 删除资源
            client.remove(bucket, key, function(err, ret) {
                if (!err) {
                    res.send('移除成功');
                } else {
                    res.send(err);
                }
            });
        });
    }
};