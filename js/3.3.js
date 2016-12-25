webpackJsonp([3],{

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

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      loading
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-09 21:14:21
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(159);
	__webpack_require__(161);
	module.exports = Vue.extend({
	    ready: function () {
	        
	    },
	    template: __webpack_require__(163),
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

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(160);
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

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".loading {\n    margin: 0 auto;\n}\n.loading-text {\n    color: #21ba45;\n    left: -13px;\n    position: absolute;\n    top: 25px;\n    width: 60px;\n    font-weight: 200;\n}", ""]);

	// exports


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(162);
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

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "*{\n    -webkit-box-sizing: border-box;\n       -moz-box-sizing: border-box;\n            box-sizing: border-box;\n}\nh1 span{\n    font-size: 30px;\n}\n\na{\n    text-decoration: none;\n}\na:hover{\n    transition: all linear 0.2s;\n}\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n.span, .span_large{\n    float: left;\n    width: 100px;\n    background-color: rgba(0,0,0, 0.02);\n    height: 100px;\n    vertical-align: middle;\n    border-radius: 1px;\n    margin-right: 100px;\n}\n.span:last-child{\n    margin-right: 0px;\n}\n\n/* Timer*/\n.timer{\n    width: 24px;\n    height: 24px;\n    background-color: transparent;\n    box-shadow: inset 0px 0px 0px 2px #fff;\n    border-radius: 50%;\n    position: relative;\n    margin: 38px auto;/* Not necessary- its only for layouting*/    \n }\n.timer:after, .timer:before{\n    position: absolute;\n    content:\"\";\n    background-color: #fff;\n}\n.timer:after{\n    width: 10px;\n    height: 2px;\n    top: 11px;\n    left: 11px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    -webkit-animation: minhand 2s linear infinite;\n       -moz-animation: minhand 2s linear infinite;\n            animation: minhand 2s linear infinite;\n}\n\n.timer:before{\n    width: 8px;\n    height: 2px;\n    top: 11px;\n    left: 11px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    -webkit-animation: hrhand 8s linear infinite;\n       -moz-animation: hrhand 8s linear infinite;\n            animation: hrhand 8s linear infinite;\n}\n\n@-webkit-keyframes minhand{\n    0%{-webkit-transform:rotate(0deg)}\n    100%{-webkit-transform:rotate(360deg)}\n}\n@-moz-keyframes minhand{\n    0%{-moz-transform:rotate(0deg)}\n    100%{-moz-transform:rotate(360deg)}\n}\n@keyframes minhand{\n    0%{transform:rotate(0deg)}\n    100%{transform:rotate(360deg)}\n}\n\n@-webkit-keyframes hrhand{\n    0%{-webkit-transform:rotate(0deg)}\n    100%{-webkit-transform:rotate(360deg)}\n}\n@-moz-keyframes hrhand{\n    0%{-moz-transform:rotate(0deg)}\n    100%{-moz-transform:rotate(360deg)}\n}\n@keyframes hrhand{\n    0%{transform:rotate(0deg)}\n    100%{transform:rotate(360deg)}\n}\n\n/*Typing Loader*/\n.typing_loader{\n    width: 6px;\n    height: 6px;\n    border-radius: 50%;\n    -webkit-animation: typing 1s linear infinite alternate;\n       -moz-animation: Typing 1s linear infinite alternate;\n            animation: typing 1s linear infinite alternate;\n    margin: 46px auto; /* Not necessary- its only for layouting*/  \n    position: relative;\n    left: -12px;\n}\n@-webkit-keyframes typing{\n    0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n@-moz-keyframes typing{\n   0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n@keyframes typing{\n   0%{\n        background-color: rgba(255,255,255, 1);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n      }\n    25%{ \n        background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2), \n                    24px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    75%{ background-color: rgba(255,255,255, 0.4);\n        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2), \n                    24px 0px 0px 0px rgba(255,255,255,1);\n      }\n}\n\n/*Location indicator */\n.location_indicator{\n    margin: 30px auto;\n    position: relative;\n    left: -9px;\n}\n\n.location_indicator:before, .location_indicator:after{\n    position: absolute;\n    content: \"\";\n}\n\n.location_indicator:before{\n    width: 20px;\n    height: 20px;\n    border-radius: 100% 100% 100% 0;\n    box-shadow: 0px 0px 0px 2px rgba(255,255,255,1);\n    -webkit-animation: mapping 1s linear infinite;\n       -moz-animation: mapping 1s linear infinite;\n            animation: mapping 1s linear infinite;\n    -webkit-transform: rotate(-46deg);\n       -moz-transform: rotate(-46deg);\n            transform: rotate(-46deg);\n\n}\n\n.location_indicator:after{\n    width: 30px;\n    height: 10px;\n    border-radius: 100%;\n    left: 44px;\n    background-color: rgba(255, 255, 255, 0.2);\n    top: 24px;\n    z-index: -1;\n}\n\n@-webkit-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n@-moz-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n@-keyframes mapping{\n    0% {top: 0;}\n    50%{top: -5px;}\n    100% {top:0; }\n}\n\n/* go in*/\n.dashboard{\n    width: 32px;\n    height: 32px;\n    margin: 30px auto;\n    border: 2px rgba(255,255,255,1) solid;\n    border-radius: 100%;\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n.dashboard:after, .dashboard:before{\n    position: absolute;\n    content: \"\";\n}\n.dashboard:after{\n    width:14px;\n    height: 2px;\n    top: 20px;\n    -webkit-transform-origin: 1px 1px;\n       -moz-transform-origin: 1px 1px;\n            transform-origin: 1px 1px;\n    background-color: rgba(255,255,255,1);\n    -webkit-animation: dashboard_hand 2s linear infinite alternate;\n       -moz-animation: dashboard_hand 2s linear infinite alternate;\n            animation: dashboard_hand 2s linear infinite alternate;\n}\n.dashboard:before{\n    width: 32px;\n    height: 10px;\n    background-color: rgba(255,255,255,1);\n    top:20px;\n    left: -2px;\n}\n@-webkit-keyframes dashboard_hand{\n    0%{ -webkit-transform: rotate(-160deg);}\n    100%{ -webkit-transform: rotate(-20deg);}\n}\n@-moz-keyframes dashboard_hand{\n    0%{ -moz-transform: rotate(-160deg);}\n    100%{ -moz-transform: rotate(-20deg);}\n}\n@keyframes dashboard_hand{\n    0%{ transform: rotate(-160deg);}\n    100%{ transform: rotate(-20deg);}\n}\n\n/*Battery*/\n.battery{\n    width: 28px;\n    height: 14px;\n    border: 1px #fff solid;\n    border-radius: 2px;\n    position: relative;\n    -webkit-animation: charge 5s linear infinite;\n       -moz-animation: charge 5s linear infinite;\n            animation: charge 5s linear infinite;\n    top: 40px;\n    margin: 0 auto;\n}\n.battery:after{\n    width: 2px;\n    height: 7px;\n    background-color: #fff;\n    border-radius: 0px 1px 1px 0px;\n    position: absolute;\n    content: \"\";\n    top: 2px;\n    right: -4px;\n}\n@-webkit-keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n@-moz-keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n@keyframes charge{\n    0%{box-shadow: inset 0px 0px 0px #fff;}\n    100%{box-shadow: inset 30px 0px 0px #fff;}\n}\n\n.magnifier{\n    width: 20px;\n    height: 20px;\n    box-shadow: 0px 0px 0px 1px #fff;\n    border-radius: 50%;\n    position: relative;\n    margin: 34px auto;\n    -webkit-animation: magnify 1s linear infinite alternate;\n       -moz-animation: magnify 1s linear infinite alternate;\n            animation: magnify 1s linear infinite alternate;\n}\n.magnifier:after, .magnifier:before{\n    position: absolute;\n    content: \"\";\n}\n.magnifier:before{\n    content: \"me\";\n    font-size: 12px;\n    left: 2px;\n    text-align: center;\n    top: 2px;\n}\n.magnifier:after{\n    width: 2px;\n    height: 8px;\n    background-color: #fff;\n    bottom: -6px;\n    left: 20px;\n    border-radius: 2px;\n    -webkit-transform: rotate(-45deg);\n       -moz-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n}\n\n@-webkit-keyframes magnify{\n    0%{-webkit-transform: scale(1); }\n    100%{-webkit-transform: scale(1.5);}\n}\n@-moz-keyframes magnify{\n    0%{-moz-transform: scale(1); }\n    100%{-moz-transform: scale(1.5);}\n}\n@keyframes magnify{\n    0%{transform: scale(1); }\n    100%{transform: scale(1.5);}\n}\n\n/*help ��ͷ�� www.datouwang.com */\n.help{\n    width: 30px;\n    height: 30px;\n    border: 1px #fff solid;\n    border-radius: 50%;\n    -webkit-animation: rotation 1s ease-in-out infinite;\n       -moz-animation: rotation 1s ease-in-out infinite;\n            animation: rotation 1s ease-in-out infinite;\n    margin: 30px auto;\n}\n.help:after{\n    width: 5px;\n    height: 5px;\n    background-color: rgba(255,255,255,1);\n    border-radius: 100%;\n    position: absolute;\n    content: \"\";\n}\n@-webkit-keyframes rotation{\n    0%{-webkit-transform: rotate(0deg);}\n    100%{-webkit-transform: rotate(360deg);}\n}\n@-moz-keyframes rotation{\n    0%{-moz-transform: rotate(0deg);}\n    100%{-moz-transform: rotate(360deg);}\n}\n@keyframes rotation{\n    0%{transform: rotate(0deg);}\n    100%{transform: rotate(360deg);}\n}\n\n/*eye ball*/\n.eye{\n    width: 20px;\n    height: 20px;\n    background-color: rgba(255,255,255,0.8);\n    border-radius: 50%;\n    box-shadow: 30px 0px 0px 0px rgba(255,255,255,0.8);\n    position: relative;\n    margin: 36px 26px;\n}\n\n.eye:after{\n    background-color: #59488b;\n    width: 10px;\n    height: 10px;\n    box-shadow: 30px 0px 0px 0px #59488b;\n    border-radius: 50%;\n    left: 9px;\n    top: 8px;\n    position: absolute;\n    content: \"\";\n    -webkit-animation: eyeball 2s linear infinite alternate;\n       -moz-animation: eyeball 2s linear infinite alternate;\n            animation: eyeball 2s linear infinite alternate;\n}\n@-webkit-keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n@-moz-keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n@keyframes eyeball{\n    0%{left: 9px;}\n    100%{left: 1px;}\n}\n\n/*coffee cup*/\n.coffee_cup{\n    width: 20px;\n    height: 24px;\n    border: 1px #21ba45 solid;\n    border-radius: 0px 0px 5px 5px;\n    position: relative;\n    margin: 36px auto;\n}\n.coffee_cup:after, .coffee_cup:before{\n    position: absolute;\n    content: \"\";\n}\n.coffee_cup:after{\n    width: 5px;\n    height: 12px;\n    border: 1px #21ba45 solid;\n    border-left: none;\n    border-radius: 0px 20px 20px 0px;\n    left: 20px;\n}\n.coffee_cup:before{\n    width: 1px;\n    height: 6px;\n    background-color: #21ba45;\n    top: -10px;\n    left: 4px;\n    box-shadow: 5px 0px 0px 0px #21ba45,\n                5px -5px 0px 0px #21ba45,\n                10px 0px 0px 0px #21ba45;\n    -webkit-animation: steam 1s linear infinite alternate;\n       -moz-animation: steam 1s linear infinite alternate;\n            animation: steam 1s linear infinite alternate;\n}\n\n@-webkit-keyframes steam{\n    0%{height: 0px;}\n    100%{height: 6px;}            \n}\n@-moz-keyframes steam{\n    0%{height: 0px}\n    100%{height: 6px;}            \n}\n@keyframes steam{\n    0%{height: 0px}\n    100%{height: 6px;}            \n}\n\n/*square*/\n.square{\n    width: 20px;\n    height: 20px;\n    border:1px  rgba(255,255,255,1) solid;\n    margin: 36px auto;\n    position: relative;\n    -webkit-animation: fill_color 5s linear infinite;\n       -moz-animation: fill_color 5s linear infinite;\n            animation: fill_color 5s linear infinite;\n}\n.square:after{\n    width: 4px;\n    height: 4px;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(255,255,255,1);\n    top: -8px;\n    left: 0px;\n    -webkit-animation: square_check 1s ease-in-out infinite;\n       -moz-animation: square_check 1s ease-in-out infinite;\n            animation: square_check 1s ease-in-out infinite;\n}\n\n@-webkit-keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@-moz-keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@keyframes square_check{\n    25%{ left: 22px; top: -8px;}\n    50%{ left: 22px; top: 22px;}\n    75%{ left: -9px; top: 22px;}\n    100%{ left: -9px; top: -7px;}\n}\n@-webkit-keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n@-moz-keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n@keyframes fill_color{\n    0%{ box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,0.1);}\n    100%{ box-shadow: inset 0px -20px 0px 0px rgba(255,255,255,1);}\n}\n/*circle classick*/\n.circle{\n    margin: 40px auto;\n    position: relative;\n    width: 8px;\n    height: 8px;\n    background-color: rgba(255,255,255,.5);;\n    box-shadow: -14px 0px 0px rgba(255,255,255,1);\n    border-radius: 50%;\n    -webkit-animation: circle_classic 1s ease-in-out infinite alternate;\n       -moz-animation: circle_classic 1s ease-in-out infinite alternate;\n            animation: circle_classic 1s ease-in-out infinite alternate;\n}\n\n@-webkit-keyframes circle_classic{\n    0%{ opacity: 0.1; -webkit-transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; -webkit-transform: rotate(360deg) scale(1.2);}   \n}\n@-moz-keyframes circle_classic{\n    0%{ opacity: 0.1; -moz-transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; -moz-transform: rotate(360deg) scale(1.2);}   \n}\n@keyframes circle_classic{\n    0%{ opacity: 0.1; transform: rotate(0deg) scale(0.5);}\n   100%{opacity: 1; transform: rotate(360deg) scale(1.2);}   \n}\n\n/*cloud*/\n\n.cloud{\n    margin: 42px 30px;\n    width: 4px;\n    height: 10px;\n    opacity: 0.5;\n    position: relative;\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,1),\n                18px 0px 0px 0px rgba(255,255,255,1),\n                24px 0px 0px 0px rgba(255,255,255,1),\n                30px 0px 0px 0px rgba(255,255,255,1),\n                36px 0px 0px 0px rgba(255,255,255,1);\n    \n    -webkit-animation: rain 1s linear infinite alternate;\n       -moz-animation: rain 1s linear infinite alternate;\n            animation: rain 1s linear infinite alternate;\n}\n.cloud:after{\n    width: 40px;\n    height: 10px;\n    position: absolute;\n    content: \"\";\n    background-color: rgba(255,255,255,1);\n    top: 0px;\n    opacity: 1;\n    -webkit-animation: line_flow 2s linear infinite reverse;\n       -moz-animation: line_flow 2s linear infinite reverse;\n            animation: line_flow 2s linear infinite reverse;\n}\n\n@-webkit-keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n@-moz-keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n@keyframes rain{\n    0%{\n     box-shadow: 6px 0px 0px 0px rgba(255,255,255,1),\n                12px 0px 0px 0px rgba(255,255,255,0.9),\n                18px 0px 0px 0px rgba(255,255,255,0.7),\n                24px 0px 0px 0px rgba(255,255,255,0.6),\n                30px 0px 0px 0px rgba(255,255,255,0.3),\n                36px 0px 0px 0px rgba(255,255,255,0.2);\n    }\n    100%{\n    box-shadow: 6px 0px 0px 0px rgba(255,255,255,0.2),\n                12px 0px 0px 0px rgba(255,255,255,0.3),\n                18px 0px 0px 0px rgba(255,255,255,0.6),\n                24px 0px 0px 0px rgba(255,255,255,0.7),\n                30px 0px 0px 0px rgba(255,255,255,0.9),\n                36px 0px 0px 0px rgba(255,255,255,1);\n        opacity: 1;\n    }\n}\n\n@-webkit-keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n@-moz-keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n@keyframes line_flow{\n    0%{ width: 0px;}\n    100%{width: 40px;}\n}\n\n/* Me */\n\n.aboutme{\n    width: 700px;\n    padding: 50px 0;\n    border-top: 2px rgba(255,255,255,0.03) solid;\n}\n\n.viduthalai{\n    /*background: url(../img/viduthalai.png) no-repeat;*/\n    width: 100px;\n    height: 100px;\n    border-radius: 0 2px 2px 0;\n    float: left;\n    opacity: 0.5;\n}\n.viduthalai:hover{\n    opacity: 1;\n}\n.intro{\n    float: left;\n    width: 400px;\n    padding-left: 20px;\n    color: rgba(255,255,255,0.5);\n}\n.intro a{\n    color: rgba(255,255,255,0.5);\n}\n.intro a:hover{\n    color: rgba(255,255,255,1);\n}\n\n.intro span, p{\n    font-size: 15px;\n    font-weight: 200;\n}\n.intro h3{\n    font-size: 20px;\n    font-weight: 200;\n    margin: 0px;\n}\n.git{\n    color: rgba(255,255,255,0.5);\n    float: right;\n    text-align: right;\n    padding: 10px 20px;\n    border-radius: 2px;\n    background-color: rgba(0,0,0,0.3);\n    font-weight: 200;\n}\n.git:hover{\n     background-color: rgba(0,0,0,0.2);\n}", ""]);

	// exports


