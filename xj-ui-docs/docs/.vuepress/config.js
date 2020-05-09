module.exports = {
  title: "XJ-UI",
  description: "自定义组件库",
  dest: "./build",
  port: 1234,

  // element
  head: [
    [ 'link', { rel: 'icon', href: '/logo.png'} ]
  ],

  // language
  locales: {
    '/': {
      lang: 'en-US',
      description: 'Custom Component'
    },
    '/zh/': {
      lang: 'zh-CN',
      description: '自定义组件库'
    },
  },

  // navbar
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "自定义组件库",
        link: "/components/my-button",
      },
      {
        text: "a",
        link: "/c",
      },
      {
        text: "b",
        link: "/d",
      },
      {
        text: "c",
        link: "/e",
      },
      {
        text: "d",
        link: "/f",
      },
    ],
    sidebar: {
      "/components/": [
        'my-button',
        'one',
        'two',
      ],
    },
  },
};
