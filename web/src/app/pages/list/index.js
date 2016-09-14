/**
 * @File:      list页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-11 19:17:11
 */
var Vue = require('vue');
require('./index.css');
var type_id =require('../../common/type_id.js');
module.exports = Vue.extend({
    ready: function () {
        var type = this.$route.params.type;
        // 是首页即进入
        if (type === undefined) {
            this.init();
        }
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            waterdata: {},
            poemType: '',
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
    route: {
        /**
         * data 在每次路由变动时都会被调用，即使是当前组件可以被重用的时候
         *
         * @param  {Object} transition 路由实例
         *
         */
        data: function (transition) {
            this.init();
       }
    },
    methods: {
        init: function () {
            this.getPoemsType();
        },

        /**
         * getPoemsType 获取对应体裁诗歌列表
         *
         */
        getPoemsType: function () {
            var me = this;
            var type = this.$route.params.type;
            var id;
            var data = {};
            // 非首页
            if (type !== undefined) {
                id = type_id.getIdOfType(type);
                data.typeId = id;
            }
            $.ajax({
                url: '/api/poem',
                type: 'GET',
                data: data
            })
            .done(function(json) {
                var data = json.data;
                if (json.status === 0 && data.length <= 0) {
                    swal({
                        title: '',
                        text: json.message,
                        type: 'warning',
                        confirmButtonText: '跳转到首页',
                    }, function () {
                        var url = '/';
                        router.go(url);
                    });
                }
                var poems = [];
                data.forEach(function (item, index) {
                    var poem = {};
                    poem.title = item.title;
                    poem.userName = item.userName;
                    var swicthPoemType = require('../../common/swicthPoemType');
                    poem.typeString = swicthPoemType(item.poem_type);
                    poem.type = type_id.getTypeOfId(item.poem_type);
                    poem.poem_time = item.poem_time;
                    poem.id = item.id;
                    poem.likes = item.likes;
                    poem.imgSrc = item.poem_imgSrc;
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