/**
 * @File:      浏览器标签切换事件
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-17 17:58:11
 */
module.exports = {
    init: function() {
        var title = document.title;
        // 设置3s，因为有页面动态改变了title;
        setTimeout(function () {
            title = document.title;
        }, 3000);
        var hiddenProperty = 'hidden' in document ? 'hidden' :
            'webkitHidden' in document ? 'webkitHidden' :
            'mozHidden' in document ? 'mozHidden' :
            null;
        var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
        var onVisibilityChange = function() {
            if (!!document[hiddenProperty]) {
                document.title = '页面有bug了快回来看看';
            } else {
                console.log(title);
                document.title = title;
            }
        }
        document.addEventListener(visibilityChangeEvent, onVisibilityChange);
    }
}