/***/ },

/***/ 163:
/***/ function(module, exports) {

	module.exports = "<div class=\"loading\">\n    <div class=\"coffee_cup\">\n        <span class=\"loading-text\">加载中...</span>\n    </div>\n</div>";

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      新增页面
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-06-05 19:35:07
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(170);
	var numToCn = __webpack_require__(172);
	var rule = __webpack_require__(173);
	var defaultConfig = __webpack_require__(174);
	var title = __webpack_require__(36);
	var restFullLoader = __webpack_require__(15);
	var webConfig =  __webpack_require__(16);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	        this.date();
	    },
	    template: __webpack_require__(175),
	    data: function () {
	        return {
	            isLoginstate: 0, // 登陆状态
	            poem_title: '', // 文题
	            genres: defaultConfig.genresData,
	            poem_time: '', // 创作时间
	            initLineNum: 4, // 初始行数
	            newLines: [],
	            picobj: {
	                state: 0,
	                src: 'http://odflit039.bkt.clouddn.com/o_1asjud1su1nft13js1prps14hrl9image.png'
	            },
	            update: 0,
	            postState: 0 // 点击提交状态
	        };
	    },
	    events: {

	    },
	    components: {
	        'v-select': __webpack_require__(176),
	        'v-upload': __webpack_require__(180)
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
	            title.setTitle('忽来文思涌');
	            this.isUpdate();
	            // 刷新关闭提示
	            this.fresh();
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
	         * fresh 刷新提示
	         *
	         */
	        fresh: function () {
	            // 刷新提示
	            document.body.onbeforeunload = function (e) {
	                e = e || window.event;
	                if (/webkit/.test(navigator.userAgent.toLowerCase())) {
	                    return"离开页面将导致数据丢失！";
	                }else {
	                    e.returnValue ="离开页面将导致数据丢失！";
	                }
	            }
	        },

	        /**
	         * isUpdate 是否是更新
	         *
	         */
	        isUpdate: function () {
	            // 编辑
	            var path = this.$route.path;
	            var update = path.split('/')[1];
	            if (update === 'update') {
	                this.$data.update = 1;
	                var id = this.$route.params.id;
	                this.getPoem(id);
	            }else {
	                this.$data.newLines = defaultConfig.newLines;
	            }
	        },

	        /**
	         * date 初始化日期组件
	         *
	         */
	        date: function () {
	            var me = this;
	            laydate({
	                elem:     '#poem_time',
	                format:   'YYYY-MM-DD hh:mm:ss', // 分隔符可以任意定义，该例子表示只显示年月
	                istime: true,
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
	            var me = this;
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
	            swal({
	                title: "您确定要删除最后一行吗？",
	                // text: "您确定要删除这条数据？", 
	                type: "warning",
	                showCancelButton: true,
	                closeOnConfirm: false,
	                confirmButtonText: "是的，我要删除",
	                confirmButtonColor: "#ec6c62"
	            }, function() {
	                var len = me.$data.newLines.length;
	                me.$data.newLines.splice(len - 1, len);
	                me.$data.initLineNum = me.$data.newLines.length;
	            });
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
	            var me = this;
	            this.$data.postState = 1;
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
	            // 更新
	            var _id = this.$route.params.id;
	            if (_id) {
	                data['_id'] = _id;
	            }
	            // 检查登陆状态
	            this.isLogin();
	            if (this.isLoginstate === 0) {
	                this.$data.postState = 0;
	                swal({
	                    title: '',
	                    text: '未登陆请登陆',
	                    type: 'error'
	                }, function () {
	                    var url = '/#!/login';
	                    self.open(url);
	                });
	                return;
	            }
	            var url = '/api/save/poem';
	            // $.ajax({
	            //     url: '/api/save/poem',
	            //     type: 'POST',
	            //     data: data,
	            // })
	            // .done(function(data) {
	            //     swal({
	            //         title: '',
	            //         text: data.message,
	            //         type: 'success'
	            //     }, function () {
	            //         me.backUpPoem(data.data.id, function () {
	            //             var url = '/#!/p/' + data.data.id;
	            //             self.location.href = url;
	            //         });
	            //     });
	            // })
	            // .fail(function() {
	            //     me.$data.postState = 0;
	            //     console.log("error");
	            // });
	            restFullLoader.requestPOST(url, data, function (res) {
	                if (res.status === 1) {
	                    swal({
	                        title: '',
	                        text: data.message,
	                        type: 'success'
	                    }, function () {
	                        me.backUpPoem(data.data.id, function () {
	                            var url = '/#!/p/' + data.data.id;
	                            url = webConfig.host + webConfig.root + url;
	                            self.location.href = url;
	                        });
	                    });
	                }
	            }, function (err) {
	                me.$data.postState = 0;
	                console.log("error");
	            });
	        },

	        /**
	         * backUpPoem 备份诗歌
	         *
	         * @param  {string} id 诗歌id
	         *
	         */
	        backUpPoem: function (id, cb) {
	            var url = '/api/backup';
	            var data = {
	                id: id
	            };
	            // $.ajax({
	            //     url: '/api/backup',
	            //     type: 'POST',
	            //     data: data
	            // })
	            // .done(function(json) {
	            //     cb && cb();
	            // })
	            // .fail(function() {
	            //     cb && cb();
	            // });
	            restFullLoader.requestPOST('/api/poem', data, function (res) {
	                if (res.status === 1) {
	                    cb && cb();
	                }
	            }, function (err) {
	                cb && cb();
	            });
	        },

	        /**
	         * isLogin 检查是否登陆
	         *
	         */
	        isLogin: function () {
	            var me = this;
	            var host = __webpack_require__(16).host;
	            var url = host + '/api/isLogin';
	            $.ajax({
	                url: url,
	                type: 'GET',
	                cache: false,
	                xhrFields: {
	                    withCredentials: true
	                },
	                async: false
	            })
	            .done(function(data) {
	                if (data.status === 1) {
	                    me.isLoginstate = 1;
	                }else {
	                    me.isLoginstate = 0;
	                }
	            })
	            .fail(function(error) {
	                me.isLoginstate = 0;
	                console.log(error);
	            });
	            // restFullLoader.requestGET(url, function (res) {
	            //     if (res.status === 1) {
	            //         me.isLoginstate = 1;
	            //     }else {
	            //         me.isLoginstate = 0;
	            //     }
	            // }, function (err) {
	            //     me.isLoginstate = 0;
	            //     console.log(error);
	            // });
	        },

	        /**
	         * getPoem 根据id获取poemupdate
	         *
	         */
	        getPoem: function (id) {
	            var me = this;
	            var url = '/api/poem';
	            var data = {
	                id: id,
	                update: true
	            };
	            // $.ajax({
	            //     url: '/api/poem',
	            //     type: 'get',
	            //     data: data
	            // })
	            // .done(function(json) {
	            //     if (json.status === 0) {
	            //         swal({
	            //             title: '',
	            //             text: json.message,
	            //             type: 'warning',
	            //             confirmButtonText: '跳转到首页'
	            //         }, function () {
	            //             var url = '/';
	            //             router.go(url);
	            //         });
	            //         return;
	            //     }
	            //     var data = json.data;
	            //     // 诗歌类型
	            //     me.$data.genres.checkedData = data.poem_type;
	            //     // 文题
	            //     me.$data.poem_title = data.title;
	            //     title.setTitle(data.title);
	            //     // 创作时间
	            //     me.$data.poem_time = data.poem_time;
	            //     // 图集
	            //     if (data.poem_imgSrc) {
	            //         var picobj = {
	            //             state: 1,
	            //             src: data.poem_imgSrc
	            //         };
	            //         me.$data.picobj = picobj;
	            //     }
	            //     // 联句
	            //     var poems = data.poem_lines;
	            //     me.$data.initLineNum = poems.length;
	            //     poems.forEach(function (item, index) {
	            //         var cn = numToCn.get(index + 1);
	            //         var obj = {
	            //             title: cn,
	            //             value: item
	            //         }
	            //         me.$data.newLines.push(obj);
	            //     });
	            // })
	            // .fail(function(err) {
	            //     console.log("error");
	            // });
	            restFullLoader.requestGET('/api/poem', data, function (json) {
	                if (json.status === 0) {
	                    swal({
	                        title: '',
	                        text: json.message,
	                        type: 'warning',
	                        confirmButtonText: '跳转到首页'
	                    }, function () {
	                        var url = '/';
	                        me.$route.router.go('/');
	                    });
	                    return;
	                }
	                var data = json.data;
	                // 诗歌类型
	                me.$data.genres.checkedData = data.poem_type;
	                // 文题
	                me.$data.poem_title = data.title;
	                title.setTitle(data.title);
	                // 创作时间
	                me.$data.poem_time = data.poem_time;
	                // 图集
	                if (data.poem_imgSrc) {
	                    var picobj = {
	                        state: 1,
	                        src: data.poem_imgSrc
	                    };
	                    me.$data.picobj = picobj;
	                }
	                // 联句
	                var poems = data.poem_lines;
	                me.$data.initLineNum = poems.length;
	                poems.forEach(function (item, index) {
	                    var cn = numToCn.get(index + 1);
	                    var obj = {
	                        title: cn,
	                        value: item
	                    }
	                    me.$data.newLines.push(obj);
	                });
	            });
	        }
	    }
	});

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(171);
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

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#main[name=poem-form] {\n    width: 80%;\n    margin: 0 auto;\n    padding: 0 1.5% 350px;\n}\n#main > .header {\n    padding: 0 18px;\n}\n.segment > div.input {\n    width: 90%;\n    float: right;\n    margin-top: -5px;\n}\n.segment > .button {\n    font-size: 12px;\n    font-weight: 400;\n}\n#submit {\n    float: right;\n    margin-right: 11px;\n}\n/*重置laydate样式*/\n#laydate_box * {\n    box-sizing: initial!important;\n}\n#laydate_YY {\n    margin-right: 0;\n}\n#laydate_MM {\n    float: right;\n}\n#app {\n    position: relative;\n    padding-top: 70px;\n    /*padding-bottom: 350px;*/\n    min-height:100%\n}\n/*重置laydate样式end*/\n.field > .prompt {\n    float: right;\n}\n.poem-title > .ui.label.prompt,\n.poem-genres > .ui.label.prompt {\n    margin-right: 45px;\n}\n.ui.input {\n    width: 64%;\n}\n#main .ui > .column > .label {\n    width: auto;\n}\n@media screen and (max-width: 810px) {\n    #main {\n        width: 80%;\n    }\n    #app .mobile > div {\n        display: block;\n        width: 100%;\n    }\n    .segment > div.input {\n        width: 71%;\n    }\n}\n.ui > .column > .label {\n    width: 5rem;\n}", ""]);

	// exports


