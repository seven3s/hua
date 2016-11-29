/**
 * @File:      water box组件
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-10 19:09:50
 */
var Vue = require('vue');
require('./index.css');
require('./cascade.css');
require('./cascade');
var restFullLoader = require('../../common/loader');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    props: {
        waterboxdata: {}
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            isLoginState: false,
            likesState: false
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
            this.$data.isLoginState = Vue.auth;
            // setTimeout(function () {
            //     $('.water-full').cascade();
            // });
            this.$nextTick(function () {
                $('.water-full').cascade();
            });
            $(window).trigger('resize.cascade');
        },

        /**
         * like 點讚的詩歌
         *
         * @param  {String} id 點讚的詩歌id
         *
         */
        like: function (id, likes) {
            var me = this;
            if (!this.likesState) {
                if (this.waterboxdata.likes === undefined) {
                    this.waterboxdata['likes'] = 0;
                }
                this.waterboxdata.likes++;
                this.likesState = true;
                var num = 0;
                var url = '/api/likes';
                var data = {
                    _id: id,
                    likes: ++num
                }
                restFullLoader.requestPOST(url, data, function (res) {
                    
                }, function (err) {
                    me.likesState = true;
                });
            }else {
                var infoData = this.$root.$children[0].infoData;
                infoData.class = 'negative';
                infoData.info = '大才子,你已經點過贊拉!!!';
                infoData.state = true;
            }
        }
    }
});
