module.exports = {
    '/': {
        // 首页
        component: function (resolve) {
            require(['./pages/index'], resolve);
        }
    },
    '/index': {
        // 首页
        component: function (resolve) {
            require(['./pages/index'], resolve);
        }
    },
    '/login': {
        // 登录页
        component: function (resolve) {
            require(['./pages/login'], resolve);
        }
    },
    '/new': {
        // 新增页
        component: function (resolve) {
            require(['./pages/new'], resolve);
        }
    },
    '/detail/:id': {
        // 诗歌详情页
        component: function (resolve) {
            require(['./pages/detail'], resolve);
        }
    }
};