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