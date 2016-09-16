/**
 * @file 路由设置
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-05 18:57:00
 */
var url = require('url');
module.exports = {
    /**
     * init 路由初始化
     *
     * @param  {object} app express
     *
     */
    init: function(app){
        var me = this;
        /* GET index page. */
        app.get('/', function(req, res, next){
            me.checkLogin(req, res, next);
        });
    },

    /**
     * checkLogin 登录拦截器
     *
     * @param  {Object} req
     * @param  {Object} res
     *
     */
    checkLogin: function (req, res, next) {
        var arg = url.parse(req.url);
        next();
        // if ((url !== '/login' || url !== '/' || url !== '/index') && !req.session.user) {
        //     return res.redirect('/#!/login');
        // }else {
        //     next();
        // }
    }
};