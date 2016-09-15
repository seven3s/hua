webpackJsonp([3],Array(21).concat([
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
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
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
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      新增页面
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-06-05 19:35:07
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(55);
	var numToCn = __webpack_require__(57);
	var rule = __webpack_require__(58);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	        this.date();
	    },
	    template: __webpack_require__(59),
	    data: function () {
	        return {
	            poem_title: '', // 文题
	            genres: {
	                inputName: 'poem_genres', // 选择的name字段
	                defaultText: '请选择', // 默认请选择
	                checkedData: '', // 默认选中value值
	                data: [
	                    {
	                        text: '请选择',
	                        value: ''
	                    },
	                    {
	                        text: '诗',
	                        value: 1
	                    },
	                    {
	                        text: '词',
	                        value: 2
	                    },
	                    {
	                        text: '赋',
	                        value: 3
	                    }
	                ]
	            },
	            poem_time: '', // 创作时间
	            initLineNum: 4, // 初始行数
	            newLines: [
	                {
	                    title: '壹',
	                    value: ''
	                },
	                {
	                    title: '贰',
	                    value: ''
	                },
	                {
	                    title: '叁',
	                    value: ''
	                },
	                {
	                    title: '肆',
	                    value: ''
	                }
	            ],
	            picobj: {
	                state: 0,
	                src: 'http://odflit039.bkt.clouddn.com/o_1asjud1su1nft13js1prps14hrl9image.png'
	            }
	        };
	    },
	    events: {

	    },
	    components: {
	        'v-select': __webpack_require__(60),
	        'v-upload': __webpack_require__(64),
	        'v-header': __webpack_require__(21),
	        'v-footer': __webpack_require__(26)
	    },
	    watch: {
	        // newLines: {
	        //     handler: function () {
	        //         this.validation();
	        //     },
	        //     deep: true
	        // }
	        picobj: {
	            handler: function (val) {
	                // 获取上传组件传回的图片src
	                this.$data.picobj.src = val.src;
	            },
	            deep: true
	        }
	    },
	    methods: {
	        init: function () {
	            var me = this;
	            $('[name = poem-form]').form({
	                fields:    rule,
	                inline:    true,
	                istoday: false,
	                on:        'submit',
	                onSuccess: function () {
	                    var validate = me.validation();
	                    // 所有验证通过则提交数据并保存
	                    if (validate) {
	                        me.post();
	                    }
	                }
	            });
	        },
	        /**
	         * date 初始化日期组件
	         *
	         */
	        date: function () {
	            var me = this;
	            laydate({
	                elem:     '#poem_time',
	                format:   'YYYY-MM-DD', // 分隔符可以任意定义，该例子表示只显示年月
	                festival: true, //显示节日
	                choose:   function(datas){
	                    //选择日期完毕的回调
	                    me.poem_time = datas;
	                }
	            });
	        },

	        /**
	         * newLine 新增一联
	         *
	         */
	        newLine: function () {
	            var initLineNum  = this.$data.initLineNum;
	            var newLineNum   = initLineNum - 4;
	            var cnNewLineNum = ++newLineNum + 4;
	            if (cnNewLineNum >= 69) {
	                swal({
	                    title: '',
	                    text: '不能再添加了哦~~',
	                    type: 'error'
	                });
	                return;
	            }
	            this.$data.initLineNum = cnNewLineNum;
	            var cn = numToCn.get(cnNewLineNum);
	            var obj = {
	                title: cn,
	                value: ''
	            }
	            this.$data.newLines.push(obj);
	        },

	        /**
	         * delLine 删除一联
	         *
	         */
	        delLine: function () {
	            var cnNewLineNum = this.$data.initLineNum;
	            var newLineNum   = cnNewLineNum - 4;
	            if (newLineNum === 0) {
	                swal({
	                    title: '',
	                    text: '不能再删除了哦~~',
	                    type: 'warning'
	                });
	                return;
	            }
	            var len = this.$data.newLines.length;
	            this.$data.newLines.splice(len - 1, len);
	            this.$data.initLineNum = this.$data.newLines.length;
	        },

	        /**
	         * validation 自定义校验每一行
	         *
	         */
	        validation: function () {
	            var data = this.$data.newLines;
	            var validateNum = 0;
	            data.forEach(function (item, index) {
	                if (!item.value && (item.value !== 0 || item.value !== '0')) {
	                    var errEl = $('.ui.segment.field').eq(index).find('.prompt.label');
	                    if (errEl.length <= 0) {
	                        $('.ui.segment.field').eq(index).append('<div class="ui basic red pointing prompt label transition visible">再想想又是一好辞！</div>');
	                    }
	                    validateNum++;
	                }else {
	                    $('.ui.segment.field').eq(index).find('.prompt.label').remove();
	                }
	            });
	            return validateNum <= 0;
	        },

	        /**
	         * post 保存数据
	         *
	         */
	        post: function () {
	            var poem_title = this.$data.poem_title;
	            var poem_time = this.$data.poem_time;
	            var poem_type = this.$data.genres.checkedData;
	            var poem_lines = [];
	            var poem_imgSrc = '';
	            var picobj = this.$data.picobj;
	            if (picobj.state === 1) {
	                poem_imgSrc = picobj.src;
	            }
	            this.$data.newLines.forEach(function (item) {
	                poem_lines.push(item.value);
	            });
	            var data = {
	                poem_title: poem_title,
	                poem_time:  poem_time,
	                poem_type:  poem_type,
	                poem_lines: poem_lines,
	                poem_imgSrc: poem_imgSrc
	            };
	            $.ajax({
	                url: '/api/save/poem',
	                type: 'POST',
	                data: data,
	            })
	            .done(function(data) {
	                swal({
	                    title: '',
	                    text: data.message,
	                    type: 'success'
	                }, function () {
	                    var url = '/p/' + data.data.id;
	                    router.go(url);
	                });
	            })
	            .fail(function() {
	                console.log("error");
	            });
	        }
	    }
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(56);
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#main {\n    width: 80%;\n    margin: 0 auto;\n    padding: 0 1.5%;\n}\n#main > .header {\n    padding: 0 18px;\n}\n.segment > div.input {\n    width: 90%;\n    float: right;\n    margin-top: -5px;\n}\n.segment > .button {\n    font-size: 12px;\n    font-weight: 400;\n}\n#submit {\n    float: right;\n    margin-right: 11px;\n}\n/*重置laydate样式*/\n#laydate_box * {\n    box-sizing: initial!important;\n}\n#laydate_YY {\n    margin-right: 0;\n}\n#laydate_MM {\n    float: right;\n}\n#app {\n    position: relative;\n    padding-top: 70px;\n    padding-bottom: 350px;\n    min-height:100%\n}\n/*重置laydate样式end*/\n.field > .prompt {\n    float: right;\n}\n.poem-title > .ui.label.prompt,\n.poem-genres > .ui.label.prompt {\n    margin-right: 45px;\n}\n.ui.input {\n    width: 64%;\n}\n#main .ui > .column > .label {\n    width: auto;\n}\n@media screen and (max-width: 810px) {\n    #main {\n        width: 80%;\n    }\n    #app .mobile > div {\n        display: block;\n        width: 100%;\n    }\n    .segment > div.input {\n        width: 71%;\n    }\n}\n.ui > .column > .label {\n    width: 5rem;\n}", ""]);

	// exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * @File:      数字转换为大写
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-08-31 19:11:34
	 */
	var object = {
	    get: function (num) {
	        // 转换为数字
	        var num = num - 0;
	        if (num > 1000000000000000000) {
	            alert("您输入的数字太大，重新输入！");
	            return;
	        }
	        num += '';
	        num = num.split('').reverse();
	        var len = num.length;
	        var monval = "";
	        var bitSignificance = '';
	        var firstNum = '';
	        for (var i = 0; i < len; i++) {
	            bitSignificance = num[i] != 0 ? this.to_mon(i) : '';
	            firstNum = num[i] != 0 ? this.to_upper(num[i]) : '';
	            monval = monval + bitSignificance + firstNum;
	        }
	        monval = monval.split('').reverse().join('');
	        return monval;
	    },

	    /**
	     * to_upper 转换数字
	     *
	     * @param  {Number} a 数字
	     *
	     * @return {String}   返回转换后的数字
	     */
	    to_upper: function(a) {
	        switch (a) {
	            case '0':
	                return '零';
	                break;
	            case '1':
	                return '壹';
	                break;
	            case '2':
	                return '贰';
	                break;
	            case '3':
	                return '叁';
	                break;
	            case '4':
	                return '肆';
	                break;
	            case '5':
	                return '伍';
	                break;
	            case '6':
	                return '陆';
	                break;
	            case '7':
	                return '柒';
	                break;
	            case '8':
	                return '捌';
	                break;
	            case '9':
	                return '玖';
	                break;
	            default:
	                return '';
	        }
	    },

	    /**
	     * to_mon 转换位数
	     *
	     * @param  {Number} a 位数
	     *
	     * @return {String} 返回转换后的位数
	     */
	    to_mon: function(a) {
	        switch (a) {
	            case 1:
	                return '拾';
	                break;
	            case 2:
	                return '佰';
	                break;
	            case 3:
	                return '仟';
	                break;
	            default:
	                return '';
	                break;
	        }
	    }
	};
	module.exports = object;

/***/ },
/* 58 */
/***/ function(module, exports) {

	/**
	 * @File:      规则配置
	 * @Author:    花夏(v_liubiao01@baidu.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-01 16:42:52
	 */
	module.exports = {
	    // 文题校验规则
	    poem_title: {
	        identifier: 'poem_title',
	        rules: [
	            {
	                type:   'empty',
	                prompt: '好题配好辞！'
	            }
	        ]
	    },
	    // 体裁校验规则
	    poem_genres: {
	        identifier: 'poem_genres',
	        rules: [
	            {
	                type:   'empty',
	                prompt: '请归下类目吧！'
	            }
	        ]
	    },
	    poem: {
	        identifier: 'poem',
	        rules: [
	            {
	                type:   'empty',
	                prompt: '再想想又是一好辞'
	            }
	        ]
	    }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "<v-header></v-header>\n<div id=\"main\" name=\"poem-form\">\n    <div class=\"ui three column grid mobile\">\n        <div class=\"column field poem-title\">\n            <span class=\"ui horizontal label\">文题</span>\n            <div class=\"ui input\">\n                <input type=\"text\" placeholder=\"请输入文题\" name=\"poem_title\" v-model=\"poem_title\"/>\n            </div>\n        </div>\n        <div class=\"column field\">\n            <span class=\"ui horizontal label\">创作时间</span>\n            <div class=\"ui input\">\n                <input type=\"text\" id=\"poem_time\" placeholder=\"输入创作时间\" v-model=\"poem_time\"/>\n            </div>\n        </div>\n        <div class=\"column field poem-genres\">\n            <span class=\"ui horizontal label\">体裁</span>\n            <v-select :selectobj.sync=\"genres\"></v-select>\n        </div>\n    </div>\n    <v-upload :picobj.sync=\"picobj\"></v-upload>\n    <div class=\"ui segments piled\">\n        <div class=\"ui segment field clearfix\" v-for=\"item in newLines\">\n            <span class=\"ui ribbon label\">第{{item.title}}联</span>\n            <div class=\"ui input\">\n                <input type=\"text\" placeholder=\"请输入第{{item.title}}联\" v-model=\"item.value\">\n            </div>\n        </div>\n        <div class=\"ui segment\">\n            <button class=\"ui red button compact\" @click=\"delLine\">删一联</button>\n            <button class=\"ui green button compact\" @click=\"newLine\">增一联</button>\n            <button class=\"ui green button compact submit\" id=\"submit\">发布</button>\n        </div>\n    </div>\n</div>\n<v-footer></v-footer>";

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      select组件
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-06-01 17:19:58
	 */
	__webpack_require__(61);
	var Vue = __webpack_require__(1);
	module.exports = Vue.extend({
	    ready: function () {
	        me = this;
	        me.init();
	    },
	    template: __webpack_require__(63),
	    data: function () {
	        return {
	            checkedData: ''
	        };
	    },
	    watch: {
	        // 监听当前选中项
	        checkedData: {
	            handler: function (val, oldVal) {
	                this.selectobj.checkedData = val;
	            }
	        },
	        selectobj: {
	            handler: function (val, oldVal) {
	                // 监听变化，如果是-1则做重置
	                if (val.checkedData === '') {
	                    this.rest();
	                }
	            },
	            deep: true
	        }
	    },
	    props: {
	        selectobj: {}
	    },
	    components: {
	    },
	    events: {},
	    methods: {
	        init: function () {
	            $('.dropdown').dropdown({
	                // 你可以使用任何过渡
	                transition: 'slide down'
	            });
	        },

	        /**
	         * rest semantic-ui中没有重置默认选中文字，所以简单做一个
	         *
	         */
	        rest: function () {
	            var defaultText = this.selectobj.defaultText;
	            $('.selection.dropdown > .text').text(defaultText).addClass('default');
	        }
	    }
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(62);
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".ui.selection.dropdown {\n    min-width: 11.36rem;\n}\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n    .ui.selection.dropdown {\n        min-width: 11.58rem;\n    }\n}", ""]);

	// exports


/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui selection dropdown\">\n    <input name=\"{{selectobj.inputName}}\" type=\"hidden\" value=\"{{selectobj.checked}}\" v-model=\"checkedData\">\n    <i class=\"dropdown icon\"></i>\n    <div class=\"default text\">{{selectobj.defaultText}}</div>\n    <div class=\"menu\">\n        <div class=\"item\" data-value=\"{{item.value}}\" data-text=\"{{item.text}}\" v-for=\"item in selectobj.data\">\n            {{item.text}}\n        </div>\n    </div>\n</div>";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      上传组件
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-13 15:52:19
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(65);
	var config = __webpack_require__(67);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    template: __webpack_require__(68),
	    data: function () {
	        var srcobj = JSON.stringify(config.srcobj);
	        srcobj = JSON.parse(srcobj);
	        return {
	            srcobj: srcobj,
	            loading: 0,
	            imgDisabled: 0
	        };
	    },
	    props: {
	        picobj: {}
	    },
	    events: {
	        
	    },
	    components: {
	        'v-loading': __webpack_require__(41)
	    },
	    watch: {
	        srcobj: {
	            handler: function (val) {
	                this.picobj = val;
	            },
	            deep: true
	        }
	    },
	    methods: {
	        init: function () {
	            var me = this;
	            this.upload();
	        },

	        /**
	         * upload 上传图片
	         *
	         */
	        upload: function () {
	            var me = this;
	            var uploader = Qiniu.uploader({
	                runtimes: 'html5,flash,html4', // 上传模式，依次退化
	                browse_button: 'pickfiles', // 上传选择的点选按钮，必需
	                // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
	                // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
	                // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
	                // uptoken : '<Your upload token>', // uptoken是上传凭证，由其他程序生成
	                uptoken_url: '/qiniu/upToken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
	                // uptoken_func: function(file){    // 在需要获取uptoken时，该方法会被调用
	                //    // do something
	                //    return uptoken;
	                // },
	                get_new_uptoken: true, // 设置上传文件的时候是否每次都重新获取新的uptoken
	                // downtoken_url: '/downtoken',
	                // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
	                // unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
	                // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
	                domain: 'http://odflit039.bkt.clouddn.com/', // bucket域名，下载资源时用到，必需
	                container: 'container', // 上传区域DOM ID，默认是browser_button的父元素
	                max_file_size: '100mb', // 最大文件体积限制
	                flash_swf_url: 'http://odflit039.bkt.clouddn.com/Moxie.swf', //引入flash，相对路径
	                max_retries: 1, // 上传失败最大重试次数
	                dragdrop: true, // 开启可拖曳上传
	                drop_element: 'container', // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
	                chunk_size: '4mb', // 分块上传时，每块的体积
	                auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
	                filters : {
	                    max_file_size: '10mb',
	                        mime_types: [{
	                            title: "图片",
	                            extensions: "jpeg,jpg,png,gif"
	                        }]
	                },
	                //x_vars : {
	                //    查看自定义变量
	                //    'time' : function(up,file) {
	                //        var time = (new Date()).getTime();
	                // do something with 'time'
	                //        return time;
	                //    },
	                //    'size' : function(up,file) {
	                //        var size = file.size;
	                // do something with 'size'
	                //        return size;
	                //    }
	                //},
	                init: {
	                    'FilesAdded': function(up, files) {
	                        plupload.each(files, function(file) {
	                            // loading
	                            me.$data.loading = 1;
	                            // 文件添加进队列后，处理相关的事情
	                        });
	                    },
	                    'BeforeUpload': function(up, file) {
	                        // 每个文件上传前，处理相关的事情
	                    },
	                    'UploadProgress': function(up, file) {
	                        // 每个文件上传时，处理相关的事情
	                    },
	                    'FileUploaded': function(up, file, info) {
	                        // 每个文件上传成功后，处理相关的事情
	                        // 其中info是文件上传成功后，服务端返回的json，形式如：
	                        // {
	                        //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
	                        //    "key": "gogopher.jpg"
	                        //  }
	                        // 查看简单反馈
	                        var domain = up.getOption('domain');
	                        var res = JSON.parse(info);
	                        // 获取上传成功后的文件的Url
	                        // -glistening 图片加水印
	                        var sourceLink = domain + res.key + config.glistening;
	                        me.$data.srcobj.state = 1;
	                        me.$data.srcobj.src = sourceLink;
	                        // loading
	                        me.$data.loading = 0;
	                        me.$data.imgDisabled = 1;
	                    },
	                    'Error': function(up, err, errTip) {
	                        //上传出错时，处理相关的事情
	                        swal({
	                            title: '',
	                            text: '上传文件出错，请重新上传！',
	                            type: 'error'
	                        });
	                        // loading
	                        me.$data.loading = 0;
	                        me.$data.imgDisabled = 0;
	                    },
	                    'UploadComplete': function() {
	                        //队列文件处理完毕后，处理相关的事情
	                        console.log('队列文件处理完毕');
	                    },
	                    'Key': function(up, file) {
	                        // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
	                        // 该配置必须要在unique_names: false，save_key: false时才生效
	                        var key = file.id + '__' + file.name;
	                        // do something with key here
	                        return key;
	                    }
	                }
	            });
	        },

	        /**
	         * remove 移除图片
	         *
	         */
	        remove: function () {
	            var qiniuSrc = this.$data.srcobj.src;
	            if (qiniuSrc === config.srcobj.src) {
	                swal({
	                    title: '',
	                    text: '没有可被移除的文件',
	                    type: 'error'
	                });
	                return;
	            }
	            this.$data.imgDisabled = 0;
	            var data = {
	                src: qiniuSrc
	            }
	            $.ajax({
	                url: '/qiniu/delete',
	                type: 'POST',
	                data: data,
	            })
	            .done(function(json) {
	                if (json.status === -1) {
	                    swal({
	                        title: '',
	                        text: json.message,
	                        type: 'error'
	                    });
	                }
	                console.log(json.message);
	            })
	            .fail(function(err) {
	                console.log(err);
	            });
	            var srcobj = JSON.stringify(config.srcobj);
	            srcobj = JSON.parse(srcobj);
	            this.$data.srcobj = srcobj;
	        }
	    }
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(66);
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#container {\n    width: 300px;\n    position: relative;\n    margin-top: 30px;\n}\n@media screen and (max-width: 810px) {\n   #container {\n        text-align: center;\n    }\n}\n#pickfiles {\n    border: none;\n    padding: 0;\n}\n.remove.icon {\n    position: absolute;\n    left: 0;\n    top: 9px;\n    z-index: 999;\n    font-size: 2rem;\n    cursor: pointer;\n}\n.dimmer.ui {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 999;\n}\n.dimmer.ui > .loading {\n    left: 50%;\n    margin-left: -12px;\n    margin-top: -55px;\n    position: absolute;\n    top: 50%;\n}\n.img-disabled {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, .3);\n    z-index: 998;\n    text-align: right;\n    color: #fff;\n}", ""]);

	// exports


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * @File:      默认配置
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-14 17:11:03
	 */
	module.exports = {
	    glistening: '-scal',
	    srcobj: {
	        state: 0,
	        src: 'http://odflit039.bkt.clouddn.com/o_1asjud1su1nft13js1prps14hrl9image.png'
	    }
	}

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div id=\"container\">\n    <i class=\"remove icon\" @click=\"remove\"></i>\n    <div class=\"img-disabled\" v-if=\"imgDisabled === 1\">请先移除图片再上传吧~</div>\n    <button id=\"pickfiles\">\n        <input type=\"hidden\" name=\"pic\" v-model=\"srcobj.src\" v-if=\"srcobj.state === 1\"/>\n        <img :src=\"srcobj.src\" class=\"ui medium image\">\n    </button>\n    <div class=\"ui active dimmer\" v-if=\"loading === 1\">\n        <v-loading class=\"loading\"></v-loading>\n    </div>\n</div>";

/***/ }
]));