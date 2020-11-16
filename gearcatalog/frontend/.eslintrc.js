module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    '@typescript-eslint/semi': ['error'],
    'no-console': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  plugins: ['jest'],
};
