/**
 * @file:      點讚接口
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2016-11-29 15:38:07
 */

var mongoose = require('mongoose');
var _ = require('underscore');
module.exports = {
    init: function(app) {
        app.post('/api/likes', function(req, res) {
            var config = require('../../db/config');
            var db = app.get('db');
            var PoemsScheMa = require('../../db/schemas/poems');
            var PoemsModel = db.model('poems', PoemsScheMa);
            var id = req.body._id;
            var likes = req.body.likes;
            var _poems;
            if (id !== undefined) {
                PoemsModel.findById(id, function(err, poems) {
                    if (err) {
                        console.log(err);
                        res.send({
                            status: -1,
                            message: err,
                            data: []
                        });
                    }
                    if (id === undefined) {
                        res.send({
                            status: 0,
                            message: 'ID错误',
                            data: []
                        });
                    }
                    if (!poems.likes) {
                        poems.likes = 0 + likes;
                    }else {
                        poems.likes += likes;
                    }
                    _poems = _.extend(poems, {});
                    _poems.save(function(err, poems) {
                        if (err) {
                            res.send(err);
                        }else {
                            res.send({
                                status: 1,
                                message: '點讚成功!',
                                data: {
                                    id: poems._id
                                }
                            });
                        }
                    });
                });
            }
        });
    }
};