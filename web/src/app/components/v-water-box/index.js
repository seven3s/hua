/**
 * @File:      water box组件
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-10 19:09:50
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        console.log(this.waterboxdata);
    },
    props: {
        waterboxdata: {}
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
        };
    },
    events: {
        
    },
    components: {
        
    },
    watch: {
        
    },
    methods: {
        
    }
});