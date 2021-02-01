module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['import', 'promise', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Native
    'class-methods-use-this': [0],
    'new-cap': 0,
    'no-restricted-syntax': 0,
    'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],

    // Plugins
    'promise/always-return': 'error',
    'promise/avoid-new': 'warn',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'warn',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-return-in-finally': 'warn',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/valid-params': 'warn',
  },
};
