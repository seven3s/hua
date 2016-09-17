/**
 * @File:      water box组件
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-10 19:09:50
 */
var Vue = require('vue');
require('./index.css');
require('./cascade.css');
require('./cascade');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    props: {
        waterboxdata: {}
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            isLoginState: false
        };
    },
    events: {
        
    },
    components: {
        
    },
    watch: {
    },
    methods: {
        init: function () {
            this.$data.isLoginState = Vue.auth;
            $('.water-full').cascade();
            $(window).trigger('resize.cascade');
        }
    }
});