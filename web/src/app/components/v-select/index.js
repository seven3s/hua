/**
 * @File:      select组件
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-01 17:19:58
 */
require('./index.css');
var Vue = require('vue');
module.exports = Vue.extend({
    ready: function () {
        me = this;
        me.init();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            checkedData: ''
        };
    },
    watch: {
        // 监听当前选中项
        checkedData: {
            handler: function (val, oldVal) {
                this.selectobj.checkedData = val;
            }
        },
        selectobj: {
            handler: function (val, oldVal) {
                // 监听变化，如果是-1则做重置
                if (val.checkedData === '') {
                    this.rest();
                }
            },
            deep: true
        }
    },
    props: {
        selectobj: {}
    },
    components: {
    },
    events: {},
    methods: {
        init: function () {
            $('.dropdown').dropdown({
                // 你可以使用任何过渡
                transition: 'slide down'
            });
        },

        /**
         * rest semantic-ui中没有重置默认选中文字，所以简单做一个
         *
         */
        rest: function () {
            var defaultText = this.selectobj.defaultText;
            $('.selection.dropdown > .text').text(defaultText).addClass('default');
        }
    }
});