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
        auth: true, // 需要做登陆校验
        component: function (resolve) {
            require(['./pages/new'], resolve);
        }
    },
    '/p/:id': {
        // 诗歌详情页
        canReuse: false,
        component: function (resolve) {
            require(['./pages/detail'], resolve);
        }
    },
    '/update/:id': {
        // 诗歌详情页
        canReuse: false,
        auth: true, // 需要做登陆校验
        component: function (resolve) {
            require(['./pages/new'], resolve);
        }
    },
    '/list/:type': {
        // 诗歌详情页
        canReuse: false,
        component: function (resolve) {
            require(['./pages/list'], resolve);
        }
    }
};