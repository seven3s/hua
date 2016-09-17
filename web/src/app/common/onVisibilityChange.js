/**
 * @File:      浏览器标签切换事件
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-17 17:58:11
 */
module.exports = {
    init: function() {
        var me = this;
        // 定时器，设置消息切换频率闪烁效果就此产生   
        this.time = 0;
        var title = document.title;
        // 设置3s，因为有页面动态改变了title;
        setTimeout(function () {
            title = document.title;
            me.title = title;
        }, 1000);
        var hiddenProperty = 'hidden' in document ? 'hidden' :
            'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' :
            null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function() {
            if (!!document[hiddenProperty]) {
                var title = '有bug啦快回家！';
                document.title = title;
                clearTimeout(me.timer);
                me.showTitle(title);
            } else {
                if (title === '有bug啦快回家！') {
                    title = '花夏集';
                }
                clearTimeout(me.timer);
                document.title = me.title;
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    },

    /**
     * showTitle title动态提示
     *
     * @return {type} description
     */
    showTitle: function(s) {
        var me = this;
        this.timer = setTimeout(function() {
            me.time++;
            me.showTitle(s);
            if (me.time % 2 == 0) {
                document.title = s;
            } else {
                document.title = me.title;
            };
        }, 618);
    }
}