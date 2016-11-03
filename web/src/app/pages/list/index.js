/**
 * @File:      list页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-11 19:17:11
 */
var Vue = require('vue');
require('./index.css');
var type_id =require('../../common/type_id');
var title = require('../../common/setTitle');
var util = require('../../common/util');
var moment = require('moment');
var browserRedirect = require('../../common/browserRedirect');
var restFullLoader = require('../../common/loader');
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
            waterdata: [],
            poemType: '',
            loading: 1,
            loadMore: 0,
            // 查询最后一个的时间
            endTime: '',
            // 诗歌中最后一条数据
            endPoemsTimeObj: {
                endPoemsTime: '1900-01-01',
                endPoemsTimeState: 0
            }
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
            // 第一次进入加载
            var curTime = moment().format('YYYY-MM-DD HH:mm:ss');
            this.$data.endTime = curTime;
            // 第一次加载需要清空
            me.$data.waterdata = [];
            me.$data.endPoemsTimeObj.endPoemsTimeState = 0;
            var pageSize = me.getNum();
            var param = {
                ltTime: curTime,
                pageSize: pageSize
            };
            me.loadListData(param, function(json) {
                var data = json.data;
                if (json.status === 1) {
                    // 记录最后一条的时间
                    me.$data.endTime = data[data.length - 1]['time'];
                    me.getPoemsData(json);
                    me.$data.loadMore = 0;
                }else if (json.status === 0) {
                    // 记录最后一条的时间
                    me.$data.endPoemsTimeObj.endPoemsTime = me.$data.endTime;
                    me.$data.loadMore = 0;
                    me.$data.endPoemsTimeObj.endPoemsTimeState = 1;
                }
            });
            this.scroll();
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
                data.poem_type = id;
                var cn = type_id.getIdOfCn(id);
                title.setTitle(cn);
            }
            restFullLoader.requestGET('/api/poem', data, function (json) {
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
                me.$data.loading = 0;
                me.$data.waterdata = poems;
            });
        },

        /**
         * 加载数据
         * @param fn
         */
        loadListData: function(param, fn) {
            this.$data.loadMore = 1;
            var type = this.$route.params.type;
            var id;
            var data = {};
            this.extendObject(data, param);
            // 非首页
            if (type !== undefined) {
                id = type_id.getIdOfType(type);
                data.poem_type = id;
                var cn = type_id.getIdOfCn(id);
                title.setTitle(cn);
            }
            restFullLoader.requestGET('/api/poem', data, function (json) {
                if (json.status === 1) {
                    fn && fn(json);
                }
            });
        },

        /**
         * scroll 滑动加载更多
         *
         */
        scroll: function() {
            var me = this;
            this.starTime = new Date().getTime();
            document.onscroll = me.mouseScroll;
        },

        /**
         * mouseScroll 鼠标滚动事件
         *
         */
       mouseScroll: function() {
            var me = this;
            this.scrollTime = new Date().getTime();
            // 防止初始进入页面滚动条在底部加载2次相同内容
            if (this.scrollTime - this.starTime < 20) {
                return;
            }
            var pageSize = me.getNum();
            var param = {
                ltTime: me.$data.endTime,
                pageSize: pageSize
            };
            var loadMore = me.$data.loadMore;
            var endTime = me.$data.endTime;
            var endPoemsTime = me.$data.endPoemsTimeObj.endPoemsTime;
            if (
                util.getScrollTop() + util.getClientHeight() === util.getScrollHeight() && loadMore === 0 && endTime > endPoemsTime) {
                me.$data.loadMore = 1;
                me.loadListData(param, function(json) {
                    var data = json.data;
                    if (json.status === 1) {
                        // 记录最后一条的时间
                        me.$data.endTime = data[data.length - 1]['time'];
                        me.$data.endPoemsTimeObj.endPoemsTime = json.endPoemsTime;
                        if (me.$data.endTime === me.$data.endPoemsTimeObj.endPoemsTime) {
                            me.$data.endPoemsTimeObj.endPoemsTimeState = 1;
                        }
                        me.getPoemsData(json);
                    }else if (json.status === 0) {
                        // 记录最后一条的时间
                        me.$data.endPoemsTimeObj.endPoemsTime = me.$data.endTime;
                        me.$data.loadMore = 0;
                        me.$data.endPoemsTimeObj.endPoemsTimeState = 1;
                    }
                });
            }
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
            me.$data.loadMore = 0;
            var arr = me.$data.waterdata;
            me.$data.waterdata = arr.concat(poems);
        },

        getNum: function () {
            var screenWidth = $(window).width();
            fallsWidth = 290 + 15; // width + margin
            var num = Math.floor(screenWidth / fallsWidth) || 4;
            return num;
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