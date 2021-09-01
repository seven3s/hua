/**
 * @File:      诗歌 db 模型
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-07 18:30:58
 */
var mongoose = require('mongoose');
var PoemScheMa = new mongoose.Schema({
    poem_title: String,
    poem_time: String,
    poem_type: Number,
    poem_lines: Array,
    poem_author: String,
    poem_imgSrc: String,
    likes: Number,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

PoemScheMa.pre('save', function (next) {
    if(!!this.poem_time){
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.updateAt = Date.now();
    }
    next();
});

PoemScheMa.statics = {

    fetch: function(cb){
        return this.find({}).sort('meta.updateAt').exec(cb);
    },
    findById: function(id, cb){
        return this.findOne({_id: id}).exec(cb);
    }
};
module.exports = PoemScheMa;