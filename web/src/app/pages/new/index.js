/**
 * @File:      新增页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-05 19:35:07
 */
var Vue = require('vue');
require('./index.css');
var numToCn = require('../../common/numToCn');
var rule = require('./rule-setting');
var defaultConfig = require('./default-config');
var title = require('../../common/setTitle');
var restFullLoader = require('../../common/loader');
var webConfig =  require('../../web-config');
module.exports = Vue.extend({
    ready: function () {
        this.init();
        this.date();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            isLoginstate: 0, // 登陆状态
            poem_title: '', // 文题
            genres: defaultConfig.genresData,
            poem_time: '', // 创作时间
            initLineNum: 4, // 初始行数
            newLines: [],
            picobj: {
                state: 0,
                src: 'http://odflit039.bkt.clouddn.com/o_1asjud1su1nft13js1prps14hrl9image.png'
            },
            update: 0,
            postState: 0 // 点击提交状态
        };
    },
    events: {

    },
    components: {
        'v-select': require('../../components/v-select/'),
        'v-upload': require('../../components/v-upload/')
    },
    watch: {
        // newLines: {
        //     handler: function () {
        //         this.validation();
        //     },
        //     deep: true
        // }
        picobj: {
            handler: function (val) {
                // 获取上传组件传回的图片src
                this.$data.picobj.src = val.src;
            },
            deep: true
        }
    },
    methods: {
        init: function () {
            var me = this;
            title.setTitle('忽来文思涌');
            this.isUpdate();
            // 刷新关闭提示
            this.fresh();
            $('[name = poem-form]').form({
                fields:    rule,
                inline:    true,
                istoday: false,
                on:        'submit',
                onSuccess: function () {
                    var validate = me.validation();
                    // 所有验证通过则提交数据并保存
                    if (validate) {
                        me.post();
                    }
                }
            });
        },

        /**
         * fresh 刷新提示
         *
         */
        fresh: function () {
            // 刷新提示
            document.body.onbeforeunload = function (e) {
                e = e || window.event;
                if (/webkit/.test(navigator.userAgent.toLowerCase())) {
                    return"离开页面将导致数据丢失！";
                }else {
                    e.returnValue ="离开页面将导致数据丢失！";
                }
            }
        },

        /**
         * isUpdate 是否是更新
         *
         */
        isUpdate: function () {
            // 编辑
            var path = this.$route.path;
            var update = path.split('/')[1];
            if (update === 'update') {
                this.$data.update = 1;
                var id = this.$route.params.id;
                this.getPoem(id);
            }else {
                this.$data.newLines = defaultConfig.newLines;
            }
        },

        /**
         * date 初始化日期组件
         *
         */
        date: function () {
            var me = this;
            laydate({
                elem:     '#poem_time',
                format:   'YYYY-MM-DD hh:mm:ss', // 分隔符可以任意定义，该例子表示只显示年月
                istime: true,
                festival: true, //显示节日
                choose:   function(datas){
                    //选择日期完毕的回调
                    me.poem_time = datas;
                }
            });
        },

        /**
         * newLine 新增一联
         *
         */
        newLine: function () {
            var initLineNum  = this.$data.initLineNum;
            var newLineNum   = initLineNum - 4;
            var cnNewLineNum = ++newLineNum + 4;
            if (cnNewLineNum >= 69) {
                swal({
                    title: '',
                    text: '不能再添加了哦~~',
                    type: 'error'
                });
                return;
            }
            this.$data.initLineNum = cnNewLineNum;
            var cn = numToCn.get(cnNewLineNum);
            var obj = {
                title: cn,
                value: ''
            }
            this.$data.newLines.push(obj);
        },

        /**
         * delLine 删除一联
         *
         */
        delLine: function () {
            var me = this;
            var cnNewLineNum = this.$data.initLineNum;
            var newLineNum   = cnNewLineNum - 4;
            if (newLineNum === 0) {
                swal({
                    title: '',
                    text: '不能再删除了哦~~',
                    type: 'warning'
                });
                return;
            }
            swal({
                title: "您确定要删除最后一行吗？",
                // text: "您确定要删除这条数据？", 
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonText: "是的，我要删除",
                confirmButtonColor: "#ec6c62"
            }, function() {
                var len = me.$data.newLines.length;
                me.$data.newLines.splice(len - 1, len);
                me.$data.initLineNum = me.$data.newLines.length;
            });
        },

        /**
         * validation 自定义校验每一行
         *
         */
        validation: function () {
            var data = this.$data.newLines;
            var validateNum = 0;
            data.forEach(function (item, index) {
                if (!item.value && (item.value !== 0 || item.value !== '0')) {
                    var errEl = $('.ui.segment.field').eq(index).find('.prompt.label');
                    if (errEl.length <= 0) {
                        $('.ui.segment.field').eq(index).append('<div class="ui basic red pointing prompt label transition visible">再想想又是一好辞！</div>');
                    }
                    validateNum++;
                }else {
                    $('.ui.segment.field').eq(index).find('.prompt.label').remove();
                }
            });
            return validateNum <= 0;
        },

        /**
         * post 保存数据
         *
         */
        post: function () {
            var me = this;
            this.$data.postState = 1;
            var poem_title = this.$data.poem_title;
            var poem_time = this.$data.poem_time;
            var poem_type = this.$data.genres.checkedData;
            var poem_lines = [];
            var poem_imgSrc = '';
            var picobj = this.$data.picobj;
            if (picobj.state === 1) {
                poem_imgSrc = picobj.src;
            }
            this.$data.newLines.forEach(function (item) {
                poem_lines.push(item.value);
            });
            var data = {
                poem_title: poem_title,
                poem_time:  poem_time,
                poem_type:  poem_type,
                poem_lines: poem_lines,
                poem_imgSrc: poem_imgSrc
            };
            // 更新
            var _id = this.$route.params.id;
            if (_id) {
                data['_id'] = _id;
            }
            // 检查登陆状态
            this.isLogin();
            if (this.isLoginstate === 0) {
                this.$data.postState = 0;
                swal({
                    title: '',
                    text: '未登陆请登陆',
                    type: 'error'
                }, function () {
                    var url = '/#!/login';
                    self.open(url);
                });
                return;
            }
            var url = '/api/save/poem';
            // $.ajax({
            //     url: '/api/save/poem',
            //     type: 'POST',
            //     data: data,
            // })
            // .done(function(data) {
            //     swal({
            //         title: '',
            //         text: data.message,
            //         type: 'success'
            //     }, function () {
            //         me.backUpPoem(data.data.id, function () {
            //             var url = '/#!/p/' + data.data.id;
            //             self.location.href = url;
            //         });
            //     });
            // })
            // .fail(function() {
            //     me.$data.postState = 0;
            //     console.log("error");
            // });
            restFullLoader.requestPOST(url, data, function (res) {
                if (res.status === 1) {
                    swal({
                        title: '',
                        text: data.message,
                        type: 'success'
                    }, function () {
                        me.backUpPoem(data.data.id, function () {
                            var url = '/#!/p/' + data.data.id;
                            url = webConfig.host + webConfig.root + url;
                            self.location.href = url;
                        });
                    });
                }
            }, function (err) {
                me.$data.postState = 0;
                console.log("error");
            });
        },

        /**
         * backUpPoem 备份诗歌
         *
         * @param  {string} id 诗歌id
         *
         */
        backUpPoem: function (id, cb) {
            var url = '/api/backup';
            var data = {
                id: id
            };
            // $.ajax({
            //     url: '/api/backup',
            //     type: 'POST',
            //     data: data
            // })
            // .done(function(json) {
            //     cb && cb();
            // })
            // .fail(function() {
            //     cb && cb();
            // });
            restFullLoader.requestPOST('/api/poem', data, function (res) {
                if (res.status === 1) {
                    cb && cb();
                }
            }, function (err) {
                cb && cb();
            });
        },

        /**
         * isLogin 检查是否登陆
         *
         */
        isLogin: function () {
            var me = this;
            var host = require('../web-config').host;
            var url = host + '/api/isLogin';
            $.ajax({
                url: url,
                type: 'GET',
                async: false
            })
            .done(function(data) {
                if (data.status === 1) {
                    me.isLoginstate = 1;
                }else {
                    me.isLoginstate = 0;
                }
            })
            .fail(function(error) {
                me.isLoginstate = 0;
                console.log(error);
            });
            // restFullLoader.requestGET(url, function (res) {
            //     if (res.status === 1) {
            //         me.isLoginstate = 1;
            //     }else {
            //         me.isLoginstate = 0;
            //     }
            // }, function (err) {
            //     me.isLoginstate = 0;
            //     console.log(error);
            // });
        },

        /**
         * getPoem 根据id获取poemupdate
         *
         */
        getPoem: function (id) {
            var me = this;
            var url = '/api/poem';
            var data = {
                id: id,
                update: true
            };
            // $.ajax({
            //     url: '/api/poem',
            //     type: 'get',
            //     data: data
            // })
            // .done(function(json) {
            //     if (json.status === 0) {
            //         swal({
            //             title: '',
            //             text: json.message,
            //             type: 'warning',
            //             confirmButtonText: '跳转到首页'
            //         }, function () {
            //             var url = '/';
            //             router.go(url);
            //         });
            //         return;
            //     }
            //     var data = json.data;
            //     // 诗歌类型
            //     me.$data.genres.checkedData = data.poem_type;
            //     // 文题
            //     me.$data.poem_title = data.title;
            //     title.setTitle(data.title);
            //     // 创作时间
            //     me.$data.poem_time = data.poem_time;
            //     // 图集
            //     if (data.poem_imgSrc) {
            //         var picobj = {
            //             state: 1,
            //             src: data.poem_imgSrc
            //         };
            //         me.$data.picobj = picobj;
            //     }
            //     // 联句
            //     var poems = data.poem_lines;
            //     me.$data.initLineNum = poems.length;
            //     poems.forEach(function (item, index) {
            //         var cn = numToCn.get(index + 1);
            //         var obj = {
            //             title: cn,
            //             value: item
            //         }
            //         me.$data.newLines.push(obj);
            //     });
            // })
            // .fail(function(err) {
            //     console.log("error");
            // });
            restFullLoader.requestGET('/api/poem', data, function (json) {
                if (json.status === 0) {
                    swal({
                        title: '',
                        text: json.message,
                        type: 'warning',
                        confirmButtonText: '跳转到首页'
                    }, function () {
                        var url = '/';
                        me.$route.router.go('/');
                    });
                    return;
                }
                var data = json.data;
                // 诗歌类型
                me.$data.genres.checkedData = data.poem_type;
                // 文题
                me.$data.poem_title = data.title;
                title.setTitle(data.title);
                // 创作时间
                me.$data.poem_time = data.poem_time;
                // 图集
                if (data.poem_imgSrc) {
                    var picobj = {
                        state: 1,
                        src: data.poem_imgSrc
                    };
                    me.$data.picobj = picobj;
                }
                // 联句
                var poems = data.poem_lines;
                me.$data.initLineNum = poems.length;
                poems.forEach(function (item, index) {
                    var cn = numToCn.get(index + 1);
                    var obj = {
                        title: cn,
                        value: item
                    }
                    me.$data.newLines.push(obj);
                });
            });
        }
    }
});