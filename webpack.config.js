const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: "./src/index.js", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "dist"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: "bundle.js", // string
    // the filename template for entry chunks

    /* Advanced output configuration (click to show) */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react']
          }
        }
      }
    ]
  },
  watch : false
  /* Advanced configuration (click to show) */
}