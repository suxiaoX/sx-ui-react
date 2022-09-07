import { readdirSync } from 'fs';
import { defineConfig } from 'dumi';
import { join } from 'path';

const headPkgList = [];
const pkgList = readdirSync(join(__dirname, 'packages')).filter(
  (pkg: string) => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg),
);
const tailPkgList = pkgList
  .map((path) => [join('packages', path, 'src')])
  .reduce((acc, val) => acc.concat(val), []);

/* const alias = pkgList.reduce((pre, pkg) => {
  pre[`@ant-design/pro-${pkg}`] = join(__dirname, 'packages', pkg, 'src');
  return {
    ...pre,
  };
}, {}); */

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  //网站描述
  mode: 'site',
  title: 'cfc-ui-react',
  favicon: 'http://staging-cfc-tech-admin-frontend.pt.xiaomi.com/public/favicon.ico',
  logo: '/cfc-ui-react/assets/photos.svg',
  // 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  description: '米消金B端 react 组件库',
  base: '/cfc-ui-react',
  publicPath: '/cfc-ui-react/', // 打包文件时，引入地址生成 publicPath/xxx.js
  outputPath: 'docs-dist',
  // exportStatic: {}, // 对每个路由输出html
  // dynamicImport: {}, // 动态导入
  // manifest: {
  //   // 内部发布系统规定必须配置
  //   fileName: 'manifest.json',
  // },
  // 主题
  theme: {
    '@c-primary': '#03705e',
  },
  resolve: {
    includes: [...tailPkgList, 'docs'],
  },

  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/pro-components',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/pro-components',
      },
    ],
  },
  analytics: isProduction
    ? {
        ga: 'UA-173569162-1',
      }
    : false,
  hash: true,
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  // more config: https://d.umijs.org/config
});
