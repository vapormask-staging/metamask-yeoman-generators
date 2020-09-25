module.exports = {
  parser: 'babel-eslint',

  env: {
    'browser': true,
    'node': true,
    'jest': true,
  },

  extends: [
    '@metamask/eslint-config',

  ],

  overrides: [{
    files: [
      '.eslintrc.js',
    ],
    parserOptions: {
      sourceType: 'script',
    },
    extends: [
      '@metamask/eslint-config/config/nodejs',
    ],
  }],
}
