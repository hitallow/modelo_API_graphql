/**
 * Webpack configurations which apply to all environments.
 * Both webpack.development.js and webpack.production.js “inherits”
 * common configurations using the webpack-merge plugin.
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, "node_modules")],
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  target: "node"
};
