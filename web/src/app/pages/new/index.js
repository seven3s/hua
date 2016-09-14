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
module.exports = Vue.extend({
    ready: function () {
        this.init();
        this.date();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            poem_title: '', // 文题
            genres: {
                inputName: 'poem_genres', // 选择的name字段
                defaultText: '请选择', // 默认请选择
                checkedData: '', // 默认选中value值
                data: [
                    {
                        text: '请选择',
                        value: ''
                    },
                    {
                        text: '诗',
                        value: 1
                    },
                    {
                        text: '词',
                        value: 2
                    },
                    {
                        text: '赋',
                        value: 3
                    }
                ]
            },
            poem_time: '', // 创作时间
            initLineNum: 4, // 初始行数
            newLines: [
                {
                    title: '壹',
                    value: ''
                },
                {
                    title: '贰',
                    value: ''
                },
                {
                    title: '叁',
                    value: ''
                },
                {
                    title: '肆',
                    value: ''
                }
            ],
            picobj: {
                state: 0,
                src: 'http://odflit039.bkt.clouddn.com/o_1asjud1su1nft13js1prps14hrl9image.png'
            }
        };
    },
    events: {

    },
    components: {
        'v-select': require('../../components/v-select/'),
        'v-upload': require('../../components/v-upload/'),
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/')
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
         * date 初始化日期组件
         *
         */
        date: function () {
            var me = this;
            laydate({
                elem:     '#poem_time',
                format:   'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
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
            var len = this.$data.newLines.length;
            this.$data.newLines.splice(len - 1, len);
            this.$data.initLineNum = this.$data.newLines.length;
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
            console.log(data);
            $.ajax({
                url: '/api/save/poem',
                type: 'POST',
                data: data,
            })
            .done(function(data) {
                swal({
                    title: '',
                    text: data.message,
                    type: 'success'
                }, function () {
                    var url = '/p/' + data.data.id;
                    router.go(url);
                });
            })
            .fail(function() {
                console.log("error");
            });
        }
    }
});