module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '~': ['./src/']
          }
        }
      ]
    ]
  };
};
