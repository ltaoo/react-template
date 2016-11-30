# 基于 webpack 的 react 开发环境

借助`vue-cli`可以快速配置 react 开发环境。

## 使用

需要全局安装了 `vue-cli`
```bash
npm install -g vue-cli
```
使用`vue init`命令初始化项目
```bash
vue init ltaoo/react-template <folderName>
```

安装依赖并运行
```bash
cd folderName
npm install
npm run dev
```

打包
```bash
npm run build
```

## 功能

- jsx 语法
- es6 语法
- scss 支持以及 source-map
- hot-reload
- react-router
- redux
     - redux-thunk

## todo
- 分离公共代码（第三方类库引用？）与业务代码
- 生成打包 css 文件