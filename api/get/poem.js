/**
 * @file 获取诗歌详情
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-09 16:03:48
 */
var moment = require('moment');
moment.locale('zh-cn');
module.exports = {
    init: function(app) {
        var me = this;
        app.get('/api/poem', function(req, res) {
            var config = require('../../db/config');
            var db = app.get('db');
            var UserNameScheMa = require('../../db/schemas/users');
            var UserNameModel = db.model('users', UserNameScheMa);
            var PoemsScheMa = require('../../db/schemas/poems');
            var PoemsModel = db.model('poems', PoemsScheMa);
            var query = req.query;
            // 没有参数则是全部查询
            if (me.isEmpty(query)) {
                me.queryAll(PoemsModel, UserNameModel, req, res);
                return;
            }
            // 根据ID查询
            var id = query.id;
            if (id) {
                me.getPoemById(PoemsModel, UserNameModel, req, res);
            }
            // 根据type查询
            var type = query.typeId;
            if (type) {
                var data = {
                    poem_type: type
                };
                me.queryType(PoemsModel, UserNameModel, data, req, res);
            }
        });
    },

    /**
     * getPoemById 根据ID查询
     *
     */
    getPoemById: function (PoemsModel, UserNameModel, req, res) {
        var id = req.query.id;
        if (id === undefined) {
            res.send({
                status: 0,
                message: 'ID错误',
                data: []
            });
        }else {
            var data = {};
            PoemsModel.findById(id, function(err, poem) {
                if (poem === null) {
                    res.send({
                        status: 0,
                        message: '没有找到该作品,请刷新后再试!',
                        data: []
                    });
                }
                if (err) {
                    res.send(err);
                }
                data.title = poem.poem_title;
                data.poem_time = moment(poem.poem_time).startOf('day').fromNow();
                data.poem_type = poem.poem_type;
                data.poem_author = poem.poem_author;
                data.poem_lines = poem.poem_lines;
                data.likes = poem.likes;
                data.poem_imgSrc = poem.poem_imgSrc;
                data.id = poem._id;
            }).then(function (poem) {
                UserNameModel.findbyusername(poem.poem_author, function(err, user) {
                    data.userName = user.nickname;
                }).then(function () {
                    res.send({
                        status: 1,
                        message: '成功',
                        data: data
                    });
                });
            });
        }
    },

    /**
     * queryType 根据诗歌类型查询
     *
     */
    queryType: function (PoemsModel, UserNameModel, data, req, res) {
        this.query(PoemsModel, UserNameModel, data, req, res);
    },

    /**
     * queryAll 查询全部
     *
     */
    queryAll: function (PoemsModel, UserNameModel, req, res) {
        this.query(PoemsModel, UserNameModel, {}, req, res);
    },

    /**
     * query 查询诗歌
     *
     */
    query: function (PoemsModel, UserNameModel, data, req, res) {
        PoemsModel.find(data, function(err, poems) {
            if (err) {
                res.send(err);
            }
            if (poems && poems.length > 0) {
                var datas = [];
                var len = poems.length;
                poems.forEach(function (item, index) {
                    var data = {};
                    data.title = item.poem_title;
                    data.poem_time = moment(item.poem_time).startOf('day').fromNow();
                    data.poem_type = item.poem_type;
                    data.poem_author = item.poem_author;
                    data.poem_lines = item.poem_lines;
                    data.likes = item.likes;
                    data.poem_imgSrc = item.poem_imgSrc;
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
            }else {
                res.send({
                    status: 0,
                    message: '没有数据！',
                    data: []
                });
            }
        });
    },
    /**
     * isEmpty 是否为空对象 {}
     *
     * @param  {Object}    val
     *
     * @return {Boolean}   返回布尔值
     */
    isEmpty: function (val) {
        return Object.prototype.isPrototypeOf(val) && Object.keys(val).length === 0;
    }
};