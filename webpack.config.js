const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var config = {
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  entry: {
    page: "./src/index.js",
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(module.css|css)?$/,
        include: [path.resolve(__dirname, "./src")],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[name]__[local]",
                exportOnlyLocals: false,
              },
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development" || env.watch) {
    config = {
      ...config,
      devtool: "source-map",
      mode: "development",
      watch: true,
      watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
        ignored: /node_modules/,
      },
    };
  } else {
    config.mode = "production";
  }
  return config;
};
