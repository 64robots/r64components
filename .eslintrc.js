module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "parser": 'babel-eslint',
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  "extends": "standard",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'no-return-assign': 'off',
    'no-extend-native': 'warn',
  }
};
