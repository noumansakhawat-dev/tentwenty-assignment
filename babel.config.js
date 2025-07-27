module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    env: {
      production: {
        plugins: ['react-native-paper/babel', 'react-native-worklets/plugin', 'module:react-native-dotenv']
      }
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '~': ['./src/'],
            '@tentwenty-tech/theme': './src/hooks/useTheme.ts',
            '@tentwenty-tech/icons': './packages/icons/index.tsx'
          }
        }
      ],
      'react-native-worklets/plugin',
      'module:react-native-dotenv'
    ]
  };
};
