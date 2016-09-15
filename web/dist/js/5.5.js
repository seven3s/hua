webpackJsonp([5],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      list页面
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-11 19:17:11
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(17);
	var type_id =__webpack_require__(19);
	module.exports = Vue.extend({
	    ready: function () {
	        var type = this.$route.params.type;
	        // 是首页即进入
	        if (type === undefined) {
	            this.init();
	        }
	    },
	    template: __webpack_require__(20),
	    data: function () {
	        return {
	            waterdata: {},
	            poemType: '',
	            loading: 1
	        };
	    },
	    events: {
	        
	    },
	    components: {
	        'v-header': __webpack_require__(21),
	        'v-footer': __webpack_require__(26),
	        'v-water-list': __webpack_require__(30),
	        'v-loading': __webpack_require__(41)
	    },
	    watch: {
	        
	    },
	    route: {
	        /**
	         * data 在每次路由变动时都会被调用，即使是当前组件可以被重用的时候
	         *
	         * @param  {Object} transition 路由实例
	         *
	         */
	        data: function (transition) {
	            this.init();
	       }
	    },
	    methods: {
	        init: function () {
	            this.getPoemsType();
	        },

	        /**
	         * getPoemsType 获取对应体裁诗歌列表
	         *
	         */
	        getPoemsType: function () {
	            var me = this;
	            var type = this.$route.params.type;
	            var id;
	            var data = {};
	            // 非首页
	            if (type !== undefined) {
	                id = type_id.getIdOfType(type);
	                data.typeId = id;
	            }
	            $.ajax({
	                url: '/api/poem',
	                type: 'GET',
	                data: data
	            })
	            .done(function(json) {
	                me.$data.loading = 0;
	                var data = json.data;
	                if (json.status === 0 && data.length <= 0) {
	                    swal({
	                        title: '',
	                        text: json.message,
	                        type: 'warning',
	                        confirmButtonText: '跳转到首页'
	                    }, function () {
	                        var url = '/';
	                        router.go(url);
	                    });
	                }
	                var poems = [];
	                data.forEach(function (item, index) {
	                    var poem = {};
	                    poem.title = item.title;
	                    poem.userName = item.userName;
	                    var swicthPoemType = __webpack_require__(47);
	                    poem.typeString = swicthPoemType(item.poem_type);
	                    poem.type = type_id.getTypeOfId(item.poem_type);
	                    poem.poem_time = item.poem_time;
	                    poem.id = item.id;
	                    poem.likes = item.likes;
	                    poem.imgSrc = item.poem_imgSrc;
	                    poem.lines = item.poem_lines;
	                    poems.push(poem);
	                });
	                me.$data.waterdata = poems;
	            })
	            .fail(function() {
	                console.log("error");
	            });
	        }
	    }
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".ui.grid {\n    margin: 0;\n}", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * @File:      type与id相互转换
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-12 14:56:53
	 */
	module.exports = {
	    /**
	         * getIdOfType 根据type判断typeid
	         *
	         * @param  {String} type 是个类型
	         *
	         * @return {Nunber} 返回诗歌类型ID
	         */
	        getIdOfType: function (type) {
	            // 默认是诗
	            var id = 1;
	            switch (type) {
	                case 'poem':
	                    id = 1;
	                    break;
	                case 'speech':
	                    id = 2;
	                    break;
	                case 'pennon':
	                    id = 3;
	                    break;
	            }
	            return id;
	        },

	        /**
	         * getTypeOfId 根据Id返回type字段
	         *
	         * @return {String} 返回type
	         */
	        getTypeOfId: function (id) {
	            // 默认是诗
	            var type = 'poem';
	            switch (id) {
	                case 1:
	                    type = 'poem';
	                    break;
	                case 2:
	                    type = 'speech';
	                    break;
	                case 3:
	                    type = 'pennon';
	                    break;
	            }
	            return type;
	        }
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<v-header></v-header>\n<div id=\"main\" class=\"ui grid water-full\">\n    <v-loading class=\"loading\" v-if=\"loading === 1\"></v-loading>\n    <v-water-list :waterdata=\"waterdata\" v-else></v-water-list>\n</div>\n<v-footer></v-footer>";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      header
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-08-30 15:16:59
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(22);
	var browserRedirect = __webpack_require__(24);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    template: __webpack_require__(25),
	    data: function () {
	        return {
	            isMobiledDevice: true,
	            login: {
	                status: 0,
	                userName: ''
	            }
	        };
	    },
	    events: {
	        
	    },
	    components: {
	        
	    },
	    watch: {
	        
	    },
	    methods: {
	        init: function () {
	            this.$data.isMobiledDevice = browserRedirect.browserRedirect();
	            this.checkLogin();
	            $('.ui.dropdown').dropdown();
	        },

	        /**
	         * checkLogin 检查登陆状态
	         *
	         */
	        checkLogin: function () {
	            var me = this;
	            $.ajax({
	                url: '/api/isLogin',
	                type: 'GET',
	            })
	            .done(function(data) {
	                me.login.status = data.status;
	                me.login.userName = data.data.userName;
	                me.louterForeEach();
	            })
	            .fail(function(error) {
	                console.log(error);
	            });
	        },

	        /**
	         * louterForeEach 登陆控制
	         *
	         */
	        louterForeEach: function () {
	            var status = this.loginUrl();
	            if (this.$data.login.status === 0 && status) {
	                router.go('/login');
	            }
	        },

	        /**
	         * loginUrl 配置需要登陆的页面
	         *
	         */
	        loginUrl: function () {
	            var status = true;
	            switch (router.app.$route.path) {
	                case '/new':
	                    status = false;
	                    break;
	                default: status = true;
	            }
	            return !status;
	        },

	        /**
	         * logout 登出操作
	         *
	         */
	        logout: function () {
	            $.ajax({
	                url: '/api/logout',
	                type: 'POST',
	            })
	            .done(function(data) {
	                swal({
	                    title: '',
	                    text: data.message,
	                    type: 'success'
	                }, function () {
	                    var url = '/';
	                    window.location.href = url;
	                });
	            })
	            .fail(function(error) {
	                swal({
	                    title: '',
	                    text: error,
	                    type: 'error'
	                });
	            });
	        }
	    }
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#header {\n    background-color: #fff;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n    height: 48px;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n    z-index: 9999;\n}\n\n.wrapper {\n    max-width: 100%;\n    width: 80%;\n    height: 48px;\n    margin: 0 auto;\n}\n\n.menu-bar {\n    height: 100%;\n    text-align: center;\n}\n\n.menu-bar > .left-part {\n    float: left;\n    margin-top: 5px;\n}\n\n@keyframes logo_rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n    33.333% {\n        transform: rotate(120deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n#huaxia {\n    float: left;\n    width: 31px;\n    height: 36px;\n    margin-top: 3px;\n    animation: 6.18s ease-out 0s infinite running logo_rotate;\n}\n\n.menu-item {\n    color: #444;\n    margin-left: 25px;\n    line-height: 38px;\n    font-size: 16px;\n}\n\n.menu-bar > .right-part {\n    float: right;\n    margin-top: 5px;\n}\n\n.user img {\n    border-radius: 50%;\n    height: 2em;\n    width: 2em;\n    border: 1px solid rgba(33, 186, 69, 0.58);\n    vertical-align: middle;\n}\n\n.add.icon {\n    font-size: 1.8rem;\n    vertical-align: text-top;\n}", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * @File:      判断是否是设备浏览器
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-12 21:13:52
	 */
	module.exports = {
	    browserRedirect: function() {
	        var sUserAgent = navigator.userAgent.toLowerCase();
	        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	        var bIsAndroid = sUserAgent.match(/android/i) == "android";
	        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
	            return true;
	        } else {
	            return false;
	        }
	    }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = " <header id=\"header\">\n    <div class=\"wrapper\">\n        <div class=\"menu-bar\">\n            <div class=\"left-part\">\n                <a v-link=\"{ path: '/' }\" target=\"_blank\" id=\"huaxia\">\n                    <svg version=\"1.1\" id=\"svg_logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 6.69412 5.87059\" style=\"enable-background:new 0 0 6.69412 5.87059;\" xml:space=\"preserve\">\n                    <g id=\"XMLID_1_\">\n                        <path id=\"XMLID_2_\" style=\"fill:#CE2A28;\" d=\"M4.14058,1.92308c0,1.06209-0.80972,1.92308-0.80972,1.92308\n                            S2.52115,2.98516,2.52115,1.92308S3.33087,0,3.33087,0S4.14058,0.86099,4.14058,1.92308z\"/>\n                        <path id=\"XMLID_4_\" style=\"fill:#32AD46;\" d=\"M4.59144,5.50893C3.67165,4.97788,3.33087,3.84615,3.33087,3.84615\n                            s1.1505-0.27074,2.07029,0.2603s1.26058,1.66277,1.26058,1.66277S5.51124,6.03997,4.59144,5.50893z\"/>\n                        <path id=\"XMLID_3_\" style=\"fill:#217DC1;\" d=\"M2.07029,5.50893c0.91979-0.53104,1.26058-1.66277,1.26058-1.66277\n                            s-1.1505-0.27074-2.07029,0.2603S0,5.76923,0,5.76923S1.1505,6.03997,2.07029,5.50893z\"/>\n                    </g>\n                </a>\n                <a v-link=\"{ path: '/list/poem' }\" target=\"_blank\" class=\"menu-item\">诗</a>\n                <a v-link=\"{ path: '/list/speech' }\" target=\"_blank\" class=\"menu-item\">词</a>\n                <a v-link=\"{ path: '/list/pennon' }\" target=\"_blank\" class=\"menu-item\">赋</a>\n            </div>\n            <div class=\"right-part\">\n                <!-- <button class=\"ui red basic button\">注册</button> -->\n                <a class=\"ui green user\" v-if=\"login.status === 1\">\n                    <img src=\"http://odflit039.bkt.clouddn.com/14737614892742.pic.jpg?imageView2/2/w/110/h/110/interlace/1/q/100\">\n                </a>\n                <template v-if=\"isMobiledDevice\">\n                    <div class=\"ui right dropdown item\" tabindex=\"0\">\n                        <i class=\"add icon\"></i>\n                        <div class=\"menu transition hidden\" tabindex=\"-1\" >\n                            <a class=\"item\" v-link=\"{ path: '/new' }\" v-if=\"login.status === 1\">新增</a>\n                            <a class=\"item\" v-if=\"login.status === 1\" @click=\"logout\">登出</a>\n                        </div>\n                    </div>\n                </template>\n                <template v-else>\n                    <a class=\"ui red basic button\" v-link=\"{ path: '/new' }\" v-if=\"login.status === 1\">新增</a>\n                    <a class=\"ui green basic button\" v-if=\"login.status === 1\" @click=\"logout\">登出</a>\n                </template>\n                <a class=\"ui green basic button\" v-link=\"{ path: '/login' }\" v-if=\"login.status === 0\">登录</a>\n            </div>\n        </div>\n    </div>\n</header>";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      header
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-08-30 15:16:59
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(27);
	module.exports = Vue.extend({
	    ready: function () {
	        
	    },
	    template: __webpack_require__(29),
	    data: function () {
	        return {};
	    },
	    events: {
	        
	    },
	    components: {
	        
	    },
	    watch: {
	        
	    },
	    methods: {
	        
	    }
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "footer {\n    background-color: #1b1c1d;\n    border-top: 9px solid #f2711c;\n    width: 100%;\n    padding-bottom: 20px;\n    position:absolute;\n    left: 0;\n    bottom:0;\n    width:100%;\n}\n#footer .footavatar, #footer .visitor {\n    width: 80%;\n}\n.footavatar {\n    color: #666;\n    margin: auto;\n    position: relative;\n}\n.footphoto {\n    border: 5px solid #f16e50;\n    display: block;\n    left: 20px;\n    position: absolute;\n    top: -46px;\n}\n.footavatar img {\n    height: 110px;\n}\n.footinfo {\n    display: block;\n    padding: 0 0 0 160px;\n    margin: 0;\n}\n.finfo {\n    color: #666;\n}\n.footinfo a {\n    font-size: 16px;\n}\n.footinfo p {\n    margin: 0;\n    font-size: 12px;\n}\n.fname {\n    color: #f16e50;\n    font-size: 18px;\n    line-height: 28px;\n    margin-top: 16px;\n}\n.fname a {\n    color: #f16e50;\n}\n.visitor {\n    border-top: 1px solid #32302e;\n    clear: both;\n    margin: 40px auto 0;\n    overflow: hidden;\n    padding-top: 40px;\n}\n.visitor h2 {\n    color: #fff;\n    font-size: 14px;\n    font-weight: normal;\n    padding: 0 20px;\n}\n.visitor p {\n    padding-left: 10px;\n}\n.visitor p a {\n    padding: 0 10px;\n    font-weight: 200;\n    color: #fff;\n}\n.visitor p a:not(:nth-of-type(1)) {\n    border-left: 1px solid #999;\n}", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">\n    <div class=\"footavatar\">\n        <img class=\"footphoto\" width=\"110\" src=\"http://odflit039.bkt.clouddn.com/14737614892742.pic.jpg?imageView2/2/w/100/h/100/interlace/1/q/100\">\n        <ul class=\"footinfo\">\n            <p class=\"fname\"><a href=\"###\">花夏集</a></p>\n            <p class=\"finfo\">谁立门庭</p>\n            <p>叠指而敲探究竟</p>\n        </ul>\n    </div>\n    <section class=\"visitor\">\n        <p class=\"finfo\">本站所有的诗词赋全部由花夏创作包括站点架构</p>\n        <h2>友情链接</h2>\n        <p>\n            <a href=\"http://fex.onlove.cc\" target=\"_blank\" title=\"前端博客\">前端博客</a>\n            <a href=\"https://github.com/liubiao0810/huaxia\" target=\"_blank\" title=\"gihub\">\n                <i class=\"github icon\"></i>\n            </a>\n            <a href=\"http://www.jianshu.com/collection/a715f58d4849\" title=\"简书\" target=\"_blank\">\n                <i class=\"bookmark icon\"></i>\n            </a>\n            <a href=\"http://pom.liubiao.me\" title=\"乐乎\" target=\"_blank\"><i class=\"smile icon\"></i></a>\n        </p>\n    </section>\n</footer>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      瀑布流list
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-09 21:38:48
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(31);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    props: {
	        waterdata: []
	    },
	    template: __webpack_require__(33),
	    data: function () {
	        return {};
	    },
	    events: {
	        
	    },
	    components: {
	        'v-water-box': __webpack_require__(34)
	    },
	    watch: {

	    },
	    methods: {
	        init: function () {
	            
	        }
	    }
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"brand-list clearfix\">\n    <v-water-box :waterboxdata=\"item\" v-for=\"item in waterdata\" class=\"brand-bd cle\"></v-water-box>\n</div>";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      water box组件
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-10 19:09:50
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(35);
	__webpack_require__(37);
	__webpack_require__(39);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    props: {
	        waterboxdata: {}
	    },
	    template: __webpack_require__(40),
	    data: function () {
	        return {
	        };
	    },
	    events: {
	        
	    },
	    components: {
	        
	    },
	    watch: {
	    },
	    methods: {
	        init: function () {
	            $('.water-full').cascade();
	            $(window).trigger('resize.cascade');
	        }
	    }
	});

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#main {\n    position: relative;\n}\n#main a.image {\n    margin-top: 40px;\n    border-radius: 0!important;\n}\nimg.image {\n    border: 1px solid #d4d4d4;\n}\n.ui.card {\n    margin: 0;\n}\n.heart-span {\n    margin: 5px 0 0 5px;\n}\n.content.ui > .ui.feed {\n    padding: 18px;\n}", ""]);

	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(38);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./cascade.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./cascade.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".clear {clear:both; height:0; font-size:0; line-height:0; overflow:hidden;}\n.cle:after, .clearfix:after, .clear_f:after, .cle_float:after{content:\".\";display:block;height:0;clear:both;visibility:hidden}\n.cle, .clearfix, .clear_f, .cle_float{zoom:1}\n.fl {float:left;}\n.fr {float:right;}\n/*品牌列表*/\n.brand-list{ margin-left: -10px;}\n.brand-list .brand-bd{position: relative; margin-left: 10px;}\n.brand-list .item,.brand-list .additem{position: absolute; background-color: #f8f8f8; border: 1px solid #f8f8f8; top:0; left: 40%; -webkit-transition: all 0.3s;-moz-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;transition: all 0.3s;}\n.brand-list .hover{box-shadow: 0px 1px 8px rgba(200,200,200,.6); background-color: #fff; border-color: #c8c8c8;}\n.brand-list .additem{padding: 0; width: 240px; border: none; }\n\n.brand-list .item h3{font-size: 42px; color: #666; font-family: arial; font-weight: bold; line-height: .8; margin-bottom: 20px;}\n.brand-list .item p{margin-bottom: 15px;}", ""]);

	// exports


/***/ },
/* 39 */
/***/ function(module, exports) {

	!function($){
	    var Cascade = function(element, options){
	        this.init('cascade', element, options);
	    }

	    Cascade.prototype = {
	        constructor: Cascade
	      , init: function(type, element, options){
	            this.type = type;
	            this.$element = $(element);
	            this.options=this.getOptions(options);
	            this.layout();
	      }
	      , getOptions: function(options){
	            options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options);
	            return options;
	      }
	      , layout: function(){
	            $('.additem').remove();
	            this.item();
	            this.endDecorate();
	            this.box();
	      }
	      , item: function(){
	            var $box = this.$element
	              , _coord = []
	              , _num = 0
	              , _options=this.options
	              , i = 0
	              , $items = $box.find(this.options.fallsCss)
	              , fallsWidth = $items.eq(0).outerWidth() + this.options.margin
	              , boxWidth = $box.outerWidth() + this.options.margin
	              , _autoWidth = 0;

	              _num = Math.floor(boxWidth/fallsWidth);
	              _autoWidth = (boxWidth - _num * fallsWidth) / 2;
	              for(; i < _num; i++){
	                _coord.push([i * fallsWidth, 0]);
	              }
	              
	              $items.each(function(){
	                var $item = $(this)
	                  , fallsHeight = $item.outerHeight() + _options.margin
	                  , temp=0;

	                 for(i=0; i < _num; i++){
	                    if(_coord[i][1] < _coord[temp][1]){
	                        temp = i;
	                    }
	                 }

	                $item.stop().animate({
	                    left: _coord[temp][0] + _autoWidth + 'px',
	                    top: _coord[temp][1] + 'px'
	                })

	                _coord[temp][1] += fallsHeight;


	                $item.on('mouseenter' + '.' + _options.type, function(){
	                    $(this).addClass('hover');
	                })
	                $item.on('mouseleave' + '.' + _options.type, function(){
	                    $(this).removeClass('hover');
	                })
	              });

	              this.coord = _coord;
	              this.num = _num;
	              this.autoWidth = _autoWidth;
	      }
	      , box: function(){
	            this.$element.height(this.getFallsMaxHeight());
	      }
	      , endDecorate: function(){
	            var _coord = this.coord
	              , i = 0
	              , _num = this.num
	              , fallsMaxHeight = this.getFallsMaxHeight()
	              , falls = document.createElement('div')
	              , fallsClone
	              , fallsHeight = 0;

	              falls.className = 'additem';
	              for(; i < _num; i++){
	                if(fallsMaxHeight != _coord[i][1]){
	                    fallsClone = falls.cloneNode();
	                    fallsHeight = fallsMaxHeight - this.options.margin - _coord[i][1];
	                    // fallsClone.style.cssText = 'left: ' + _coord[i][0] + 'px; ' + 'top: ' + _coord[i][1] + 'px; height: ' + fallsHeight + 'px;';
	                    
	                    this.$element.append($(fallsClone).stop().animate({
	                        left: _coord[i][0] + this.autoWidth + 'px',
	                        top: _coord[i][1] + 'px',
	                        height: fallsHeight + 'px'
	                    }));

	                }
	              }
	      }
	      , getFallsMaxHeight: function(){
	            var maxHeight = 0
	              , i =0
	              , heightArry = []
	              , _coord = this.coord
	              , _num = this.num;

	             for(; i < _num; i++){
	                heightArry.push(_coord[i][1]);
	             }

	             heightArry.sort(function(a, b){
	                return a - b;
	             });
	             return heightArry[_num-1];
	      }
	    }

	    var old = $.fn.cascade;

	    $.fn.cascade = function(option){
	        return this.each(function(){
	            var $this = $(this)
	              , data = $this.data('cascade')
	              , options = typeof option == 'object' && option;
	            if(!data){
	                $this.data('cascade', data = new Cascade(this, options));
	                $(window).on('resize.cascade', function(){
	                    data['layout']();
	                });
	            }
	            if(typeof option == 'string'){
	                data[option]();
	            }
	        });
	    }

	    $.fn.cascade.Constructor = Cascade;

	    $.fn.cascade.defaults = {
	        fallsCss: '.item',
	        margin: 15

	    }

	    $.fn.cascade.noConflict = function(){
	        $.fn.cascade = old;
	        return this;
	    }


	}(window.jQuery);

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui card item\">\n    <a class=\"image\" v-if=\"!!waterboxdata.imgSrc\" v-link=\"{ path: '/p/' + waterboxdata.id }\" target=\"_blank\">\n        <img :src=\"waterboxdata.imgSrc\" class=\"ui wireframe image\">\n    </a>\n    <div class=\"content ui\">\n        <h4 class=\"ui top left attached label\">\n            <a v-link=\"{ path: '/p/' + waterboxdata.id }\" target=\"_blank\">{{waterboxdata.title}}</a>\n        </h4>\n        <div class=\"ui small feed\">\n            <div class=\"event\">\n                <div class=\"content\">\n                    <p class=\"description\" v-for=\"item in waterboxdata.lines\">{{item}}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"content\">\n        <div class=\"right floated meta\">\n            {{waterboxdata.poem_time}}\n        </div>\n        <img src=\"http://odflit039.bkt.clouddn.com/14737614892742.pic.jpg?imageView2/2/w/110/h/110/interlace/1/q/100\" class=\"ui avatar image\">\n        <span>{{waterboxdata.userName}}</span>\n        <div>\n            <span class=\"left floated heart-span\">\n                <i class=\"heart like icon\"></i>\n                <span>{{waterboxdata.likes || 0}}</span>\n            </span>\n        </div>\n    </div>\n    <div class=\"ui top right attached label\">\n        <a v-link=\"{ path: '/list/' + waterboxdata.type }\" target=\"_blank\">\n            <i class=\"book icon\"></i>\n            {{waterboxdata.typeString}}\n        </a>\n    </div>\n</div>";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      loading
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-09 21:14:21
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(42);
	__webpack_require__(44);
	module.exports = Vue.extend({
	    ready: function () {
	        
	    },
	    template: __webpack_require__(46),
	    data: function () {
	        return {
	        };
	    },
	    events: {
	        
	    },
	    components: {
	        
	    },
	    watch: {
	        
	    },
	    methods: {
	        
	    }
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".loading {\n    margin: 0 auto;\n}\n.loading-text {\n    color: #21ba45;\n    left: -13px;\n    position: absolute;\n    top: 25px;\n    width: 60px;\n    font-weight: 200;\n}", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./zzsc.css", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./zzsc.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "*{\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n}\nh1 span{\n    font-size: 30px;\n}\n\na{\n    text-decoration: none;\n}\na:hover{\n    transition: all linear 0.2s;\n}\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n.span, .span_large{\n    float: left;\n    width: 100px;\n    background-color: rgba(0,0,0, 0.02);\n    height: 100px;\n    vertical-align: middle;\n    border-radius: 1px;\n    margin-right: 100px;\n}\n.span:last-child{\n    margin-right: 0px;\n}\n\n/* Timer*/\n.timer{\n    width: 24px;\n    height: 24px;\n    background-color: transparent;\n    box-shadow: inset 0px 0px 0px 2px #fff;\n    border-radius: 50%;\n    position: relative;\n    margin: 38px auto;/* Not necessary- its only for layouting*/    \n }\n.timer:after, .timer:before{\n    position: absolute;\n    content:\"\";\n    background-color: #fff;\n}\n.timer:after{\n    width: 10px;\n    height: 2px;\n    top: 11px;\n    left: 11px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    -webkit-animation: minhand 2s linear infinite;\n       -moz-animation: minhand 2s linear infinite;\n            animation: minhand 2s linear infinite;\n}\n\n.timer:before{\n    width: 8px;\n    height: 2px;\n    top: 11px;\n    left: 11px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    -webkit-animation: hrhand 8s linear infinite;\n       -moz-animation: hrhand 8s linear infinite;\n            animation: hrhand 8s linear infinite;\n}\n\n@-webkit-keyframes minhand{\n    0%{-webkit-transform:rotate(0deg)}\n    100%{-webkit-transform:rotate(360deg)}\n}\n@-moz-keyframes minhand{\n    0%{-moz-transform:rotate(0deg)}\n    100%{-moz-transform:rotate(360deg)}\n}\n@keyframes minhand{\n    0%{transform:rotate(0deg)}\n    100%{transform:rotate(360deg)}\n}\n\n@-webkit-keyframes hrhand{\n    0%{-webkit-transform:rotate(0deg)}\n    100%{-webkit-transform:rotate(360deg)}\n}\n@-moz-keyframes hrhand{\n    0%{-moz-transform:rotate(0deg)}\n    100%{-moz-transform:rotate(360deg)}\n}\n@keyframes hrhand{\n    0%{transform:rotate(0deg)}\n    100%{transform:rotate(360deg)}\n}\n\n/*Typing Loader*/\n.typing_loader{\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    -webkit-animation: typing 1s linear infinite alternate;\n       -moz-animation: Typing 1s linear infinite alternate;\n            animation: typing 1s linear infinite alternate;\n    margin: 46px auto; /* Not necessary- its only for layouting*/  \n    position: relative;\n    left: -12px;\n}\n@-webkit-keyframes typing{\n    0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n@-moz-keyframes typing{\n   0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n@keyframes typing{\n   0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n/*Location indicator */\n.location_indicator{\n    margin: 30px auto;\n    position: relative;\n    left: -9px;\n}\n\n.location_indicator:before, .location_indicator:after{\n    position: absolute;\n    content: \"\";\n}\n\n.location_indicator:before{\n    width: 20px;\n    height: 20px;\n    border-radius: 100% 100% 100% 0;\n    box-shadow: 0px 0px 0px 2px rgba(255,255,255,1);\n    -webkit-animation: mapping 1s linear infinite;\n       -moz-animation: mapping 1s linear infinite;\n            animation: mapping 1s linear infinite;\n    -webkit-transform: rotate(-46deg);\n       -moz-transform: rotate(-46deg);\n            transform: rotate(-46deg);\n\n}\n\n.location_indicator:after{\n    width: 30px;\n    height: 10px;\n    border-radius: 100%;\n    left: 44px;\n    background-color: rgba(255, 255, 255, 0.2);\n    top: 24px;\n    z-index: -1;\n}\n\n@-webkit-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n@-moz-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n@-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n\n/* go in*/\n.dashboard{\n    width: 32px;\n    height: 32px;\n    margin: 30px auto;\n    border: 2px rgba(255,255,255,1) solid;\n    border-radius: 100%;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n.dashboard:after, .dashboard:before{\n    position: absolute;\n    content: \"\";\n}\n.dashboard:after{\n    width:14px;\n    height: 2px;\n    top: 20px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    background-color: rgba(255,255,255,1);\n    -webkit-animation: dashboard_hand 2s linear infinite alternate;\n       -moz-animation: dashboard_hand 2s linear infinite alternate;\n            animation: dashboard_hand 2s linear infinite alternate;\n}\n.dashboard:before{\n    width: 32px;\n    height: 10px;\n    background-color: rgba(255,255,255,1);\n    top:20px;\n    left: -2px;\n}\n@-webkit-keyframes dashboard_hand{\n    0%{ -webkit-transform: rotate(-160deg);}\n    100%{ -webkit-transform: rotate(-20deg);}\n}\n@-moz-keyframes dashboard_hand{\n    0%{ -moz-transform: rotate(-160deg);}\n    100%{ -moz-transform: rotate(-20deg);}\n}\n@keyframes dashboard_hand{\n    0%{ transform: rotate(-160deg);}\n    100%{ transform: rotate(-20deg);}\n}\n\n/*Battery*/\n.battery{\n    width: 28px;\n    height: 14px;\n    border: 1px #fff solid;\n    border-radius: 2px;\n    position: relative;\n    -webkit-animation: charge 5s linear infinite;\n       -moz-animation: charge 5s linear infinite;\n            animation: charge 5s linear infinite;\n    top: 40px;\n    margin: 0 auto;\n}\n.battery:after{\n    width: 2px;\n    height: 7px;\n    background-color: #fff;\n    border-radius: 0px 1px 1px 0px;\n    position: absolute;\n    content: \"\";\n    top: 2px;\n    right: -4px;\n}\n@-webkit-keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n@-moz-keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n@keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n\n.magnifier{\n    width: 20px;\n    height: 20px;\n    box-shadow: 0px 0px 0px 1px #fff;\n    border-radius: 50%;\n    position: relative;\n    margin: 34px auto;\n    -webkit-animation: magnify 1s linear infinite alternate;\n       -moz-animation: magnify 1s linear infinite alternate;\n            animation: magnify 1s linear infinite alternate;\n}\n.magnifier:after, .magnifier:before{\n    position: absolute;\n    content: \"\";\n}\n.magnifier:before{\n    content: \"me\";\n    font-size: 12px;\n    left: 2px;\n    text-align: center;\n    top: 2px;\n}\n.magnifier:after{\n    width: 2px;\n    height: 8px;\n    background-color: #fff;\n    bottom: -6px;\n    left: 20px;\n    border-radius: 2px;\n    -webkit-transform: rotate(-45deg);\n       -moz-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n@-webkit-keyframes magnify{\n    0%{-webkit-transform: scale(1); }\n    100%{-webkit-transform: scale(1.5);}\n}\n@-moz-keyframes magnify{\n    0%{-moz-transform: scale(1); }\n    100%{-moz-transform: scale(1.5);}\n}\n@keyframes magnify{\n    0%{transform: scale(1); }\n    100%{transform: scale(1.5);}\n}\n\n/*help ��ͷ�� www.datouwang.com */\n.help{\n    width: 30px;\n    height: 30px;\n    border: 1px #fff solid;\n    border-radius: 50%;\n    -webkit-animation: rotation 1s ease-in-out infinite;\n       -moz-animation: rotation 1s ease-in-out infinite;\n            animation: rotation 1s ease-in-out infinite;\n    margin: 30px auto;\n}\n.help:after{\n    width: 5px;\n    height: 5px;\n    background-color: rgba(255,255,255,1);\n    border-radius: 100%;\n    position: absolute;\n    content: \"\";\n}\n@-webkit-keyframes rotation{\n    0%{-webkit-transform: rotate(0deg);}\n    100%{-webkit-transform: rotate(360deg);}\n}\n@-moz-keyframes rotation{\n    0%{-moz-transform: rotate(0deg);}\n    100%{-moz-transform: rotate(360deg);}\n}\n@keyframes rotation{\n    0%{transform: rotate(0deg);}\n    100%{transform: rotate(360deg);}\n}\n\n/*eye ball*/\n.eye{\n    width: 20px;\n    height: 20px;\n    background-color: rgba(255,255,255,0.8);\n    border-radius: 50%;\n    box-shadow: 30px 0px 0px 0px rgba(255,255,255,0.8);\n    position: relative;\n    margin: 36px 26px;\n}\n\n.eye:after{\n    background-color: #59488b;\n    width: 10px;\n    height: 10px;\n    box-shadow: 30px 0px 0px 0px #59488b;\n    border-radius: 50%;\n    left: 9px;\n    top: 8px;\n    position: absolute;\n    content: \"\";\n    -webkit-animation: eyeball 2s linear infinite alternate;\n       -moz-animation: eyeball 2s linear infinite alternate;\n            animation: eyeball 2s linear infinite alternate;\n}\n@-webkit-keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n@-moz-keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n@keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n\n/*coffee cup*/\n.coffee_cup{\n    width: 20px;\n    height: 24px;\n    border: 1px #21ba45 solid;\n    border-radius: 0px 0px 5px 5px;\n    position: relative;\n    margin: 36px auto;\n}\n.coffee_cup:after, .coffee_cup:before{\n    position: absolute;\n    content: \"\";\n}\n.coffee_cup:after{\n    width: 5px;\n    height: 12px;\n    border: 1px #21ba45 solid;\n    border-left: none;\n    border-radius: 0px 20px 20px 0px;\n    left: 20px;\n}\n.coffee_cup:before{\n    width: 1px;\n    height: 6px;\n    background-color: #21ba45;\n    top: -10px;\n    left: 4px;\n    box-shadow: 5px 0px 0px 0px #21ba45,\n                5px -5px 0px 0px #21ba45,\n                10px 0px 0px 0px #21ba45;\n    -webkit-animation: steam 1s linear infinite alternate;\n       -moz-animation: steam 1s linear infinite alternate;\n            animation: steam 1s linear infinite alternate;\n}\n\n@-webkit-keyframes steam{\n    0%{height: 0px;}\n    100%{height: 6px;}            \n}\n@-moz-keyframes steam{\n    0%{height: 0px}\n    100%{height: 6px;}            \n}\n@keyframes steam{\n    0%{height: 0px}\n    100%{height: 6px;}            \n}\n\n/*square*/\n.square{\n    width: 20px;\n    height: 20px;\n    border:1px  rgba(255,255,255,1) solid;\n    margin: 36px auto;\n    position: relative;\n    -webkit-animation: fill_color 5s linear infinite;\n       -moz-animation: fill_color 5s linear infinite;\n            animation: fill_color 5s linear infinite;\n}\n.square:after{\n    width: 4px;\n    height: 4px;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(255,255,255,1);\n    top: -8px;\n    left: 0px;\n    -webkit-animation: square_check 1s ease-in-out infinite;\n       -moz-animation: square_check 1s ease-in-out infinite;\n            animation: square_check 1s ease-in-out infinite;\n}\n\n@-webkit-keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@-moz-keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@-webkit-keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n@-moz-keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n@keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n/*circle classick*/\n.circle{\n    margin: 40px auto;\n    position: relative;\n    width: 8px;\n    height: 8px;\n    background-color: rgba(255,255,255,.5);;\n    box-shadow: -14px 0px 0px rgba(255,255,255,1);\n    border-radius: 50%;\n    -webkit-animation: circle_classic 1s ease-in-out infinite alternate;\n       -moz-animation: circle_classic 1s ease-in-out infinite alternate;\n            animation: circle_classic 1s ease-in-out infinite alternate;\n}\n\n@-webkit-keyframes circle_classic{\n    0%{ opacity: 0.1; -webkit-transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; -webkit-transform: rotate(360deg) scale(1.2);}   \n}\n@-moz-keyframes circle_classic{\n    0%{ opacity: 0.1; -moz-transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; -moz-transform: rotate(360deg) scale(1.2);}   \n}\n@keyframes circle_classic{\n    0%{ opacity: 0.1; transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; transform: rotate(360deg) scale(1.2);}   \n}\n\n/*cloud*/\n\n.cloud{\n    margin: 42px 30px;\n    width: 4px;\n    height: 10px;\n    opacity: 0.5;\n    position: relative;\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,1),\n                18px 0px 0px 0px rgba(255,255,255,1),\n                24px 0px 0px 0px rgba(255,255,255,1),\n                30px 0px 0px 0px rgba(255,255,255,1),\n                36px 0px 0px 0px rgba(255,255,255,1);\n    \n    -webkit-animation: rain 1s linear infinite alternate;\n       -moz-animation: rain 1s linear infinite alternate;\n            animation: rain 1s linear infinite alternate;\n}\n.cloud:after{\n    width: 40px;\n    height: 10px;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(255,255,255,1);\n    top: 0px;\n    opacity: 1;\n    -webkit-animation: line_flow 2s linear infinite reverse;\n       -moz-animation: line_flow 2s linear infinite reverse;\n            animation: line_flow 2s linear infinite reverse;\n}\n\n@-webkit-keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n@-moz-keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n@keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n@-moz-keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n@keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n\n/* Me */\n\n.aboutme{\n    width: 700px;\n    padding: 50px 0;\n    border-top: 2px rgba(255,255,255,0.03) solid;\n}\n\n.viduthalai{\n    /*background: url(../img/viduthalai.png) no-repeat;*/\n    width: 100px;\n    height: 100px;\n    border-radius: 0 2px 2px 0;\n    float: left;\n    opacity: 0.5;\n}\n.viduthalai:hover{\n    opacity: 1;\n}\n.intro{\n    float: left;\n    width: 400px;\n    padding-left: 20px;\n    color: rgba(255,255,255,0.5);\n}\n.intro a{\n    color: rgba(255,255,255,0.5);\n}\n.intro a:hover{\n    color: rgba(255,255,255,1);\n}\n\n.intro span, p{\n    font-size: 15px;\n    font-weight: 200;\n}\n.intro h3{\n    font-size: 20px;\n    font-weight: 200;\n    margin: 0px;\n}\n.git{\n    color: rgba(255,255,255,0.5);\n    float: right;\n    text-align: right;\n    padding: 10px 20px;\n    border-radius: 2px;\n    background-color: rgba(0,0,0,0.3);\n    font-weight: 200;\n}\n.git:hover{\n     background-color: rgba(0,0,0,0.2);\n}", ""]);

	// exports


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"loading\">\n    <div class=\"coffee_cup\">\n        <span class=\"loading-text\">加载中...</span>\n    </div>\n</div>";

/***/ },
/* 47 */
/***/ function(module, exports) {

	/**
	 * swicthPoemType 根据code返回类型
	 *
	 * @return {String} 返回类型
	 */
	module.exports = function (i) {
	    var type = '诗';
	     switch (i) {
	        case 1:
	            type = '诗';
	            break;
	        case 2:
	            type = '词';
	            break;
	        case 3:
	            type = '赋';
	            break;
	    }
	    return type;
	}


/***/ }
]);