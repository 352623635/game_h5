import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// @ts-ignore
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 如果报错__dirname找不到，需要安装node,
    // 执行npm i @types/node --save-dev
    alias: {
      '@': path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
  // 服务配置
  server:{
    port:8081,// 端口号
    https:false,// 是否开启 https
  },
  css:{
    preprocessorOptions: {
      scss: {
        /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
        additionalData: `@import "./src/styles/css/global.scss";`,
      },
    },
  },
  build: {
    //指定输出路径
    assetsDir: "./",
    // 指定输出文件路径
    outDir: "dist",
    // 代码压缩配置
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
