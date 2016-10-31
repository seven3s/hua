/**
 * @File:      server配置说明
 * @Author:    花夏(liubiao01@itoxs.com)
 * @Version:   V0.0.1
 * @Date:      2016-06-20 11:42:44
 */
module.exports = {
    // 本地模拟数据和远程服务器数据切换, 1:本地   0:远程服务器
    mockLocal: 1,
    // 远程服务地址以及可能需要的cookie配置
    remote: {
        // path: 'http://10.10.0.12:8080', // 可以是具体ip地址\具体域名地址
        path: 'http://127.0.0.1:2368',
        headers: {
            cookie: 'cookie_user_key=xxxx' // 登陆的用户名==
        }
    }
};