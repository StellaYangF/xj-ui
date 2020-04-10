module.exports = {
    title: 'XJ-UI',
    description: '自定义组件库',
    dest: './build',
    port: 1234,
    themeConfig: {
        nav: [{
            text: '主页',
            link: '/'
        },  {
            text: '自定义组件库',
            link: '/projects'
        }, {
            text: "简历",
            link: '/resume',
        }
        ],
        sidebar: {
            '/components/': [{
                collapsable: true,
                children: [
                    'button'
                ]
            }
            ]
        }
    }
}