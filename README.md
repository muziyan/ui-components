# Vue3组件库开发笔记

#### rollup 
[rollup config 官方配置文档](https://www.rollupjs.com/guide/big-list-of-options)
[babel 官方文档](https://babeljs.io/)

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
* `@types` 开头的文件都是typescript声明包便于开发提示
* `@babel/core` babel编译核心代码
* `@babel/plugin-syntax-jsx` babel编译jsx语法插件
* `@babel/preset-env` babel预设配置包可以使用最新到JavaScript特性
* `@vue/compiler-sfc` vue3.x单文件组件编译包
* `@vue/test-utils` vue官方单元测试工具,这是vue3.x尝鲜版本
* `jest` 测试库
* `jest-serializer-vue` 组合vue使用jest单元测试
* `jest-transform-stub` 解析静态文件等等
* `sass` css预解析器
* `ts-babel` babel解析ts
* `ts-jest` jest配合ts使用的依赖库
* `tslib` typescript工具依赖包
* `babel-jest` jest做测试的时候进行代码转译
* `vue3-jest` jest测试vue需要的配置依赖
* `postcss` 给css添加各种浏览器适配代码
* `cssnano` 配合postcss使用来进行代码合并