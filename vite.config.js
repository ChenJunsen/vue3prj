import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

//别名拼接路径的工具类
const _resolve = target => resolve(__dirname, target)
console.log('项目src目录:' + _resolve('src'))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server:{
        port: 1234,//本地服务启动的端口号，默认3000
        open: true//本地服务启动完毕后是否自动打开到浏览器
    },
    resolve: {
        alias: {//自定义目录别名
            '@': _resolve('src'),
            '@components':_resolve('src/components')
        }
    }
})
