/**
 * @File:      诗歌搜搜功能
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-10-05 17:35:30
 */
module.exports = {
    init: function(app) {
        var me = this;
        app.get('/api/search', function(req, res) {
            var db = app.get('db');
            var PoemsScheMa = require('../../db/schemas/poems');
            var PoemsModel = db.model('poems', PoemsScheMa);
            var UserNameScheMa = require('../../db/schemas/users');
            var UserNameModel = db.model('users', UserNameScheMa);
            var q = req.query.q;
            if (!q) {
                res.send({
                    status: 0,
                    message: '请输入查询参数',
                    data: []
                });
            }
            me.search(PoemsModel, UserNameModel, req, res);
        });
    },

    /**
     * search 搜索诗歌
     *
     */
    search: function (PoemsModel, UserNameModel, req, res) {
        var q = req.query.q;
        PoemsModel.find({
            'poem_lines': {$regex: q}
        }, function (err, poems) {
            console.log(poems);
            if (err) {
                res.send(err);
            }
            if (poems && poems.length > 0) {
                var datas = [];
                var len = poems.length;
                poems.forEach(function (item, index) {
                    var data = {};
                    data.title = item.poem_title;
                    data.time = item.poem_time;
                    data.poem_type = item.poem_type;
                    data.poem_author = item.poem_author;
                    data.poem_lines = item.poem_lines;
                    data.id = item._id;
                    UserNameModel.findbyusername(item.poem_author, function(err, user) {
                        data.userName = user.nickname;
                    }).then(function () {
                        datas.push(data);
                        if (index === (len - 1)) {
                            res.send({
                                status: 1,
                                message: '',
                                data: datas
                            });
                        }
                    });
                });
            }
        });
    }
};