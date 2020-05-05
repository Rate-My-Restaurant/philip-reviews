module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base','plugin:jest/recommended'],
  env: {
      'jest/globals': true
  },
  plugins: ['jest'],
};