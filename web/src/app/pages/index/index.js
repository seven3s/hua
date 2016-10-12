/**
 * @File:      首页
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-08-30 15:16:59
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            waterdata: {}
        };
    },
    events: {
        
    },
    components: {
        'v-list': require('../list')
    },
    watch: {
        
    },
    methods: {
        /**
         * post 备份全部诗歌
         *
         */
        post: function () {
            $.ajax({
                url: '/api/backup',
                type: 'POST'
            })
            .done(function(json) {
                console.log(json);
            })
            .fail(function() {
                console.log("error");
            });
        }
    }
});