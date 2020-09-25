module.exports = {
  env: {
    'browser': true,
  },

  extends: [
    '@metamask/eslint-config',
    <% if (typescript) { %>'@metamask/eslint-config/config/typescript',<% } %>
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
};