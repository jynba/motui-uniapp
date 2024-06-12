import type { VitePWAOptions } from 'vite-plugin-pwa'

export const pwa: Partial<VitePWAOptions> = {
  base: '/',
  scope: '/',
  manifest: {
    name: 'motui-uniapp',
    short_name: 'motui-uniapp',
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'], // 匹配需要缓存的文件类型
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, // 匹配需要缓存的 Google 字体
        handler: 'CacheFirst', // 缓存优先策略
        options: {
          cacheName: 'google-fonts-cache', // 缓存名称
          expiration: {
            maxEntries: 10, // 最大缓存条目数
            maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
          },
          cacheableResponse: {
            statuses: [0, 200], // 缓存的响应状态码
          },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i, // 匹配需要缓存的 Google 字体
        handler: 'CacheFirst', // 缓存优先策略
        options: {
          cacheName: 'gstatic-fonts-cache', // 缓存名称
          expiration: {
            maxEntries: 10, // 最大缓存条目数
            maxAgeSeconds: 60 * 60 * 24 * 365, // 缓存有效期，365天
          },
          cacheableResponse: {
            statuses: [0, 200], // 缓存的响应状态码
          },
        },
      },
      {
        urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i, // 匹配需要缓存的 jsdelivr 图片
        handler: 'NetworkFirst', // 网络优先策略
        options: {
          cacheName: 'jsdelivr-images-cache', // 缓存名称
          expiration: {
            maxEntries: 10, // 最大缓存条目数
            maxAgeSeconds: 60 * 60 * 24 * 7, // 缓存有效期，7天
          },
          cacheableResponse: {
            statuses: [0, 200], // 缓存的响应状态码
          },
        },
      },
    ],
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallback: '/',
  },
}
