import type {App} from "vue"

// 全局加载
import * as components from "./components"

// 按需加载,需要先全部引入
export * from "./components";

// 工具函数
export * from "./utils"

import "./style"

export const install = function(app:App){
  // 全局加载注册
  Object.keys(components).forEach((key:string) => {
    // @ts-ignore
    const component = components[key];
    if(component.install){
      app.use(component)
    }
  })

  return app;
}

export default {
  install
}