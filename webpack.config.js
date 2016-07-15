
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: './bin',
    publicPath: '/assets/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader?name=img/[hash:6].[ext]"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
