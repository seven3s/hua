/**
 * @File:      header
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-30 15:16:59
 */
var Vue = require('vue');
require('./index.css');
var browserRedirect = require('../../common/browserRedirect.js');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            isMobiledDevice: true,
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
            this.$data.isMobiledDevice = browserRedirect.browserRedirect();
            this.checkLogin();
            $('.ui.dropdown').dropdown();
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
                me.louterForeEach();
            })
            .fail(function(error) {
                console.log(error);
            });
        },

        /**
         * louterForeEach 登陆控制
         *
         */
        louterForeEach: function () {
            var status = this.loginUrl();
            if (this.$data.login.status === 0 && status) {
                router.go('/login');
            }
        },

        /**
         * loginUrl 配置需要登陆的页面
         *
         */
        loginUrl: function () {
            var status = true;
            switch (router.app.$route.path) {
                case '/new':
                    status = false;
                    break;
                default: status = true;
            }
            return !status;
        },

        /**
         * logout 登出操作
         *
         */
        logout: function () {
            $.ajax({
                url: '/api/logout',
                type: 'POST',
            })
            .done(function(data) {
                swal({
                    title: '',
                    text: data.message,
                    type: 'success'
                }, function () {
                    var url = '/';
                    window.location.href = url;
                });
            })
            .fail(function(error) {
                swal({
                    title: '',
                    text: error,
                    type: 'error'
                });
            });
        }
    }
});