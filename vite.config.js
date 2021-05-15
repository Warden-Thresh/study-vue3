// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite'
// eslint-disable-next-line import/no-extraneous-dependencies
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import styleImport from 'vite-plugin-style-import'

const path = require('path')

export default defineConfig({
  // 代理，最重要，其他的都可以有默认配置
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true
    }
  },

  // 是否开启ssr服务断渲染
  ssr: false,
  // 重命名路径  path.resolve(__dirname, './src')

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    }
  },

  // 端口
  // port: 3002,
  // 是否自动开启浏览器
  open: true,
  // 开启控制台输出日志
  silent: false,
  // 哪个第三方的包需要重新编译
  optimizeDeps: [],
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ]
})
