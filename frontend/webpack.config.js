const path = require('path');

const CspPlugin = require('@melloware/csp-webpack-plugin');

module.exports = {
  mode: 'development', // Set to 'production' for optimized builds
  entry: './src/index.tsx', // Assuming your index file is in src/index.tsx
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // Add plugins as needed, e.g., HTMLWebpackPlugin, MiniCssExtractPlugin
    new CspPlugin({
      'default-src': ['self'],
      'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
      'font-src': ['self', 'https://fonts.gstatic.com/'],
    })
  ],
  devServer: {
    headers : {
      'Content-Security-Policy' : "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com;"
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
    hot: true
  },
};