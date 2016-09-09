/**
 * @file 获取诗歌详情
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-09 16:03:48
 */
module.exports = {
    init: function(app) {
        app.get('/api/poem', function(req, res) {
            var id = req.query.id
            var config = require('../../db/config');
            var db = app.get('db');
            var PoemsScheMa = require('../../db/schemas/poems');
            var PoemsModel = db.model('poems', PoemsScheMa);
            if (id === undefined) {
                res.send({
                    status: 0,
                    message: 'ID错误',
                    data: []
                });
            }else {
                var data = {};
                PoemsModel.findById(id, function(err, poem) {
                    if (err) {
                        res.send(err);
                    }
                    data.title = poem.poem_title;
                    data.poem_time = poem.poem_time;
                    data.poem_type = poem.poem_type;
                    data.poem_author = poem.poem_author;
                    data.poem_lines = poem.poem_lines;
                    var UserNameScheMa = require('../../db/schemas/users');
                    var UserNameModel = db.model('users', UserNameScheMa);
                    UserNameModel.findbyusername(poem.poem_author, function(err, user) {
                        data.userName = user.nickname;
                        res.send({
                            status: 1,
                            message: '',
                            data: data
                        });
                    });
                });
            }
        });
    }
};