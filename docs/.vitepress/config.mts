import { defineConfig } from 'vitepress'
import {getSidebarData} from "./theme/utils/generate-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Product Weekly",
  description: "Popular Products This Week.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Product Weekly', link: '/product-weekly' }
    ],

    sidebar: {
      '/product-weekly': getSidebarData(),
      '/markdown-examples' : [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codersiage/github-weekly' }
    ],

    // 大纲显示 2-6 级别的标题
    outline: {
      level: [2, 6]
    },


  }
})
