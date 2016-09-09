/**
 * @File:      users  db 模型
 * @Author:    花夏(v_liubiao01@baidu.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-05 15:51:46
 */

var mongoose = require('mongoose');
var UsersScheMa = new mongoose.Schema({
    id: Number,
    account: String,
    passWord: String,
    accountType: Number,
    nickname: String,
    sex: Number,
    birthday: String,
    regDate: String,
    email: String,
    qq: String
});

UsersScheMa.statics = {
    // 根据用户名查询
    findbyusername: function(username, cb) {
        return this.findOne({account: username}).exec(cb);
    },
    findById: function(id, cb){
        return this.findOne({id: id}).exec(cb);
    }
};
module.exports = UsersScheMa;