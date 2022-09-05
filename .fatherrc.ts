/* import { readdirSync } from 'fs';
import { join } from 'path';

const headPkgs: string[] = ['button', 'tag'];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

const type = process.env.BUILD_TYPE;

let config = {};

if (type === 'lib') {
  config = {
    cjs: { type: 'babel', lazy: true },
    esm: false,
    runtimeHelpers: true,
    pkgs: [...headPkgs, ...tailPkgs],
    extraBabelPlugins: [
      ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    ],
  };
}

if (type === 'es') {
  config = {
    cjs: false,
    esm: {
      type: 'babel',
    },
    runtimeHelpers: true,
    pkgs: [...headPkgs, ...tailPkgs],
    extraBabelPlugins: [
      [require('./scripts/replaceLib')],
      ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    ],
  };
}

export default config;
 */
import { readdirSync } from 'fs';
import { join } from 'path';
const headPkgs: string[] = ['button', 'tag'];
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);
export default {
  target: 'browser',
  esm: {
    // rollup
    type: 'babel',
    // file: 'dist',
    minify: false, // 压缩文件
    importLibToEs: true,
  },
  // cssModules: true,
  extractCSS: false,
  lessInBabelMode: true,
  // runtimeHelpers: true,
  // entry: ['packages/button/index.tsx', 'packages/tag/index.tsx', 'packages/alert/index.tsx'],
  entry: 'packages/index.tsx',
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  extraBabelPlugins: [
    ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  ],
  pkgs: [
    // 组件依赖构建顺序
    ...headPkgs,
    ...tailPkgs,
  ],
};
