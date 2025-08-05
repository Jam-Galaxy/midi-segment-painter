const path = require("path")
const { merge } = require("webpack-merge")
const common = require("./webpack.common.js")
const CopyPlugin = require("copy-webpack-plugin")

const PUBLIC_PATH = '/midi-segment-painter/';

module.exports = merge(common(), {
  mode: "production",
  entry: {
    lib: {
      import: "./src/lib.tsx",
      library: {
      type: 'module',        
      },
    },
  },
  optimization: {
    concatenateModules: false,
    splitChunks: false,
    minimize: true,
  },
  output: {
    path: path.resolve(__dirname, 'build' + PUBLIC_PATH),
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/*.svg", to: "[name][ext]", noErrorOnMissing: true, },
        { from: "public/*.png", to: "[name][ext]",
          noErrorOnMissing: true,
         },
      ],
    }),
  ],
  experiments: {
    outputModule: true,
  },
})