/***/ },

/***/ 172:
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

/***/ 173:
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

/***/ 174:
/***/ function(module, exports) {

	/**
	 * @File:      默认数据配置
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-16 20:59:43
	 */
	module.exports = {
	    // 下拉框默认数据
	    genresData: {
	        inputName: 'poem_genres', // 选择的name字段
	        defaultText: '请选择', // 默认请选择
	        checkedData: -1, // 默认选中value值
	        data: [
	            {
	                text: '请选择',
	                value: -1
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
	    ]
	}

/***/ },

/***/ 175:
/***/ function(module, exports) {

	module.exports = "<div id=\"main\" name=\"poem-form\">\n    <v-loading v-if=\"load === 0\"></v-loading>\n    <template v-else>\n        <div class=\"ui three column grid mobile\">\n            <div class=\"column field poem-title\">\n                <span class=\"ui horizontal label\">文题</span>\n                <div class=\"ui input\">\n                    <input type=\"text\" placeholder=\"请输入文题\" name=\"poem_title\" v-model=\"poem_title\"/>\n                </div>\n            </div>\n            <div class=\"column field\">\n                <span class=\"ui horizontal label\">创作时间</span>\n                <div class=\"ui input\">\n                    <input type=\"text\" id=\"poem_time\" placeholder=\"输入创作时间\" v-model=\"poem_time\"/>\n                </div>\n            </div>\n            <div class=\"column field poem-genres\">\n                <span class=\"ui horizontal label\">体裁</span>\n                <v-select :selectobj.sync=\"genres\"></v-select>\n            </div>\n        </div>\n        <v-upload :picobj.sync=\"picobj\"></v-upload>\n        <div class=\"ui segments piled\">\n            <div class=\"ui segment field clearfix\" v-for=\"item in newLines\">\n                <span class=\"ui ribbon label\">第{{item.title}}联</span>\n                <div class=\"ui input\">\n                    <input type=\"text\" placeholder=\"请输入第{{item.title}}联\" v-model=\"item.value\">\n                </div>\n            </div>\n            <div class=\"ui segment\">\n                <button class=\"ui red button compact\" @click=\"delLine\">删一联</button>\n                <button class=\"ui green button compact\" @click=\"newLine\">增一联</button>\n                <button class=\"ui green button compact submit loading\" id=\"submit\" v-if=\"postState === 1\" disabled>\n                    <span v-if=\"update === 0\">发布</span>\n                    <span v-if=\"update === 1\">更新</span>\n                </button>\n                <button class=\"ui green button compact submit\" id=\"submit\" v-else>\n                    <span v-if=\"update === 0\">发布</span>\n                    <span v-if=\"update === 1\">更新</span>\n                </button>\n            </div>\n        </div>\n    </template>\n</div>\n";

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      select组件
	 * @Author:    花夏(liubiao@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-06-01 17:19:58
	 */
	__webpack_require__(177);
	var Vue = __webpack_require__(1);
	module.exports = Vue.extend({
	    ready: function () {
	        me = this;
	        me.init();
	    },
	    template: __webpack_require__(179),
	    data: function () {
	        return {
	            checkedData: -1
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
	                if (val.checkedData == -1) {
	                    this.rest();
	                }else {
	                    this.checking(val.checkedData);
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
	        },

	        /**
	         * checking 修复semantic UI ajax获取数据无法显示选中的文字
	         *
	         * @return {type} description
	         */
	        checking: function (val) {
	            var data = this.selectobj.data;
	            var $el = $('.ui.dropdown > .text');
	            var text = $el.text();
	            data.forEach(function (item, index) {
	                if (item.value == val) {
	                    text = item.text;
	                    $el.text(text).removeClass('default');
	                }
	            });
	        }
	    }
	});

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(178);
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

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".ui.selection.dropdown {\n    min-width: 11.36rem;\n}\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n    .ui.selection.dropdown {\n        min-width: 11.58rem;\n    }\n}", ""]);

	// exports


/***/ },

/***/ 179:
/***/ function(module, exports) {

	module.exports = "<div class=\"ui selection dropdown\">\n    <input name=\"{{selectobj.inputName}}\" type=\"hidden\" value=\"{{selectobj.checkedData}}\" v-model=\"checkedData\">\n    <i class=\"dropdown icon\"></i>\n    <div class=\"default text\">{{selectobj.defaultText}}</div>\n    <div class=\"menu\">\n        <div class=\"item\" data-value=\"{{item.value}}\" data-text=\"{{item.text}}\" v-for=\"item in selectobj.data\">\n            {{item.text}}\n        </div>\n    </div>\n</div>";

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      上传组件
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-09-13 15:52:19
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(181);
	var config = __webpack_require__(183);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    template: __webpack_require__(184),
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
	        'v-loading': __webpack_require__(158)
	    },
	    watch: {
	        srcobj: {
	            handler: function (val) {
	                this.picobj = val;
	            },
	            deep: true
	        },
	        // 做数据回写
	        picobj: {
	            handler: function (val) {
	                this.$data.srcobj = val;
	                // this.$data.imgDisabled = val.state;
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
	                uptoken_url: 'http://hua.huar.love/qiniu/upToken',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
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
	                        // me.$data.imgDisabled = 1;
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
	        },

	        /**
	         * showShade 显示遮罩层
	         */
	        showShade: function () {
	            this.$data.imgDisabled = this.$data.srcobj.state;
	        },

	        /**
	         * hideShade 隐藏遮罩层
	         *
	         */
	        hideShade: function () {
	            this.$data.imgDisabled = 0;
	        }
	    }
	});

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
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

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#container {\n    width: 300px;\n    position: relative;\n    margin-top: 30px;\n}\n@media screen and (max-width: 810px) {\n   #container {\n        text-align: center;\n    }\n}\n#pickfiles {\n    border: none;\n    padding: 0;\n}\n.remove.icon {\n    position: absolute;\n    left: 0;\n    top: 9px;\n    z-index: 999;\n    font-size: 2rem;\n    cursor: pointer;\n    color: #fff;\n}\n.dimmer.ui {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 999;\n}\n.dimmer.ui > .loading {\n    left: 50%;\n    margin-left: -12px;\n    margin-top: -55px;\n    position: absolute;\n    top: 50%;\n}\n.img-disabled {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, .3);\n    z-index: 998;\n    text-align: center;\n    color: #fff;\n}\n.img-disabled:after {\n    display:inline-block;\n    width:0;\n    height:100%;\n    vertical-align:middle;\n    content:\"\";\n}", ""]);

	// exports


/***/ },

/***/ 183:
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

/***/ 184:
/***/ function(module, exports) {

	module.exports = "<div id=\"container\" @mouseenter=\"showShade\" @mouseleave=\"hideShade\">\n    <i class=\"remove icon\" v-if=\"imgDisabled === 1\" @click=\"remove\"></i>\n    <div class=\"img-disabled\" v-if=\"imgDisabled === 1\">请先移除图片再上传吧~</div>\n    <button id=\"pickfiles\">\n        <input type=\"hidden\" name=\"pic\" v-model=\"srcobj.src\" v-if=\"srcobj.state === 1\"/>\n        <img :src=\"srcobj.src\" class=\"ui medium image\">\n    </button>\n    <div class=\"ui active dimmer\" v-if=\"loading === 1\">\n        <v-loading class=\"loading\"></v-loading>\n    </div>\n</div>";

/***/ }

});