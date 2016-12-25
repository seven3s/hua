webpackJsonp([2],{

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

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @File:      登录页面
	 * @Author:    花夏(liubiao01@itoxs.com)
	 * @Version:   V0.0.1
	 * @Date:      2016-08-30 18:49:35
	 */
	var Vue = __webpack_require__(1);
	__webpack_require__(166);
	var title = __webpack_require__(36);
	var restFullLoader = __webpack_require__(15);
	module.exports = Vue.extend({
	    ready: function () {
	        this.init();
	    },
	    template: __webpack_require__(168),
	    data: function () {
	        return {
	            userName: '',
	            password: '',
	            postState: 0,
	            passwording: 0
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
	            var me = this;
	            title.setTitle('客官您来啦');
	            var validationRules = {
	                user: {
	                    identifier: 'user',
	                    rules: [
	                        {
	                            type: 'empty',
	                            prompt: '用户名必填！'
	                        }
	                    ]
	                },
	                password: {
	                    identifier: 'password',
	                    rules: [
	                        {
	                            type: 'empty',
	                            prompt: '请输入密码！'
	                        }, {
	                            type: 'minLength[6]',
	                            prompt: '密码不得小于6位！'
	                        }
	                    ]
	                }
	            };
	            $(function() {
	                // $('#login #password').focus(function() {
	                //     $('#owl-login').addClass('password');
	                // }).blur(function() {
	                //     $('#owl-login').removeClass('password');
	                // });
	                // 登陆校验
	                $('.ui.form').form({
	                    fields: validationRules,
	                    inline: true,
	                    on: 'submit',
	                    onSuccess: function () {
	                        me.login();
	                    }
	                });
	            });
	        },

	        /**
	         * passwordFocus 正在输入密码
	         *
	         */
	        passwordFocus: function () {
	            this.$data.passwording = 1;
	        },

	        /**
	         * passwordBlur 未输入密码
	         *
	         */
	        passwordBlur: function () {
	            this.$data.passwording = 0;
	        },

	        /**
	         * login 登陆
	         *
	         */
	        login: function () {
	            var me = this;
	            var url = '/api/login';
	            var data = {
	                userName: me.$data.userName,
	                password: me.$data.password
	            }
	            this.$data.postState = 1;
	            // $.ajax({
	            //     url: '/api/login',
	            //     type: 'POST',
	            //     data: data,
	            //     success: function(data) {
	            //         // 用户名不存在
	            //         if (data.status === -1) {
	            //             me.$data.postState = 0;
	            //             swal({
	            //                 title: '',
	            //                 text: data.message,
	            //                 type: 'error'
	            //             });
	            //         }else if (data.status === 0) {
	            //             me.$data.postState = 0;
	            //             // 密码错误
	            //             swal({
	            //                 title: '',
	            //                 text: data.message,
	            //                 type: 'error'
	            //             });
	            //         }else if (data.status === 1) {
	            //             // 登陆成功
	            //             swal({
	            //                 title: '',
	            //                 text: data.message,
	            //                 type: 'success'
	            //             }, function () {
	            //                 var url = '/';
	            //                 me.$route.router.go('/');
	            //             });
	            //         }
	            //     },
	            //     error: function(data, e) {
	            //         me.$data.postState = 0;
	            //     }
	            // });
	            restFullLoader.requestPOST(url, data, function (res) {
	                // 用户名不存在
	                if (res.status === -1) {
	                    me.$data.postState = 0;
	                    swal({
	                        title: '',
	                        text: res.message,
	                        type: 'error'
	                    });
	                }else if (res.status === 0) {
	                    me.$data.postState = 0;
	                    // 密码错误
	                    swal({
	                        title: '',
	                        text: res.message,
	                        type: 'error'
	                    });
	                }else if (res.status === 1) {
	                    // 登陆成功
	                    swal({
	                        title: '',
	                        text: res.message,
	                        type: 'success'
	                    }, function () {
	                        var url = 'www.huar.love/hua/#!/';
	                        self.location.href = url;
	                        // me.$route.router.go('/');
	                    });
	                }
	            }, function (err) {
	                me.$data.postState = 0;
	            });
	        }
	    }
	});

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(167);
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

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "#login {\n    background: rgba(0, 0, 0, 0) linear-gradient(135deg, #ea5c54 0%, #bb6dec 100%) repeat scroll 0 0;\n    font-family: \"Gudea\", sans-serif;\n    margin: 0;\n    overflow: hidden;\n    perspective: 800px;\n    padding-top: 150px;\n    height: 100vh;\n}\n\n#login .loginform,\n#register .loginform {\n    background-color: #ffffff;\n    border: 1px solid #dddddd;\n    margin: 0 auto;\n    max-width: 400px;\n    padding: 0;\n    position: relative;\n}\n\n#login #owl-login,\n#register #owl-login {\n    background-image: url(http://odflit039.bkt.clouddn.com/owl-login@2x.png);\n    background-size: 211px 108px;\n    height: 108px;\n    left: 50%;\n    margin-left: -104px;\n    position: absolute;\n    top: -100px;\n    width: 211px;\n}\n\n#login #owl-login .hand,\n#register #owl-login .hand {\n    background-color: #472d20;\n    border-radius: 40px;\n    bottom: -8px;\n    height: 34px;\n    left: 14px;\n    position: absolute;\n    transform: scaleY(0.6);\n    transition: all 0.3s ease-out 0s;\n    width: 34px;\n}\n\n#login #owl-login .hand.hand-r,\n#register #owl-login .hand.hand-r {\n    left: 170px;\n}\n\n#login #owl-login .arms,\n#register #owl-login .arms {\n    height: 41px;\n    overflow: hidden;\n    position: absolute;\n    top: 58px;\n    width: 100%;\n}\n\n#login #owl-login .arms .arm,\n#register #owl-login .arms .arm {\n    background-image: url(http://odflit039.bkt.clouddn.com/owl-login-arm@2x.png);\n    background-size: 40px 65px;\n    height: 65px;\n    left: 20px;\n    position: absolute;\n    top: 40px;\n    transform: rotate(-20deg);\n    transition: all 0.3s ease-out 0s;\n    width: 40px;\n}\n\n#login #owl-login .arms .arm.arm-r,\n#register #owl-login .arms .arm.arm-r {\n    left: 158px;\n    transform: rotate(20deg) scaleX(-1);\n}\n\n#login .loginform .pad,\n#register .loginform .pad {\n    overflow: hidden;\n    padding: 30px 30px 10px;\n}\n\n#login .loginform .controls,\n#register .loginform .controls {\n    margin-bottom: 10px;\n    position: relative;\n}\n\n#login #owl-login.password .hand,\n#register #owl-login.password .hand {\n    transform: translateX(42px) translateY(-15px) scale(0.7);\n}\n\n#login #owl-login.password .hand.hand-r,\n#register #owl-login.password .hand.hand-r {\n    transform: translateX(-42px) translateY(-15px) scale(0.7);\n}\n\n#login #owl-login.password .arms .arm,\n#register #owl-login.password .arms .arm {\n    transform: translateY(-40px) translateX(40px);\n}\n\n#login #owl-login.password .arms .arm.arm-r,\n#register #owl-login.password .arms .arm.arm-r {\n    transform: translateY(-40px) translateX(-40px) scaleX(-1);\n}\n\n#login .loginform label {\n    color: rgba(0, 0, 0, 0.3);\n    font-size: 16px;\n    left: 13px;\n    position: absolute;\n    top: 13px;\n}\n\n.login-btn {\n    padding: 0 30px 45px;\n    width: 100%;\n}\n.goback {\n    position: absolute;\n    bottom: 5px;\n    right: 30px;\n}\n.form div.input {\n    width: 100%;\n}\n#app {\n    padding: 0;\n}", ""]);

	// exports


