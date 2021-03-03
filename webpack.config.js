const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    filename: "index.html",
  }),
];

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  plugins.push(
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "cv"),
          to: path.resolve(__dirname, "public/cv"),
        },
      ],
    })
  );
}

module.exports = {
  plugins,
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        include: path.resolve(__dirname, "src/"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: 3001,
    host: "0.0.0.0",
    watchOptions: {
      ignored: [path.resolve(__dirname, "node_modules/")],
    },
  },
};
