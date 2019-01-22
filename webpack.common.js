const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: `${__dirname}/src/index.js`,
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    // TODO check if this is this necessary (maybe for production):
    // chunkFilename: '[name].[chunkhash].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'index.html'),
        to: path.resolve(__dirname, 'build'),
      },
      {
        from: path.resolve(__dirname, 'assets', '**', '*'),
        to: path.resolve(__dirname, 'build')
      },
    ]),

    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
  ],
}
