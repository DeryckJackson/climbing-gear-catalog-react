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
    jest: {
      version: 'detect',
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  rules: {
    '@typescript-eslint/semi': ['error'],
    'no-console': 'warn',
    'max-len': ['error', {'code': 80}]
  },
  plugins: [
    'jest',
    '@typescript-eslint',
    'react',
  ],
};
