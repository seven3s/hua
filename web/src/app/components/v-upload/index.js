/**
 * @File:      上传组件
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-13 15:52:19
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        this.init();
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
        init: function () {
            $('.upload')[0].onchange = function () {
                var src = this.value;
                console.log(src);
                if (src) {
                    $.ajax({
                        url: '/api/upload',
                        type: 'POST',
                        data: {
                            src: src
                        }
                    })
                    .done(function(json) {
                        console.log(json);
                    })
                    .fail(function() {
                        console.log("error");
                    });
                }
            };
        }
    }
});