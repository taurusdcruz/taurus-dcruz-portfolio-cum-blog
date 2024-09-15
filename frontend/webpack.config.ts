const path = require('path');

import webpack from 'webpack';
import 'webpack-dev-server';
const config: webpack.Configuration = {
  mode: 'development', // Set to 'production' for optimized builds
  entry: './src/index.tsx', // Assuming your index file is in src/index.tsx
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before each build
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Add preset for TypeScript
            },
          },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test:
          /\.js$/,
        use: 'babel-loader', // If you need to transpile JavaScript
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  devtool: 'source-map', // Enable source maps for debugging
  plugins: [
    // Add plugins as needed, e.g., HTMLWebpackPlugin, MiniCssExtractPlugin
  ],
  devServer: {
    // headers: {
    //   'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;"
    // },
    static: {
      directory: path.join(__dirname, 'public'),
      watch: true, // Enable file watching for static assets
      publicPath: '/'
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true,
    liveReload: true,
    client: {
      reconnect: true,
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },

};


export default config;