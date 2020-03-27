// babel.config.js or babel-loader option
{
  "plugins": [
    [
      "import",
      { "libraryName": "antd", "libraryDirectory": "es", "style": "css" },
      "@babel/plugin-proposal-class-properties"
    ] // `style: true` for less
  ]
}