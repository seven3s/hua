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
