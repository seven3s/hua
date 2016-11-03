/**
 * @File:      header
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-30 15:16:59
 */
var Vue = require('vue');
require('./index.css');
var browserRedirect = require('../../common/browserRedirect');
var restFullLoader = require('../../common/loader');
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
            searchState: false,
            infoData: {
                state: false
            }
        };
    },
    events: {
        
    },
    components: {
        'v-info': require('../../components/v-info')
    },
    watch: {
        'infoData.state': {
            handler: function (val) {
                this.$data.searchState = val;
            }
        }
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
            var url = '/api/isLogin';
            // $.ajax({
            //     url: '/api/isLogin',
            //     type: 'GET',
            // })
            // .done(function(data) {
            //     if (data.status === 1) {
            //         me.login.status = data.status;
            //         me.login.userName = data.data.userName;
            //         // 全局登陆控制
            //         Vue.auth = true;
            //     }else {
            //         Vue.auth = false;
            //     }
            //     me.louterForeEach();
            // })
            // .fail(function(error) {
            //     Vue.auth = false;
            //     console.log(error);
            // });
            restFullLoader.requestGET(url, function (res) {
                if (res.status === 1) {
                    me.login.status = data.status;
                    me.login.userName = data.data.userName;
                    // 全局登陆控制
                    Vue.auth = true;
                }else {
                    Vue.auth = false;
                }
                me.louterForeEach();
            }, function (err) {
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
            var checked = this.checkSearch();
            if (checked) {
                this.goSearch();
            }else {
                this.$data.infoData = {
                    state: true,
                    class: 'negative',
                    // autoClose: true, // 自动关闭
                    info: '不能为空啊!!!'
                };
            }
        },

        /**
         * goSearch 实际搜索逻辑
         *
         */
        goSearch: function () {
            var me = this;
            var q = this.$data.searchQ;
            $.ajax({
                url: '/api/search',
                type: 'GET',
                data: {
                    q: q
                },
            })
            .done(function(json) {
                if (json.status === 1) {
                    console.log(json);
                    me.$route.router.go('/search/' + q);
                }
            })
            .fail(function(err) {
                swal({
                    title: '',
                    text: '查询错误,请稍后再试！！！',
                    type: 'error'
                });
            });
        },

        /**
         * checkSearch 搜索前校验
         *
         */
        checkSearch: function () {
            var q = this.$data.searchQ;
            return q === '' ? false : true;
        }
    }
});