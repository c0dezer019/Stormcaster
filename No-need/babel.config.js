module.exports = api => {
   api.cache(false);

   const presets = [
      '@babel/preset-typescript',
      '@babel/preset-env',
   ];

   const plugins = [
      '@babel/plugin-transform-runtime'
   ]

   return { presets, plugins };
};
