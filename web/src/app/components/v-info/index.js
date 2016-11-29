/**
 * @File:      消息提示
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-30 16:17:56
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    template: require('./index.tpl.html'),
    props: {
        infoData: {
            
        }
    },
    data: function () {
        return {
            
        };
    },
    events: {
        
    },
    components: {
        
    },
    watch: {
        'infoData.state': {
            handler: function (val) {
                if (!!val) {
                    this.isAutoClose();
                }
            }
        }
    },
    methods: {
        init: function () {
            if (this.infoData.autoClose === undefined) {
                this.infoData.autoClose = true;
            }
            this.close();
        },

        /**
         * isAutoClose 只有自動關閉設置時才自動關係
         *
         */
        isAutoClose: function () {
            if (this.infoData.autoClose) {
                this.autoClose();
            }
        },

        /**
         * autoClose 自动关闭
         *
         */
        autoClose: function () {
            var me = this;
            setTimeout(function () {
                me.infoData.state = false;
            }, 1854);
        },

        close: function () {
            var me = this;
            $('.message .close').on('click', function() {
                $(this).closest('.message').transition('fade');
                me.infoData.state = false;
            });
        }
    }
});