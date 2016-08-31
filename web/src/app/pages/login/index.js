/**
 * @File:      登录页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-30 18:49:35
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        $(function() {
            $('#login #password').focus(function() {
                $('#owl-login').addClass('password');
            }).blur(function() {
                $('#owl-login').removeClass('password');
            });
        });
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            userName: '',
            password: ''
        };
    },
    events: {
        
    },
    components: {
        
    },
    watch: {
        
    },
    methods: {
        login: function () {
            var me = this;
            var data = {
                userName: me.$data.userName,
                password: me.$data.password
            }
            $.ajax({
                url: '/login',
                type: 'POST',
                data: data,
                success: function(data, status) {
                    console.log(data);
                    if (status == 'success') {
                        
                    }
                },
                error: function(data, status, e) {
                    if (status == "error") {
                        
                    }
                }
            });
        }
    }
});