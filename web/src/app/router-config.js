module.exports = {
    '/example': {
        // 示例
        component: function (resolve) {
            require(['./example/'], resolve);
        }
    }
};