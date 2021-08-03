/**
 * * 
 * ! author: jixiaoqi
 * ? description: Chasing the wind.
 * @param rollup.plugins
 * TODO: since: created time  2021-07-29 23:45:27
 **/

//@ts-ignore
import {resolve} from "path"
import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import postcss from "rollup-plugin-postcss"
import commonjs from "@rollup/plugin-commonjs"
import NodeResolve from "@rollup/plugin-node-resolve"
import cssnano from "cssnano"
import {isPro} from "./rollup.output"

// 解析的文件类型
const extensions = [".ts",".js",".tsx"]

export default [
  typescript({
    lib:['es5','es6','dom'],
    target:'es5',
    noEmitOnError:true,
    sourceMap:true,
    exclude:["**/__test__/**","**/style/"],
    outDir:resolve(__dirname,"lib/types/")
  }),
  NodeResolve({mainFields:['module','main','browser']}),
  commonjs({extensions,sourceMap:true}),
  babel({babelHelpers:"bundled",extensions}),
  postcss({
    // modules:true,
    plugins:[cssnano],
    // sourceMap:true,
    extensions:['.css','.scss'],
    extract:resolve(__dirname,"lib/style/index.css")
  })
]