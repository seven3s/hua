/**
 * @File:      新增页面
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-05 19:35:07
 */
var Vue = require('vue');
require('./index.css');
module.exports = Vue.extend({
    ready: function () {
        this.date();
    },
    template: require('./index.tpl.html'),
    data: function () {
        return {
            writeType: {
                inputName: 'writeType', // 选择的name字段
                defaultText: '请选择', // 默认请选择
                checkedData: -1, // 默认选中value值
                data: [
                    {
                        text: '请选择',
                        value: -1
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
            }
        };
    },
    events: {
        
    },
    components: {
        'v-select': require('../../components/v-select/'),
        'v-header': require('../../includes/header/'),
        'v-footer': require('../../includes/footer/')
    },
    watch: {
        
    },
    methods: {
        /**
         * date 初始化日期组件
         *
         */
        date: function () {
            laydate({
                elem: '#test1',
                format: 'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
                festival: true, //显示节日
                choose: function(datas){
                    //选择日期完毕的回调
                }
            });
        }
    }
});