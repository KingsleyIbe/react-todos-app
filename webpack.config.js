const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) => new HTMLPlugin({
      title: 'Taskaid Chrome Extension',
      filename: `${chunk}.html`,
      chunks: [chunk],
    }),
  );
}

module.exports = {
  entry: {
    index: './src/index.js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'manifest.json', to: '../manifest.json' }],
    }),
    ...getHtmlPlugins(['index']),
    // new HtmlWebpackPlugin({
    //   title: 'Application name',
    //   template: './src/index.html',
    // }),
    // new HtmlWebpackPlugin(),
    // new HtmlWebpackRootPlugin(),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  output: {
    path: path.join(__dirname, 'build/js'),
    filename: '[name].js',
  },
};
