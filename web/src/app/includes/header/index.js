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
            },
            // 搜索关键字
            searchQ: '',
            // 未搜索状态
            searchState: false
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
            require('../../common/onVisibilityChange').init();
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
                if (data.status === 1) {
                    me.login.status = data.status;
                    me.login.userName = data.data.userName;
                    // 全局登陆控制
                    Vue.auth = true;
                }else {
                    Vue.auth = false;
                }
                me.louterForeEach();
            })
            .fail(function(error) {
                Vue.auth = false;
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
                var url = '/#!/login';
                self.open(url);
            }
        },

        /**
         * loginUrl 配置需要登陆的页面
         *
         */
        loginUrl: function () {
            return !!this.$route.auth;
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
        },

        /**
         * search 搜索功能
         *
         */
        search: function () {
            this.$data.searchState = true;
            console.log(this.$data.searchState);
            console.log(this.$data.searchQ);
        }
    }
});