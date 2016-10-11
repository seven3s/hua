/**
 * @File:      项目入口文件
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-31 23:44:29
 */
var Vue = require('vue');
var VueRouter = require('vue-router');
window.$ = window.jQuery = require('jquery');
require('./index.css');
// 引用semantic-ui
require('./common/semantic-ui/semantic.min.js');
// 引用sweetalert
require('./common/sweetalert/sweetalert.min.js');
Vue.use(VueRouter);
var router = new VueRouter({
    saveScrollPosition: true
});
var route = require('./router-config');
router.map(route);
router.beforeEach(function (transition) {
    var regNew = /new|login/;
    if (regNew.test(transition.to.path)) {
        document.onscroll = null;
    }else {
        // 非新增页
        document.body.onbeforeunload = null;
    }
    transition.next();
});
router.start({}, '#app');
module.exports = app;