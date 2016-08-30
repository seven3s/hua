/**
 * @File:      分页器组件
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-05-17 23:55:39
 */

/**
 * 传参示例
 * pagesdata: {
 *    options: {}, // 非必传，只有当需要改变静态值时可传
 *    data: {
 *        startPage: 1, // 非必传，默认即可
 *        totalPages: 9, // 实际应用中必传，分页器的总数，不传则使用默认1
 *        pageSize: 10 // 每页显示的数量，非必传，传了也不会用到，只是给后端做分页切割使用
 *    }
 *}
 */
require('./index.css');
require('twbs-pagination');
var Vue = require('vue');
module.exports = Vue.extend({
    ready: function () {
        this.init();
    },
    props: {
        pagesdata: {
            type: Object
        }
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {};
    },
    components: {
    },
    watch: {
        pagesdata: {
            handler: function (val, oldVal) {
                this.pagesdata = val;
                this.init();
            },
            deep: true
        }
    },
    events: {},
    methods: {
        init: function () {
            var me = this;
            // 默认配置
            // 用户传入配置，可不传入使用默认配置
            var options = this.pagesdata.options;
            var opt = {};
            if (options) {
                opt = {
                    first: options.first || '首页',
                    prev: options.prev || '上页',
                    next: options.next || '下页',
                    last: options.last ||  '末页',
                    visiblePages: options.visiblePages || 3
                }
            }else {
                opt = {
                    first: '首页',
                    prev: '上页',
                    next: '下页',
                    last:  '末页',
                    visiblePages: 3
                }
            }
            //  用户传入数据，可不传入使用默认配置
            var data = this.pagesdata.data;
            if (data) {
                data = {
                    totalPages: data.totalPages || 1,
                    startPage: data.startPage || 1
                }
            }else {
                data = {
                    totalPages: 1,
                    startPage: 1
                }
            }
            // 插件自身问题，为了从后端获得的总页数后分页器自动更新;
            // 传入参数必须配置 startPage = pageCurNum; 如果没配置;
            // 当前没法active;
            $('.pagination').remove();
            $("#pages").append('<ul id="pagination" class="pagination m0 "></ul>');

            $('#pagination').twbsPagination({
                totalPages: data.totalPages, // 默认总页数1页,具体需要返回数据后配置
                visiblePages: opt.visiblePages, // 分页器中间显示多少页
                startPage: data.startPage, // 开始页数
                first: opt.first,
                prev: opt.prev,
                next: opt.next,
                last: opt.last,
                onPageClick: function (event, page) {
                    // 将当前页数返回给父组件
                    me.pagesdata.data.pageCurNum = page;
                    // 传入参数必须配置 startPage = page; 如果没配置;
                    // 当前没法active;
                    me.pagesdata.data.startPage = page;
                }
            });
        }
    }
});