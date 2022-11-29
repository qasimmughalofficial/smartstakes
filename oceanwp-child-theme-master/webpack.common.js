const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.js')
    // landing: path.resolve(__dirname, 'src/build/landing.js'),
    // events: path.resolve(__dirname, 'src/build/events.js'),
    // match: path.resolve(__dirname, 'src/build/match.js'),
    // betting: path.resolve(__dirname, 'src/build/betting.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      inject: 'body'
    })
  ]
};
