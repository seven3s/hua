/**
 * @File:      设置页面标题
 * @Author:    花夏(liubiao@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-09-17 17:42:27
 */
module.exports = {
    setTitle: function (s) {
        if (s) {
            document.title = s;
        }
    }
}