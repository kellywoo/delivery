module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '^[A-Z]',
            ignoreRestSiblings: true,
            caughtErrorsIgnorePattern: 'err',
            vars: 'local',
          },
        ],
      },
    },
  ],
};
