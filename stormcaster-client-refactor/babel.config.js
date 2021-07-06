module.exports = api => {
   api.cache(false);

   const presets = [
      '@babel/preset-typescript',
      '@babel/preset-env',
   ];

   const plugins = [
      '@babel/plugin-transform-runtime',
      'babel-plugin-import',
      {
         'libraryName': '@material-ui/icons',
         // Use "'libraryDirectory': ''," if your bundler does not support ES modules
         'libraryDirectory': 'esm',
         'camel2DashComponentName': false
      },
      'icons'
   ];

   return { presets, plugins };
};
