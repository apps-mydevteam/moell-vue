import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import generateSitemap from 'vite-plugin-pages-sitemap'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Pages({
      onRoutesGenerated: async (routes) => {
        const names = await getNames()
        generateSitemap({
          hostname: 'https://moell.id/',
          routes: routes,
          readable: true,
        })
      },
    }),
  ],
})
