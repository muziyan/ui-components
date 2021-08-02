# Vue3组件库开发笔记

#### rollup 
[rollup config 官方配置文档](https://www.rollupjs.com/guide/big-list-of-options)

#### 依赖  
生产依赖
* `@rollup/plugin-typescript` 支持typescript
* `@rollup/plugin-babel` 用于rollup和babel之间的无缝集成
* `rollup-plugin-postcss` 对css预处理文件进行解析处理
* `@rollup/plugin-commonjs` 将CommonJS模块转换成ES6,方便rollup直接调用
* `@rollup/plugin-node-resolve` 对第三方模块对引入
* `cssnano` postcss的插件
* `@vue/babel-plugin-jsx` vue3.x jsx的babel编译插件

开发依赖
* `cross` 用来设置环境变量的一个依赖包,常用在区分开发,测试和生产环境.
* `@rollup/plugin-alias` 用于路径别名
* `acorn-jsx` 用来解析jsx

