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
    '/p/:id': {
        // 诗歌详情页
        component: function (resolve) {
            require(['./pages/detail'], resolve);
        }
    },
    '/update/:id': {
        // 诗歌详情页
        component: function (resolve) {
            require(['./pages/new'], resolve);
        }
    },
    '/list/:type': {
        // 诗歌详情页
        component: function (resolve) {
            require(['./pages/list'], resolve);
        }
    }
};