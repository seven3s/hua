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
        this.init();
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
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/'),
        'v-water-list': require('../../components/v-water-list/')
    },
    watch: {
        
    },
    methods: {
        init: function () {
            this.getPoems();
        },

        /**
         * getPoems 获取所有诗歌列表
         *
         */
        getPoems: function () {
            $.ajax({
                url: '/api/poem',
                type: 'GET'
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