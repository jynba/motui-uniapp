// pages.config.ts
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  // You can also define pages fields, which have the highest priority.
  // easycom: {
  //   autoscan: true,
  //   custom: {
  //     '^mot-(.*)?-(.*)': 'uniapp-motui/components/$1$2/$1$2.vue',
  //     '^mot-(.*)': 'uniapp-motui/components/$1/$1.vue',

  //   },
  // },
  pages: [
    {
      path: 'pages/index/index',
      type: 'home',
    },
  ],
  globalStyle: {
    navigationBarBackgroundColor: '@navBgColor',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'MotUi',
    backgroundColor: '@bgColor',
    backgroundTextStyle: '@bgTxtStyle',
    backgroundColorTop: '@bgColorTop',
    backgroundColorBottom: '@bgColorBottom',
    // navigationStyle: isH5 ? 'custom' : 'default',
  },
})
