module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@modules': './src/modules',
          '@navigation': './src/navigation',
          '@constants': './src/constants',
          '@customHooks': './src/customHooks',
          '@utils': './src/utils',
          '@popularMoviesMiddleware': './src/popularMoviesMiddleware',
        },
      },
    ],
  ],
};
