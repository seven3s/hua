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
            var me = this;
            $.ajax({
                url: '/api/poem',
                type: 'GET'
            })
            .done(function(json) {
                var data = json.data;
                var poems = [];
                data.forEach(function (item, index) {
                    var poem = {};
                    poem.title = item.title;
                    poem.userName = item.userName;
                    var swicthPoemType = require('../../common/swicthPoemType');
                    poem.type = swicthPoemType(item.poem_type);
                    poem.poem_time = item.poem_time;
                    poem.lines = item.poem_lines;
                    poems.push(poem);
                });
                me.$data.waterdata = poems;
            })
            .fail(function() {
                console.log("error");
            });
        }
    }
});