/***/ },

/***/ 168:
/***/ function(module, exports) {

	module.exports = "<div id=\"login\">\n    <div class=\"loginform ui form segment\">\n        <div id=\"owl-login\" class=\"{{passwording === 1 && postState === 0 ? 'password' : ''}}\">\n            <div class=\"hand\"></div>\n            <div class=\"hand hand-r\"></div>\n            <div class=\"arms\">\n                <div class=\"arm\"></div>\n                <div class=\"arm arm-r\"></div>\n            </div>\n        </div>\n        <div class=\"pad ui\">\n            <div class=\"field\">\n                <div class=\"ui left icon input\">\n                    <input type=\"text\" autofocus=\"autofocus\" tabindex=\"1\" placeholder=\"用户名\" name=\"user\" id=\"user\" v-model=\"userName\">\n                    <i class=\"user icon\"></i>\n                </div>\n            </div>\n            <div class=\"field\">\n                <div class=\"ui left icon input\">\n                    <input type=\"password\" tabindex=\"2\" placeholder=\"密码\" name=\"password\" id=\"password\" v-model=\"password\" @focus=\"passwordFocus\" @blur=\"passwordBlur\">\n                    <i class=\"lock icon\"></i>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui buttons login-btn\">\n            <button class=\"ui green basic button submit loading\" tabindex=\"4\" v-if=\"postState === 1\" disabled>登录</button>\n            <button class=\"ui green basic button submit\" tabindex=\"4\" v-else>登录</button>\n        </div>\n        <a href=\"/hua\" class=\"goback\" title=\"返回首页\">返回首页</a>\n    </div>\n</div>\n";

/***/ }

});