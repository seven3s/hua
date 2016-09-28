/**
 * @File:      list页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-11 19:17:11
 */
var Vue = require('vue');
require('./index.css');
var vueDrapload =  require('vue-drapload');
var config = require('./config');
Vue.use(vueDrapload, config);
var type_id =require('../../common/type_id.js');
var title = require('../../common/setTitle');
var moment = require('moment');
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
            loading: 1
        };
    },
    events: {
        
    },
    components: {
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/'),
        'v-water-list': require('../../components/v-water-list/'),
        'v-loading': require('../../components/v-loading')
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
            this.$data.loading = 1;
            this.init();
        }
    },
    methods: {
        init: function () {
            // this.getPoemsType();
            var me = this;
            me.$data.loading = 0;
            me.$options.vue = me;
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
                var cn = type_id.getIdOfCn(id);
                title.setTitle(cn);
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
                        confirmButtonText: '跳转到首页'
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
                me.$data.loading = 0;
                me.$data.waterdata = poems;
            })
            .fail(function() {
                console.log("error");
            });
        },

        /**
         * 加载数据
         * @param fn
         */
        loadListData: function(param, fn) {
            var me = this.vue;
            var type = this.$route.params.type;
            var id;
            var data = {};
            this.extendObject(data, param);
            // 非首页
            if (type !== undefined) {
                id = type_id.getIdOfType(type);
                data.typeId = id;
                var cn = type_id.getIdOfCn(id);
                title.setTitle(cn);
            }
            $.ajax({
                url: '/api/poem',
                data: data,
                type: 'GET',
                success: function(data) {
                    fn(data);
                }
            });
        },
        down: function() {
            var me = this;
            var curTime = moment().format('YYYY-MM-DD HH:mm:ss');
            var param = {
                lteTime: curTime,
                pageSize: 4
            }
            this.loadListData(param,function(data) {
                me.getPoemsData(data);
                me.ascroll.resetload(true);
            });
        },
        up: function() {
            var me = this;
            this.loadListData(function(json) {
                console.log(1);
                
                me.ascroll.resetload();
            });
        },

        /**
         * getPoemsData 获取诗歌data
         *
         * @param  {Object} json ajax返回data
         *
         */
        getPoemsData: function (json) {
            var me = this;
            var data = json.data;
            if (json.status === 0 && data.length <= 0) {
                swal({
                    title: '',
                    text: json.message,
                    type: 'warning',
                    confirmButtonText: '跳转到首页'
                }, function () {
                    var url = '/';
                    me.$route.router.go(url);
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
            // me.$data.loading = 0;
            me.$data.waterdata = poems;
        },

        /**
         * extendObject 合并对象
         *
         * @param  {Object} a 对象a,可以是json，可以是数组
         * @param  {Object} b 对象b,可以是json，可以是数组
         * @param  {Object} override 
         *
         * @return {Object}   返回合并后的对象
         */
        extendObject: function(a, b, override) {
            if (b instanceof Array) {
                for (var i = 0, len = b.length; i < len; i++)
                    this.extend(a, b[i], override);
            }
            for (var i in b) {
                if (override || !(i in a)) {
                    a[i] = b[i];
                }
            }
            return a;
        }
    }
});