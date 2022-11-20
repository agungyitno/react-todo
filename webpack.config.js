const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
});

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: "index.js",
    path: path.resolve("dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 9000,
  },
  plugins: [htmlPlugin],
};
