webpackJsonp([4],{

/***/ 35:
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
	    },

	    getIdOfCn: function (id) {
	        // 默认是诗
	        var cn = '逸如诗';
	        switch (id) {
	            case 1:
	                cn = '逸如诗';
	                break;
	            case 2:
	                cn = '婉若词';
	                break;
	            case 3:
	                cn = '兮及赋';
	                break;
	        }
	        return cn;
	    }
	}

/***/ },

/***/ 36:
/***/ function(module, exports) {

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

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      loading
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-09 21:14:21
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(158);
	__webpack_require__(160);
	module.exports = Vue.extend({
	    ready: function () {
	        
	    },
	    template: __webpack_require__(162),
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

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(159);
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

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".loading {\n    margin: 0 auto;\n}\n.loading-text {\n    color: #21ba45;\n    left: -13px;\n    position: absolute;\n    top: 25px;\n    width: 60px;\n    font-weight: 200;\n}", ""]);

	// exports


/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(161);
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

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "*{\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n}\nh1 span{\n    font-size: 30px;\n}\n\na{\n    text-decoration: none;\n}\na:hover{\n    transition: all linear 0.2s;\n}\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n.span, .span_large{\n    float: left;\n    width: 100px;\n    background-color: rgba(0,0,0, 0.02);\n    height: 100px;\n    vertical-align: middle;\n    border-radius: 1px;\n    margin-right: 100px;\n}\n.span:last-child{\n    margin-right: 0px;\n}\n\n/* Timer*/\n.timer{\n    width: 24px;\n    height: 24px;\n    background-color: transparent;\n    box-shadow: inset 0px 0px 0px 2px #fff;\n    border-radius: 50%;\n    position: relative;\n    margin: 38px auto;/* Not necessary- its only for layouting*/    \n }\n.timer:after, .timer:before{\n    position: absolute;\n    content:\"\";\n    background-color: #fff;\n}\n.timer:after{\n    width: 10px;\n    height: 2px;\n    top: 11px;\n    left: 11px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    -webkit-animation: minhand 2s linear infinite;\n       -moz-animation: minhand 2s linear infinite;\n            animation: minhand 2s linear infinite;\n}\n\n.timer:before{\n    width: 8px;\n    height: 2px;\n    top: 11px;\n    left: 11px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    -webkit-animation: hrhand 8s linear infinite;\n       -moz-animation: hrhand 8s linear infinite;\n            animation: hrhand 8s linear infinite;\n}\n\n@-webkit-keyframes minhand{\n    0%{-webkit-transform:rotate(0deg)}\n    100%{-webkit-transform:rotate(360deg)}\n}\n@-moz-keyframes minhand{\n    0%{-moz-transform:rotate(0deg)}\n    100%{-moz-transform:rotate(360deg)}\n}\n@keyframes minhand{\n    0%{transform:rotate(0deg)}\n    100%{transform:rotate(360deg)}\n}\n\n@-webkit-keyframes hrhand{\n    0%{-webkit-transform:rotate(0deg)}\n    100%{-webkit-transform:rotate(360deg)}\n}\n@-moz-keyframes hrhand{\n    0%{-moz-transform:rotate(0deg)}\n    100%{-moz-transform:rotate(360deg)}\n}\n@keyframes hrhand{\n    0%{transform:rotate(0deg)}\n    100%{transform:rotate(360deg)}\n}\n\n/*Typing Loader*/\n.typing_loader{\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    -webkit-animation: typing 1s linear infinite alternate;\n       -moz-animation: Typing 1s linear infinite alternate;\n            animation: typing 1s linear infinite alternate;\n    margin: 46px auto; /* Not necessary- its only for layouting*/  \n    position: relative;\n    left: -12px;\n}\n@-webkit-keyframes typing{\n    0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n@-moz-keyframes typing{\n   0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n@keyframes typing{\n   0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n/*Location indicator */\n.location_indicator{\n    margin: 30px auto;\n    position: relative;\n    left: -9px;\n}\n\n.location_indicator:before, .location_indicator:after{\n    position: absolute;\n    content: \"\";\n}\n\n.location_indicator:before{\n    width: 20px;\n    height: 20px;\n    border-radius: 100% 100% 100% 0;\n    box-shadow: 0px 0px 0px 2px rgba(255,255,255,1);\n    -webkit-animation: mapping 1s linear infinite;\n       -moz-animation: mapping 1s linear infinite;\n            animation: mapping 1s linear infinite;\n    -webkit-transform: rotate(-46deg);\n       -moz-transform: rotate(-46deg);\n            transform: rotate(-46deg);\n\n}\n\n.location_indicator:after{\n    width: 30px;\n    height: 10px;\n    border-radius: 100%;\n    left: 44px;\n    background-color: rgba(255, 255, 255, 0.2);\n    top: 24px;\n    z-index: -1;\n}\n\n@-webkit-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n@-moz-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n@-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n\n/* go in*/\n.dashboard{\n    width: 32px;\n    height: 32px;\n    margin: 30px auto;\n    border: 2px rgba(255,255,255,1) solid;\n    border-radius: 100%;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n.dashboard:after, .dashboard:before{\n    position: absolute;\n    content: \"\";\n}\n.dashboard:after{\n    width:14px;\n    height: 2px;\n    top: 20px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    background-color: rgba(255,255,255,1);\n    -webkit-animation: dashboard_hand 2s linear infinite alternate;\n       -moz-animation: dashboard_hand 2s linear infinite alternate;\n            animation: dashboard_hand 2s linear infinite alternate;\n}\n.dashboard:before{\n    width: 32px;\n    height: 10px;\n    background-color: rgba(255,255,255,1);\n    top:20px;\n    left: -2px;\n}\n@-webkit-keyframes dashboard_hand{\n    0%{ -webkit-transform: rotate(-160deg);}\n    100%{ -webkit-transform: rotate(-20deg);}\n}\n@-moz-keyframes dashboard_hand{\n    0%{ -moz-transform: rotate(-160deg);}\n    100%{ -moz-transform: rotate(-20deg);}\n}\n@keyframes dashboard_hand{\n    0%{ transform: rotate(-160deg);}\n    100%{ transform: rotate(-20deg);}\n}\n\n/*Battery*/\n.battery{\n    width: 28px;\n    height: 14px;\n    border: 1px #fff solid;\n    border-radius: 2px;\n    position: relative;\n    -webkit-animation: charge 5s linear infinite;\n       -moz-animation: charge 5s linear infinite;\n            animation: charge 5s linear infinite;\n    top: 40px;\n    margin: 0 auto;\n}\n.battery:after{\n    width: 2px;\n    height: 7px;\n    background-color: #fff;\n    border-radius: 0px 1px 1px 0px;\n    position: absolute;\n    content: \"\";\n    top: 2px;\n    right: -4px;\n}\n@-webkit-keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n@-moz-keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n@keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n\n.magnifier{\n    width: 20px;\n    height: 20px;\n    box-shadow: 0px 0px 0px 1px #fff;\n    border-radius: 50%;\n    position: relative;\n    margin: 34px auto;\n    -webkit-animation: magnify 1s linear infinite alternate;\n       -moz-animation: magnify 1s linear infinite alternate;\n            animation: magnify 1s linear infinite alternate;\n}\n.magnifier:after, .magnifier:before{\n    position: absolute;\n    content: \"\";\n}\n.magnifier:before{\n    content: \"me\";\n    font-size: 12px;\n    left: 2px;\n    text-align: center;\n    top: 2px;\n}\n.magnifier:after{\n    width: 2px;\n    height: 8px;\n    background-color: #fff;\n    bottom: -6px;\n    left: 20px;\n    border-radius: 2px;\n    -webkit-transform: rotate(-45deg);\n       -moz-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n@-webkit-keyframes magnify{\n    0%{-webkit-transform: scale(1); }\n    100%{-webkit-transform: scale(1.5);}\n}\n@-moz-keyframes magnify{\n    0%{-moz-transform: scale(1); }\n    100%{-moz-transform: scale(1.5);}\n}\n@keyframes magnify{\n    0%{transform: scale(1); }\n    100%{transform: scale(1.5);}\n}\n\n/*help ��ͷ�� www.datouwang.com */\n.help{\n    width: 30px;\n    height: 30px;\n    border: 1px #fff solid;\n    border-radius: 50%;\n    -webkit-animation: rotation 1s ease-in-out infinite;\n       -moz-animation: rotation 1s ease-in-out infinite;\n            animation: rotation 1s ease-in-out infinite;\n    margin: 30px auto;\n}\n.help:after{\n    width: 5px;\n    height: 5px;\n    background-color: rgba(255,255,255,1);\n    border-radius: 100%;\n    position: absolute;\n    content: \"\";\n}\n@-webkit-keyframes rotation{\n    0%{-webkit-transform: rotate(0deg);}\n    100%{-webkit-transform: rotate(360deg);}\n}\n@-moz-keyframes rotation{\n    0%{-moz-transform: rotate(0deg);}\n    100%{-moz-transform: rotate(360deg);}\n}\n@keyframes rotation{\n    0%{transform: rotate(0deg);}\n    100%{transform: rotate(360deg);}\n}\n\n/*eye ball*/\n.eye{\n    width: 20px;\n    height: 20px;\n    background-color: rgba(255,255,255,0.8);\n    border-radius: 50%;\n    box-shadow: 30px 0px 0px 0px rgba(255,255,255,0.8);\n    position: relative;\n    margin: 36px 26px;\n}\n\n.eye:after{\n    background-color: #59488b;\n    width: 10px;\n    height: 10px;\n    box-shadow: 30px 0px 0px 0px #59488b;\n    border-radius: 50%;\n    left: 9px;\n    top: 8px;\n    position: absolute;\n    content: \"\";\n    -webkit-animation: eyeball 2s linear infinite alternate;\n       -moz-animation: eyeball 2s linear infinite alternate;\n            animation: eyeball 2s linear infinite alternate;\n}\n@-webkit-keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n@-moz-keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n@keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n\n/*coffee cup*/\n.coffee_cup{\n    width: 20px;\n    height: 24px;\n    border: 1px #21ba45 solid;\n    border-radius: 0px 0px 5px 5px;\n    position: relative;\n    margin: 36px auto;\n}\n.coffee_cup:after, .coffee_cup:before{\n    position: absolute;\n    content: \"\";\n}\n.coffee_cup:after{\n    width: 5px;\n    height: 12px;\n    border: 1px #21ba45 solid;\n    border-left: none;\n    border-radius: 0px 20px 20px 0px;\n    left: 20px;\n}\n.coffee_cup:before{\n    width: 1px;\n    height: 6px;\n    background-color: #21ba45;\n    top: -10px;\n    left: 4px;\n    box-shadow: 5px 0px 0px 0px #21ba45,\n                5px -5px 0px 0px #21ba45,\n                10px 0px 0px 0px #21ba45;\n    -webkit-animation: steam 1s linear infinite alternate;\n       -moz-animation: steam 1s linear infinite alternate;\n            animation: steam 1s linear infinite alternate;\n}\n\n@-webkit-keyframes steam{\n    0%{height: 0px;}\n    100%{height: 6px;}            \n}\n@-moz-keyframes steam{\n    0%{height: 0px}\n    100%{height: 6px;}            \n}\n@keyframes steam{\n    0%{height: 0px}\n    100%{height: 6px;}            \n}\n\n/*square*/\n.square{\n    width: 20px;\n    height: 20px;\n    border:1px  rgba(255,255,255,1) solid;\n    margin: 36px auto;\n    position: relative;\n    -webkit-animation: fill_color 5s linear infinite;\n       -moz-animation: fill_color 5s linear infinite;\n            animation: fill_color 5s linear infinite;\n}\n.square:after{\n    width: 4px;\n    height: 4px;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(255,255,255,1);\n    top: -8px;\n    left: 0px;\n    -webkit-animation: square_check 1s ease-in-out infinite;\n       -moz-animation: square_check 1s ease-in-out infinite;\n            animation: square_check 1s ease-in-out infinite;\n}\n\n@-webkit-keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@-moz-keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@-webkit-keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n@-moz-keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n@keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n/*circle classick*/\n.circle{\n    margin: 40px auto;\n    position: relative;\n    width: 8px;\n    height: 8px;\n    background-color: rgba(255,255,255,.5);;\n    box-shadow: -14px 0px 0px rgba(255,255,255,1);\n    border-radius: 50%;\n    -webkit-animation: circle_classic 1s ease-in-out infinite alternate;\n       -moz-animation: circle_classic 1s ease-in-out infinite alternate;\n            animation: circle_classic 1s ease-in-out infinite alternate;\n}\n\n@-webkit-keyframes circle_classic{\n    0%{ opacity: 0.1; -webkit-transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; -webkit-transform: rotate(360deg) scale(1.2);}   \n}\n@-moz-keyframes circle_classic{\n    0%{ opacity: 0.1; -moz-transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; -moz-transform: rotate(360deg) scale(1.2);}   \n}\n@keyframes circle_classic{\n    0%{ opacity: 0.1; transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; transform: rotate(360deg) scale(1.2);}   \n}\n\n/*cloud*/\n\n.cloud{\n    margin: 42px 30px;\n    width: 4px;\n    height: 10px;\n    opacity: 0.5;\n    position: relative;\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,1),\n                18px 0px 0px 0px rgba(255,255,255,1),\n                24px 0px 0px 0px rgba(255,255,255,1),\n                30px 0px 0px 0px rgba(255,255,255,1),\n                36px 0px 0px 0px rgba(255,255,255,1);\n    \n    -webkit-animation: rain 1s linear infinite alternate;\n       -moz-animation: rain 1s linear infinite alternate;\n            animation: rain 1s linear infinite alternate;\n}\n.cloud:after{\n    width: 40px;\n    height: 10px;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(255,255,255,1);\n    top: 0px;\n    opacity: 1;\n    -webkit-animation: line_flow 2s linear infinite reverse;\n       -moz-animation: line_flow 2s linear infinite reverse;\n            animation: line_flow 2s linear infinite reverse;\n}\n\n@-webkit-keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n@-moz-keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n@keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n@-moz-keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n@keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n\n/* Me */\n\n.aboutme{\n    width: 700px;\n    padding: 50px 0;\n    border-top: 2px rgba(255,255,255,0.03) solid;\n}\n\n.viduthalai{\n    /*background: url(../img/viduthalai.png) no-repeat;*/\n    width: 100px;\n    height: 100px;\n    border-radius: 0 2px 2px 0;\n    float: left;\n    opacity: 0.5;\n}\n.viduthalai:hover{\n    opacity: 1;\n}\n.intro{\n    float: left;\n    width: 400px;\n    padding-left: 20px;\n    color: rgba(255,255,255,0.5);\n}\n.intro a{\n    color: rgba(255,255,255,0.5);\n}\n.intro a:hover{\n    color: rgba(255,255,255,1);\n}\n\n.intro span, p{\n    font-size: 15px;\n    font-weight: 200;\n}\n.intro h3{\n    font-size: 20px;\n    font-weight: 200;\n    margin: 0px;\n}\n.git{\n    color: rgba(255,255,255,0.5);\n    float: right;\n    text-align: right;\n    padding: 10px 20px;\n    border-radius: 2px;\n    background-color: rgba(0,0,0,0.3);\n    font-weight: 200;\n}\n.git:hover{\n     background-color: rgba(0,0,0,0.2);\n}", ""]);

	// exports


