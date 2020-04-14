const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     filename: 'main.[hash].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },

//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       title: 'Output Management',
//       template: './src/index.html',
//     }),
//   ],
//   watch: true,
//   module: {
//     rules: [
//       { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader',
//         ],
//       },
//     ],
//   },
//   devtool: 'source-map', // development
// };

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: '',
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.output.filename = 'main.bundle.js';
  }

  if (argv.mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin());
    config.output.filename = 'main.[hash].bundle.js';
  }
  return config;
};