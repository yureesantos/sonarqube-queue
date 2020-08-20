module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'airbnb-base',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {},
};
