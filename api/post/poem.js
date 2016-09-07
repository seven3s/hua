/**
 * @File:      师哥保存接口
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-07 18:22:02
 */
var mongoose = require('mongoose');
var _ = require('underscore');
module.exports = {
    init: function(app) {
        app.post('/api/save/poem', function(req, res) {
            var config = require('../../db/config');
            var db = app.get('db');
            var PoemsScheMa = require('../../db/schemas/poems');
            var PoemsModel = db.model('poems', PoemsScheMa);
            var id = req.body._id;
            var poemsObj = req.body;
            var _poems;
            if (id !== undefined) {
                PoemsModel.findById(id, function(err, poems) {
                    if (err) {
                        console.log(err);
                    }
                    _poems = _.extend(poems, poemsObj);
                    _poems.save(function(err, poems) {
                        if (err) {
                            res.send(err);
                        }else {
                            res.send({
                                status: 1,
                                message: '更新成功!',
                                data: {
                                    id: poems._id
                                }
                            });
                        }
                    });
                });
            } else {
                var _poemsObj = poemsObj;
                delete _poemsObj._id;
                // 添加诗歌
                _poems = new PoemsModel(_poemsObj);
                console.log(_poems);
                _poems.save(function(err, poems) {
                    if (err) {
                        res.send(err);
                    }else {
                        res.send({
                            status: 1,
                            message: '新增成功！',
                            data: {
                                    id: poems._id
                                }
                        });
                    }
                });
            }
        });
    }
};