/**
 * @File:      工具集合
 * @Author:    花夏(liubiao@itos.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-28 17:43:10
 */
module.exports = {
    /**
     * getScrollTop 获取滚动条当前的位置
     *
     * @return {Number} 返回滚动条当前位置
     */
    getScrollTop: function() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }
        return scrollTop;
    },

    /**
     * getClientHeight 获取当前可视范围的高度
     *
     * @return {Number} 返回当前可视范围的高度
     */
    getClientHeight: function () {
        var clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }
        return clientHeight;
    },

    /**
     * getScrollHeight 获取
     *
     * @return {Number} 返回文档完整的高度
     */
    getScrollHeight: function() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
};