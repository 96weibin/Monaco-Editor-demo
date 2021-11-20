# `Monaco-Editor-demo`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `npm start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `npm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `npm run analyze` (production build).

To enable hot module reload, do `npm start -- --hmr`.

To change dev server port, do `npm start -- --port 8888`.

To change dev server host, do `npm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `npm start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `npm start` command.

## Build for production

Run `npm run build`, or the old way `au build --env prod`.

## Unit tests

Run `au test` (or `au jest`).

To run in watch mode, `au test --watch` or `au jest --watch`.

## 思路

1. 找到 [微软Monaco editor的官网](https://microsoft.github.io/monaco-editor/index.html) 

2. 根据home 的操作 在项目里npm 安装，在组件中引入

3. 根据 [PLAYGROUND](https://microsoft.github.io/monaco-editor/playground.html) 不同的demo  来在项目中配置


> 在cli创建的项目中,可以有提示，.d.ts 等  能够更好的学习使用.

## API

- 部分常用API

    api | 功能
    -|-
    updateOptions | 设置option 

- Options

    option | 功能 | 取值
    -|-|-
    value | 代码段 | string
    language | | string
    lineNumbers | 显示行号 | off/on
    roundedSelection | 圆形选择？？？ | boolean
    readOnly | | boolean
    theme | 皮肤 | 'vs-dark'...
    wordWrap | 换行规则 | 'wordWrapColumn'自动换行
    wordWrapColumn | 多少自动换行 | number 
    wordWrapMinified | 换行自动缩进 | boolean
    wrappingIndent | 缩进 | 'indent'/'none'