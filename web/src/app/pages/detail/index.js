/**
 * @File:      诗歌详情页
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-08 18:14:59
 */
var Vue = require('vue');
require('./index.css');
var type_id =require('../../common/type_id');
var title = require('../../common/setTitle');
require('../../common/baguetteBox/css/baguetteBox.css');
var restFullLoader = require('../../common/loader');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            load: 0,
            poem: {},
            likesState: false
        };
    },
    events: {
        
    },
    components: {
        'v-loading': require('../../components/v-loading/')
    },
    watch: {
        
    },
    methods: {
        init: function () {
            var me = this;
            var id = this.$route.params.id || '';
            if (id === '') {
                swal({
                    title: '',
                    text: '诗歌不存在~~',
                    type: 'error'
                }, function () {
                    window.location.href = '/';
                });
            }
            var url = '/api/poem';
            var data = {
                id: id
            };
            restFullLoader.requestGET(url, data, function (json) {
                if (json.status === 0) {
                    swal({
                        title: '',
                        text: json.message,
                        type: 'warning',
                        confirmButtonText: '跳转到首页'
                    }, function () {
                        var url = '/';
                        self.location.href = url;
                    });
                    return;
                }
                var data = json.data;
                var poem = {};
                poem.title = data.title;
                title.setTitle(data.title);
                poem.userName = data.userName;
                var swicthPoemType = require('../../common/swicthPoemType');
                poem.type = type_id.getTypeOfId(data.poem_type);
                poem.typeString = swicthPoemType(data.poem_type);
                poem.poem_time = data.poem_time;
                poem.imgSrc = data.poem_imgSrc;
                poem.lines = data.poem_lines;
                poem.likes = data.likes;
                poem.id = data.id;
                me.$data.poem = poem;
                me.$data.load = 1;
                // 图片预览
                setTimeout(function () {
                    baguetteBox.run('.baguette-img', {
                        animation: 'fadeIn',
                        noScrollbars: true,
                        captions: function(element) {
                            return element.getElementsByTagName('img')[0].alt;
                        }
                    });
                });
            });
        },

        likePoem: function (id, likes) {
            var me = this;
            if (!this.likesState) {
                if (this.poem.likes === undefined) {
                    this.poem['likes'] = 0;
                }
                this.poem.likes++;
                this.likesState = true;
                var num = 0;
                var url = '/api/likes';
                var data = {
                    _id: id,
                    likes: ++num
                }
                restFullLoader.requestPOST(url, data, function (res) {
                    
                }, function (err) {
                    me.likesState = false;
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