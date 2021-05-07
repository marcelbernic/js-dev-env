import path from "path";
import HtmlWebpackPulgin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { webpack } from "webpack";

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  output: {
    path: path.resolve(__dirname, "dist"), // dist = distribution
    publicPath: "/",
    filename: "[name].[chunkhash].js", // this tells webpack to generate a name defined in the entry point ('main' and 'vendor' for this example)
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
    // Create HTML file that includes references to bundled JS.
    new HtmlWebpackPulgin({
      template: "src/index.html",
      // Properties yuo define here are available in index.html
      // using htmlWebPackPlugin.options.varName
      trackJSToken: "be1a08d42b71408582d380128cfaad7d",
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }, // this means we can import CSS just like we so JS. Webpack will bundle our CSS.
    ],
  },
};