/***/ },

/***/ 162:
/***/ function(module, exports) {

	module.exports = "<div class=\"loading\">\n    <div class=\"coffee_cup\">\n        <span class=\"loading-text\">加载中...</span>\n    </div>\n</div>";

/***/ },

/***/ 163:
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


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      诗歌详情页
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-08 18:14:59
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(185);
	var type_id =__webpack_require__(35);
	var title = __webpack_require__(36);
	__webpack_require__(187);
	var restFullLoader = __webpack_require__(15);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    template: __webpack_require__(189),
	    data: function () {
	        return {
	            load: 0,
	            poem: {},
	            likesState: false
	        };
	    },
	    events: {
	        
	    },
	    components: {
	        'v-loading': __webpack_require__(157)
	    },
	    watch: {
	        
	    },
	    methods: {
	        init: function () {
	            var me = this;
	            var id = this.$route.params.id || '';
	            if (id === '') {
	                swal({
	                    title: '',
	                    text: '诗歌不存在~~',
	                    type: 'error'
	                }, function () {
	                    window.location.href = '/';
	                });
	            }
	            var url = '/api/poem';
	            var data = {
	                id: id
	            };
	            restFullLoader.requestGET(url, data, function (json) {
	                if (json.status === 0) {
	                    swal({
	                        title: '',
	                        text: json.message,
	                        type: 'warning',
	                        confirmButtonText: '跳转到首页'
	                    }, function () {
	                        var url = '/';
	                        self.location.href = url;
	                    });
	                    return;
	                }
	                var data = json.data;
	                var poem = {};
	                poem.title = data.title;
	                title.setTitle(data.title);
	                poem.userName = data.userName;
	                var swicthPoemType = __webpack_require__(163);
	                poem.type = type_id.getTypeOfId(data.poem_type);
	                poem.typeString = swicthPoemType(data.poem_type);
	                poem.poem_time = data.poem_time;
	                poem.imgSrc = data.poem_imgSrc;
	                poem.lines = data.poem_lines;
	                poem.likes = data.likes;
	                poem.id = data.id;
	                me.$data.poem = poem;
	                me.$data.load = 1;
	                // 图片预览
	                setTimeout(function () {
	                    baguetteBox.run('.baguette-img', {
	                        animation: 'fadeIn',
	                        noScrollbars: true,
	                        captions: function(element) {
	                            return element.getElementsByTagName('img')[0].alt;
	                        }
	                    });
	                });
	            });
	        },

	        likePoem: function (id, likes) {
	            var me = this;
	            if (!this.likesState) {
	                if (this.poem.likes === undefined) {
	                    this.poem['likes'] = 0;
	                }
	                this.poem.likes++;
	                this.likesState = true;
	                var num = 0;
	                var url = '/api/likes';
	                var data = {
	                    _id: id,
	                    likes: ++num
	                }
	                restFullLoader.requestPOST(url, data, function (res) {
	                    
	                }, function (err) {
	                    me.likesState = false;
	                });
	            }else {
	                var infoData = this.$root.$children[0].infoData;
	                infoData.class = 'negative';
	                infoData.info = '大才子,你已經點過贊拉!!!';
	                infoData.state = true;
	            }
	        }
	    }
	});

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(186);
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

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#main.w-90 {\n    width: 90%;\n}\n\n.poem-body {\n    \n}\n\n#app .poem-body > * {\n    padding-left: 30px;\n}\n\n.poem-body > .segment.ui {\n    font-size: 1.8rem;\n    font-family: STkaiti,Lato,\"Helvetica Neue\",Arial,Helvetica,sans-serif\n}\n\n#app .ui.label {\n    margin-bottom: 10px;\n}\n#poem-body .image {\n    text-align: center;\n}\n#main img.ui.image {\n    margin: 0 auto;\n}\n.ui.label {\n    z-index: 9;\n}\n.like.icon {\n    cursor: pointer;\n}\n#main .extra.content {\n    padding:14px 0 0 30px;\n    font-size: 1.3rem;\n}\n.ui.vertical.segment:last-child {\n    border-bottom: 1px solid rgba(34, 36, 38, 0.15);\n}\n.content .active.like.icon {\n    color: #ff2733;\n}\n@media screen and (max-width: 810px) {\n    #main {\n        width: 90%;\n    }\n    .poem-body > .segment.ui {\n        font-size: 1.2rem;\n    }\n}", ""]);

	// exports


