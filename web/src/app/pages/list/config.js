/**
 * @File:      下拉刷新配置
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-28 14:23:21
 */
module.exports = {
    domUp: {
        initialCall: function() {}, //初始化状态
        pullingCall: function() {}, //下拉过程中
        loadingCall: function() {}, //加载中
        loadEndCall: function() {} //加载完成
    },
    domDown: {
        initialCall: function() {}, //初始化
        loadingCall: function() {},
        domNoData: function() {}
    }
};