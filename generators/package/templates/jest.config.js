module.exports = {
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js', 'jsx', 'node'],
  <% if (typescript) { %>preset: 'ts-jest',<% } %>
  testEnvironment: 'node',
  testTimeout: 5000,
};