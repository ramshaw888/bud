module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            styles: './styles.ts',
            helpers: './helpers.ts',
            paramLists: './paramLists.ts',
            components: './components',
            screens: './screens',
          },
        },
      ],
    ],
  };
};
