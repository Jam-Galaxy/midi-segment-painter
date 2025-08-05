const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const Dotenv = require("dotenv-webpack")

function getEntry(browserMainImport) {
  return browserMainImport ? {
    entry: {
      browserMain: { 
        import: browserMainImport ? browserMainImport : "./src/index.tsx",
      },
    }
  } : undefined;
}

module.exports = ({context, browserMainImport} = {}) => {
  const currentContext = context? context : __dirname;
  return {
    context: currentContext,
    ...getEntry(browserMainImport),
    // entry: {
    //   browserMain: { 
    //     import: browserMainImport ? browserMainImport : "./src/index.tsx",
    //   },
    // },
    output: {
      filename: (pathData) => {
        if (pathData.chunk.name === 'lib') {
          return 'lib.js';
        }
        return '[name]-[chunkhash].js';
      },
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)$/,
          loader: "url-loader",
        },

        /* audio worklets */
        { //INFO: this is a way to load the audioWorkletProcessor format already compiled in js. To load the audio processor in .ts, use the audio-worklet-loader. Example in vue.config.js inside the JamGalaxy studio project
          test: (filePath) => {
            return filePath.replace(/\\/g, '/').endsWith('@ryohey/wavelet/dist/processor.js');
          },
          type: 'asset/resource',
        },
        /* /audio worklets */
    
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias:{
        "@": path.resolve(__dirname, "./src"),
      }
    },
    plugins: [
      new Dotenv({
        path: path.join(currentContext, "./.env"),
        systemvars: true,
      }),
      new HtmlWebpackPlugin({
        inject: true,
        filename: "index.html",
        chunks: ["browserMain"],
        template: path.join(currentContext, "index.html"),
      }),
      new ForkTsCheckerWebpackPlugin({
        formatter: { type: "codeframe", pathType: "absolute" },
      }),
    ],
  }
}