/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./baguetteBox.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./baguetteBox.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/*!\n * baguetteBox.js\n * @author  feimosi\n * @version 0.7.0\n * @url https://github.com/feimosi/baguetteBox.js\n */\n\n#baguetteBox-overlay {\n\tdisplay: none;\n\topacity: 0;\n\tposition: fixed;\n\toverflow: hidden;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 1000000;\n\tbackground-color: #222;\n\tbackground-color: rgba(0, 0, 0, 0.8);\n\t-webkit-transition: opacity 0.5s ease;\n\t        transition: opacity 0.5s ease;\n}\n\n#baguetteBox-overlay.visible {\n\topacity: 1;\n}\n\n#baguetteBox-overlay .full-image {\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\ttext-align: center;\n}\n\n#baguetteBox-overlay .full-image figure {\n\tdisplay: inline;\n\tmargin: 0;\n\theight: 100%;\n}\n\n#baguetteBox-overlay .full-image img {\n\tdisplay: inline-block;\n\twidth: auto;\n\theight: auto;\n\tmax-height: 100%;\n\tmax-width: 100%;\n\tvertical-align: middle;\n\t-webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n\t   -moz-box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n\t        box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n}\n\n#baguetteBox-overlay .full-image figcaption {\n\tdisplay: block;\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 100%;\n\ttext-align: center;\n\tline-height: 1.8;\n\tcolor: #ccc;\n\tbackground-color: #000;\n\tbackground-color: rgba(0, 0, 0, 0.6);\n\tfont-family: sans-serif;\n}\n\n#baguetteBox-overlay .full-image:before {\n\tcontent: \"\";\n\tdisplay: inline-block;\n\theight: 50%;\n\twidth: 1px;\n\tmargin-right: -1px;\n}\n\n#baguetteBox-slider {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\theight: 100%;\n\twidth: 100%;\n\twhite-space: nowrap;\n\t-webkit-transition: left 0.4s ease, -webkit-transform 0.4s ease;\n\t        transition: left 0.4s ease, -moz-transform 0.4s ease;\n\t        transition: left 0.4s ease, transform 0.4s ease;\n}\n\n#baguetteBox-slider.bounce-from-right {\n\t-webkit-animation: bounceFromRight 0.4s ease-out;\n\t        animation: bounceFromRight 0.4s ease-out;\n}\n\n#baguetteBox-slider.bounce-from-left {\n\t-webkit-animation: bounceFromLeft 0.4s ease-out;\n\t        animation: bounceFromLeft 0.4s ease-out;\n}\n\n.baguetteBox-button#next-button,\n.baguetteBox-button#previous-button {\n\ttop: 50%;\n\ttop: calc(50% - 30px);\n\twidth: 44px;\n\theight: 60px;\n}\n\n.baguetteBox-button {\n\tposition: absolute;\n\tcursor: pointer;\n\toutline: none;\n\tpadding: 0;\n\tmargin: 0;\n\tborder: 0;\n\t-moz-border-radius: 15%;\n\t     border-radius: 15%;\n\tbackground-color: #323232;\n\tbackground-color: rgba(50, 50, 50, 0.5);\n\tcolor: #ddd;\n\tfont: 1.6em sans-serif;\n\t-webkit-transition: background-color 0.4s ease;\n\t        transition: background-color 0.4s ease;\n}\n\n.baguetteBox-button:hover {\n\tbackground-color: rgba(50, 50, 50, 0.9);\n}\n\n.baguetteBox-button#next-button {\n\tright: 2%;\n}\n\n.baguetteBox-button#previous-button {\n\tleft: 2%;\n}\n\n.baguetteBox-button#close-button {\n\ttop: 20px;\n\tright: 2%;\n\tright: calc(2% + 6px);\n\twidth: 30px;\n\theight: 30px;\n}\n\n/*\n    Preloader\n    Borrowed from http://tobiasahlin.com/spinkit/\n*/\n\n.spinner {\n\twidth: 40px;\n\theight: 40px;\n\tdisplay: inline-block;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tmargin-top: -20px;\n\tmargin-left: -20px;\n}\n\n.double-bounce1,\n.double-bounce2 {\n\twidth: 100%;\n\theight: 100%;\n\t-moz-border-radius: 50%;\n\t     border-radius: 50%;\n\tbackground-color: #fff;\n\topacity: 0.6;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\t-webkit-animation: bounce 2s infinite ease-in-out;\n\t        animation: bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2 {\n\t-webkit-animation-delay: -1s;\n\t        animation-delay: -1s;\n}\n\n@-webkit-keyframes bounceFromRight {\n\n0% {\n\tmargin-left: 0;\n}\n\n50% {\n\tmargin-left: -30px;\n}\n\n100% {\n\tmargin-left: 0;\n}\n\n}\n\n@keyframes bounceFromRight {\n\n0% {\n\tmargin-left: 0;\n}\n\n50% {\n\tmargin-left: -30px;\n}\n\n100% {\n\tmargin-left: 0;\n}\n\n}\n\n@-webkit-keyframes bounceFromLeft {\n\n0% {\n\tmargin-left: 0;\n}\n\n50% {\n\tmargin-left: 30px;\n}\n\n100% {\n\tmargin-left: 0;\n}\n\n}\n\n@keyframes bounceFromLeft {\n\n0% {\n\tmargin-left: 0;\n}\n\n50% {\n\tmargin-left: 30px;\n}\n\n100% {\n\tmargin-left: 0;\n}\n\n}\n\n@-webkit-keyframes bounce {\n\n0%,100% {\n\t-webkit-transform: scale(0);\n\t        transform: scale(0);\n}\n\n50% {\n\t-webkit-transform: scale(1);\n\t        transform: scale(1);\n}\n\n}\n\n@keyframes bounce {\n\n0%,100% {\n\t-webkit-transform: scale(0);\n\t   -moz-transform: scale(0);\n\t        transform: scale(0);\n}\n\n50% {\n\t-webkit-transform: scale(1);\n\t   -moz-transform: scale(1);\n\t        transform: scale(1);\n}\n\n}\n\n", ""]);

	// exports


