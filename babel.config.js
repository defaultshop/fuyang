// module.exports = {
//   presets: [
//     '@vue/cli-plugin-babel/preset'
//   ]
// }

module.exports = function(api) {
  api.cache(true);
  console.log(process.env.NODE_ENV,process.env.VUE_APP_BASIC_API,'babel');
  let newPlugins = [
    '@babel/plugin-proposal-private-methods',
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ];
  if (process.env.NODE_ENV === 'product') {
    newPlugins.push('transform-remove-console')
  }
  return {
    presets: ['@vue/app'],
    plugins: newPlugins,
    sourceType: 'unambiguous',
  };
};