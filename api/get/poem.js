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
                return;
            }
            // 根据参数查询
            if (!me.isEmpty(query)) {
                me.query(PoemsModel, UserNameModel, query, req, res);
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
                // 是否是update
                var update = req.query.update;
                // 格式化时间
                poem.poem_time = moment(poem.poem_time).format('YYYY-MM-DD HH:mm:ss');
                // data.poem_time = update ? poem.poem_time : data.poem_time = moment(poem.poem_time).fromNow();
                // 将北京时间转换为西八区纽约时间
                data.poem_time = update ? poem.poem_time : data.poem_time = moment(me.bj2NewyorkTime(poem.poem_time)).fromNow();
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
    query: function (PoemsModel, UserNameModel, query, req, res) {
        // 增加分页
        // 如果没有传入pageSize那么则不分页，设置0
        var pageSize = Number(req.query.pageSize) || 0;
        // 根据时间来做分页
        if (req.query.ltTime) {
            var poem_time = {
                '$lt': req.query.ltTime
            };
            // 诗歌类型
            var poem_type = req.query.poem_type;
            query = {
                // 最后时间
                poem_time: poem_time
            };
            if (!!poem_type) {
                query.poem_type = poem_type;
            }
        }
        // 先查询最后一条数据
        this.queryEnd(PoemsModel, req, res, function (endPoems) {
            var endPoemsTime = endPoems[0].poem_time;
            PoemsModel.find(query, function(err, poems) {
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
                        // 格式化时间
                        item.poem_time = moment(item.poem_time).format('YYYY-MM-DD HH:mm:ss');
                        data.poem_time = moment(item.poem_time).fromNow();
                        console.log(data.poem_time);
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
                                    endPoemsTime: endPoemsTime,
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
            }).sort({ 'poem_time' : -1 }).limit(pageSize);
        });
    },

    /**
     * queryEnd 查询最后一条数据
     *
     */
    queryEnd: function (PoemsModel, req, res, cab) {
        PoemsModel.find(function(err, poems) {
            cab && cab(poems);
        }).sort({ 'poem_time' : 1 }).limit(1);
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
    },

    /**
     * bj2NewyorkTime 北京时间转换为纽约时间
     *
     * @param  {String} time 
     *
     * @return {String} 返回转换后的时间
     */
    bj2NewyorkTime: function (time) {
        var sq = -7; //设置时区，东为正数，西为负数
        var utc = time + (time.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000 * sq));
        return nd.toLocaleString();
    }
};