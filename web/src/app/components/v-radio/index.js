/**
 * @File:      radio组件
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-28 17:26:06
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
            checkedVal: ''
        }
    },
    watch: {
        checkedVal: {
            handler: function (val, oldVal) {
                this.data.checkedVal = val;
            }
        }
    },
    props: {
        data: {
            type: Object
        }
    },
    components: {
    },
    events: {},
    methods: {
        init: function () {
            
        }
    }
});