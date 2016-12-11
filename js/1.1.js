webpackJsonp([1],{

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      首页
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-08-30 15:16:59
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(29);
	module.exports = Vue.extend({
	    ready: function () {
	        
	    },
	    template: __webpack_require__(31),
	    data: function () {
	        return {
	            waterdata: {}
	        };
	    },
	    events: {
	        
	    },
	    components: {
	        'v-list': __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../list\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	    },
	    watch: {
	        
	    },
	    methods: {
	        /**
	         * post 备份全部诗歌
	         *
	         */
	        post: function () {
	            $.ajax({
	                url: '/api/backup',
	                type: 'POST'
	            })
	            .done(function(json) {
	                console.log(json);
	            })
	            .fail(function() {
	                console.log("error");
	            });
	        }
	    }
	});

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(30);
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

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#main {\n    width: 96.3%;\n}", ""]);

	// exports


/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = "<v-list></v-list>";

/***/ }

});