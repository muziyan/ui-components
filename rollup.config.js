/**
 * * 
 * ! author: jixiaoqi
 * ? description: Chasing the wind.
 * @param rollup.config
 * TODO: since: created time  2021-07-29 23:45:36
 **/


import jsx from "acorn-jsx"
import output from "./config/rollup.output"
import plugins from "./config/rollup.plugins"

export default{
  input:"./components/index.ts",   // 打包主文件
  output,                          // 输出文件
  plugins,                         // 插件
  acornInjectPlugins:[jsx()],           
  external:["vue"]
}