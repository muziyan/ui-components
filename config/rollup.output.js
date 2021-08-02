/**
 * * 
 * ! author: jixiaoqi
 * ? description: Chasing the wind.
 * @param rollup.output
 * TODO: since: created time  2021-07-29 23:45:18
 **/


// package json
import packageJson from "../package.json"

// 提取全局包
const globals = {
  vue:"Vue"
}

// 编译模式
export const isPro = process.env.NODE_ENV === "production";

// 是否是生产环境
const path = isPro ? "./lib/" : "./dist";

// output 完全依赖于rollup的output规则，
// [iife、es、umd] 对应三种不同打包的使用场景.
// iife 在浏览器端使用，es 对应打包处es 模块代码。umd就是一种javascript通用模块定义规范
const output = [];

// if(isPro){
  // ['iife','es','umd'].forEach((item,key) => {
  //   output.push({
  //     dir:path + item,
  //     format: item,
  //     globals,
  //     name:packageJson.name
  //   })
  // })
// } else {
  output.push({
    dir:path,
    format:"es",
    globals,
    name:packageJson.name
  })
// }


export default output;