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