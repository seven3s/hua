/**
 * @File:      header
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-30 15:16:59
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            login: {
                status: 0,
                userName: ''
            }
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
            this.checkLogin();
        },

        /**
         * checkLogin 检查登陆状态
         *
         */
        checkLogin: function () {
            var me = this;
            $.ajax({
                url: '/api/isLogin',
                type: 'GET',
            })
            .done(function(data) {
                me.login.status = data.status;
                me.login.userName = data.data.userName;
            })
            .fail(function(error) {
                console.log(error);
            });
        }
    }
});