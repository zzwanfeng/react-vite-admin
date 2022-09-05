import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';



function pathResolve (dir) {
  return resolve(__dirname, dir);
}

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // https://vitejs.dev/config/
  return defineConfig({
    // 项目根目录
    root: process.cwd(),
    // 项目部署的基础路径
    base: '/',
    //环境配置
    mode: 'development',
    //全局变量替换 Record<string, string>
    define: {
      // util: [path.resolve(__dirname, './src/utils/util.ts')],
      // aaaa: "123",
    },
    plugins: [
      react(),
    ],
    //静态资源服务的文件夹
    publicDir: "public",
    resolve: {
      // 别名
      // alias: {
      //   '@': pathResolve('./src'),
      //   // '@': path.resolve(__dirname, './src'),
      //   // views: path.resolve(__dirname, './src/views'),
      //   // components: path.resolve(__dirname, './src/components'),
      //   // utils: path.resolve(__dirname, './src/utils'),
      //   // less: path.resolve(__dirname, "./src/less"),
      //   // assets: path.resolve(__dirname, "./src/assets"),
      //   // com: path.resolve(__dirname, "./src/components"),
      //   // store: path.resolve(__dirname, "./src/store"),
      //   // mixins: path.resolve(__dirname, "./src/mixins")
      // },
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@', replacement: pathResolve('./src') }
      ],
      dedupe: [],
      //情景导出package.json配置中的exports 字段
      conditions: [],
      //解析package.json中的字段
      mainFields: ['module', 'jsnext:main', 'jsnext'],
      //导入时想要省略的扩展名列表
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    // 依赖优化项
    optimizeDeps: {
      // include 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
      include: [
        '@ant-design/colors',
        '@ant-design/icons',
      ],
      // 设置为 true 强制使依赖预构建
      // force: true,
    },
    // CSS 预处理器
    css: {
      // modules: {
      //   localsConvention: 'camelCaseOnly',
      // },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // modifyVars是在全局less文件后面添加变量的配置。modifyVars对应的对象属性名会加上@追加到less文件后
          modifyVars: {
            '@primary-color': '#1890ff',
          },
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',//vite打包问题(忽略字符集问题)
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ],
      },
    },
    build: {
      // 指定输出路径
      outDir: 'dist',
      //指定生成静态资源的存放路劲
      assetsDir: 'static',
      //将 CommonJS 模块转换为 ES6 的 Rollup 插件
      commonjsOptions: {
        requireReturnsDefault: 'namespace'
      },
      rollupOptions: {
        output: {
          //分割打包   解决打包时Some chunks are larger警告    
          manualChunks (id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 1000,
      // 启用/禁用 gzip 压缩大小报告
      reportCompressedSize: false,
    },
    //静态资源处理  字符串|正则表达式
    assetsInclude: '',
    //调整控制台输出的级别 'info' | 'warn' | 'error' | 'silent'
    logLevel: 'info',
    //设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
    clearScreen: true,
    // 服务
    server: {
      // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      host: "localhost",
      port: 9527,
      // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
      strictPort: false,
      // 是否自动在浏览器打开
      open: false,
      // 是否开启 https
      https: false,
      // 为开发服务器配置 CORS
      cors: true,
      proxy: {
        '/api': {
          //#gitignoreline_start
          target: 'xxx',
          //#gitignoreline_end
          changeOrigin: true,
          ws: true,
        },
      },
    },
  })
}


