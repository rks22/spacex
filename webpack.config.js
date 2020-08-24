const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
  target: 'node',
  entry: {
    "page": "./src/index.js",
   },
   output: {
    path: __dirname,
    filename: "bundle.js",
   },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve : {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
              plugins: ["css-modules-transform"]
          
          }
        } 
     },
      {
        test: /\.css?$/,
        include: [
            path.resolve(__dirname, './src'),
          ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules : true
            }
          },
        ],
      },
    ],
  },
};