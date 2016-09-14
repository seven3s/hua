/**
 * @File:      诗歌详情页
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-08 18:14:59
 */
var Vue = require('vue');
require('./index.css');
var type_id =require('../../common/type_id.js');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            load: 0,
            poem: {}
        };
    },
    events: {
        
    },
    components: {
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/'),
        'v-loading': require('../../components/v-loading/')
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
                var swicthPoemType = require('../../common/swicthPoemType');
                poem.type = type_id.getTypeOfId(data.poem_type);
                poem.typeString = swicthPoemType(data.poem_type);
                poem.poem_time = data.poem_time;
                poem.imgSrc = data.poem_imgSrc;
                poem.lines = data.poem_lines;
                me.$data.poem = poem;
                me.$data.load = 1;
            })
            .fail(function(err) {
                console.log("error");
            });
        }
    }
});