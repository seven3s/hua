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
        this.init();
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
        init: function () {
            var me = this;
            var validationRules = {
                user: {
                    identifier: 'user',
                    rules: [
                        {
                            type: 'empty',
                            prompt: '用户名必填！'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [
                        {
                            type: 'empty',
                            prompt: '请输入密码！'
                        }, {
                            type: 'minLength[6]',
                            prompt: '密码不得小于6位！'
                        }
                    ]
                }
            };
            $(function() {
                $('#login #password').focus(function() {
                    $('#owl-login').addClass('password');
                }).blur(function() {
                    $('#owl-login').removeClass('password');
                });
                // 登陆校验
                $('.ui.form').form({
                    fields: validationRules,
                    inline: true,
                    on: 'submit',
                    onSuccess: function () {
                        me.login();
                    }
                });
            });
        },
        login: function () {
            var me = this;
            var data = {
                userName: me.$data.userName,
                password: me.$data.password
            }
            $.ajax({
                url: '/api/login',
                type: 'POST',
                data: data,
                success: function(data) {
                    // 用户名不存在
                    if (data.status === -1) {
                        swal({
                            title: '',
                            text: data.message,
                            type: 'error'
                        });
                    }else if (data.status === 0) {
                        // 密码错误
                        swal({
                            title: '',
                            text: data.message,
                            type: 'error'
                        });
                    }else if (data.status === 1) {
                        // 登陆成功
                        swal({
                            title: '',
                            text: data.message,
                            type: 'success'
                        }, function () {
                            var url = '/';
                            window.location.href = url;
                        });
                    }
                },
                error: function(data, e) {
                    
                }
            });
        }
    }
});