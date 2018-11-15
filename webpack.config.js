const path = require('path')

module.exports = {
  mode: "production",
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "build", "js"),
    filename: "bundle.js",
    library: "LaserBot",
    libraryTarget: "var"
  }
}