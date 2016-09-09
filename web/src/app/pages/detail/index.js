/**
 * @File:      诗歌详情页
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-08 18:14:59
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
            poem: {}
        };
    },
    events: {
        
    },
    components: {
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/')
    },
    watch: {
        
    },
    methods: {
        init: function () {
            var me = this;
            var id = this.$route.params.id || '';
            if (id === '') {
                swal({
                    title: '',
                    text: '诗歌不存在~~',
                    type: 'error'
                }, function () {
                    window.location.href = '/';
                });
            }
            $.ajax({
                url: '/api/poem',
                type: 'get',
                data: {
                    id: id
                }
            })
            .done(function(json) {
                var data = json.data;
                var poem = {};
                poem.title = data.title;
                poem.userName = data.userName;
                poem.type = me.swicthPoemType(data.poem_type);
                poem.poem_time = data.poem_time;
                poem.lines = data.poem_lines;
                me.$data.poem = poem;
                console.log(me.$data.poem);
            })
            .fail(function(err) {
                console.log("error");
            });
        },

        /**
         * swicthPoemType 根据code返回类型
         *
         * @return {String} 返回类型
         */
        swicthPoemType: function (i) {
            var type = '诗';
             switch (i) {
                case 1:
                    type = '诗';
                    break;
                case 2:
                    type = '词';
                    break;
                case 3:
                    type = '赋';
                    break;
            }
            return type;
        }
    }
});