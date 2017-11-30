module.exports = {
  entry: "./index.js",
  output: {
        path: `${__dirname}/dist`,
        publicPath: '/dist/',
        filename: "bundle.js"
    },
  module:{
    loaders: [
      {
        test: /\.jsx?/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  }
}