/***/ },

/***/ 189:
/***/ function(module, exports) {

	module.exports = "<div id=\"main\" name=\"poem-form\" class=\"mar-auto w-90\">\n    <v-loading v-if=\"load === 0\"></v-loading>\n    <div class=\"ui tall stacked segment green\" v-else>\n        <span class=\"ui teal ribbon label\">{{poem.title}}</span>\n        <div></div>\n        <a class=\"ui ribbon label\">{{poem.userName}}</a>\n        <div></div>\n        <span class=\"ui right ribbon label\">{{poem.poem_time}}</span>\n        <div></div>\n        <a class=\"ui right ribbon label\" v-link=\"{ path: '/list/' + poem.type }\">{{poem.typeString}}</a>\n        <div class=\"image baguette-img\" v-if=\"!!poem.imgSrc\">\n            <a href=\"javascript:;\" data-at-450=\"{{poem.imgSrc}}\" data-at-800=\"{{poem.imgSrc}}\" data-at-1366=\"{{poem.imgSrc}}\" data-at-1920=\"{{poem.imgSrc}}\" data-caption=\"{{poem.title}}\">\n                <img :src=\"poem.imgSrc\" class=\"ui wireframe image\" alt=\"{{poem.imgSrc}}\">\n            </a>\n        </div>\n        <div class=\"w-80 mar-auto poem-body\" id=\"poem-body\">\n            <p class=\"ui vertical segment\" v-for=\"item in poem.lines\">{{item}}</p>\n        </div>\n        <div class=\"extra content\">\n            <span>\n                <i class=\"heart like icon\" :class=\"{active:likesState}\" @click=\"likePoem(poem.id, poem.likes)\"></i>\n                <span>{{poem.likes || 0}}</span>\n            </span>\n        </div>\n    </div>\n</div>";

/***/ }

});