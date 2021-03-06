module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@pages': './src/pages',
          '@components': './src/components',
          '@containers': './src/containers',
          '@models': './src/models',
          '@hooks': './src/hooks',
          '@contexts': './src/contexts',
        },
      },
    ],
  ],
};
