

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  target: 'node',
node: {
  __dirname: false,
  __filename: false,
},
  entry: {
    "page": "./src/index.js",
   },
   output: {
    path: __dirname,
    filename: "bundle.js",
   },
  resolve : {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:  "[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        } 
     },
      {
        test: /\.(module.css|css)?$/,
        include: [
            path.resolve(__dirname, './src'),
          ],
        use: [
         MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportOnlyLocals: false
            },
              importLoaders: 1
            }
          },
        ],
      },
    ],
  },
};