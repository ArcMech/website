module.exports = {
  entry: {
    main: ["@babel/polyfill", "./website/frontend/src/index.js"]
  },
  output: {
    filename: "main.js",
    path: __dirname + "/website/frontend/static/frontend/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader"
        }
      },
      {
        test: /\.css$/i,
        use: {
          loader: "css-loader",
          query: {
            modules: true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: "file-loader"
        }
      }
    ]
  }
};
