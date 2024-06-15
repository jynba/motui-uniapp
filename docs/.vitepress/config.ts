import { defineConfig } from 'vitepress'

import { withPwa } from '@vite-pwa/vitepress'
import { components, guides, navComponents } from './items'

import { pwa } from './scripts/pwa'

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    title: 'motui-uniapp',
    description: '移动端组件库，完全适配uni-app',
    lastUpdated: true,
    head: [
      ['meta', { property: 'og:title', content: 'NutUi' }],
      [
        'meta',
        {
          property: 'og:description',
          content: '移动端组件库，完全适配uni-app',
        },
      ],
      ['meta', { property: 'og:url', content: 'https://github.com/jynba/motui-uniapp' }],
      ['meta', { name: 'referrer', content: 'no-referrer' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
    ],
    themeConfig: {
      logo: '/logo-yellow.png',

      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: '指南', items: guides },
        { text: '组件', items: navComponents },
        { text: '贡献指南', link: 'https://github.com/jynba/motui-uniapp/blob/main/CONTRIBUTING.md' },
      ],

      search: {
        provider: 'local',
      },

      sidebar: {
        '/guide/': [
          {
            text: '指南',
            items: guides,
          },
        ],
        '/components/': [
          {
            text: '组件',
            items: components,
          },
        ],
      },

      socialLinks: [{ icon: 'github', link: 'https://github.com/jynba/motui-uniapp' }],

      editLink: {
        pattern: 'https://github.com/jynba/motui-uniapp/edit/main/docs/:path',
        text: '在 GitHub 上编辑此页',
      },

      footer: {
        message: 'MIT Licensed',
        copyright: '版权所有 © 2024 年-至今',
      },
      aside: false,
      returnToTopLabel: 'top',

    },

    markdown: {
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    pwa,
  }),
)
