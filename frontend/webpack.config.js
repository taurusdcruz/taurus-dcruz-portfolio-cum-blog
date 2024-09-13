const path = require('path');

module.exports = {
  mode: 'development', // Set to 'production' for optimized builds
  entry: './src/index.tsx', // Assuming your index file is in src/index.tsx
  output: {
    publicPath : '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Handle TypeScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'], // Add preset for TypeScript
          },
        },
      },
      {
        test: /\.scss$/, // Handle SCSS files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Add TypeScript extensions
  },
};