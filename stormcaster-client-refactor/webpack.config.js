import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import Interpolate from 'interpolate-html-plugin';

module.exports = {
   entry: './src/index.tsx',
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
               loader: 'ts-loader',
            },
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'css-loader',
               },
            ],
         },
         {
            test: [/\.(png|svg|jpg|jpeg|gif|ico)$/],
            exclude: /node-modules/,
            use: ['file-loader?name=[name].[ext]'],
         },
      ],
   },
   plugins: [
      new HtmlWebPackPlugin({
         template: './public/index.html',
      }),
      new Interpolate({
         PUBLIC_URL: 'static',
      }),
   ],
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
   },
};
