module.exports = {
  "plugins": [
    // 解析vue中的jsx
    "@vue/babel-plugin-jsx",
    "@babel/plugin-syntax-jsx"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ]
}